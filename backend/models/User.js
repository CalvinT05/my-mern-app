const mongoose = require('mongoose');
const argon2 = require('argon2');
const uniqueValidator = require('mongoose-unique-validator');
const { isEmail } = require('validator');

// Sub-schemas for each game
const leagueSchema = new mongoose.Schema({
  riotPuuid:      { type: String },
  summonerName:   { type: String },
  summonerLevel:  { type: Number },
  summonerIconId: { type: Number },
  soloRank:       { type: String },
  flexRank:       { type: String },
}, { _id: false }); // _id: false means no _id field for sub-schemas

const teamFightTacticsSchema  = new mongoose.Schema({}, { _id: false });
const valorantSchema          = new mongoose.Schema({}, { _id: false });
const overwatchSchema         = new mongoose.Schema({}, { _id: false });
const counterStrikeSchema     = new mongoose.Schema({}, { _id: false });

// Main user schema
const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    trim: true,
    minlength: 3,
    maxlength: 30,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    validate: [ isEmail, 'Invalid email' ],
  },
  password: {
    type: String,
    required: true,
    select: false,            // never returned by default
  },
  games: {
    league:          { type: leagueSchema,          default: {} },
    teamFightTactics:{ type: teamFightTacticsSchema, default: {} },
    valorant:        { type: valorantSchema,        default: {} },
    overwatch:       { type: overwatchSchema,       default: {} },
    counterStrike:   { type: counterStrikeSchema,   default: {} },
  }
}, {
  timestamps: true,
  toJSON: { virtuals: true },
  toObject: { virtuals: true }
});

// Friendly unique-constraint errors
userSchema.plugin(uniqueValidator, { message: '{PATH} already in use' });

// Pre-save hook: hash with argon2id
userSchema.pre('save', async function(next) {
  if (!this.isModified('password')) return next();
  try {
    this.password = await argon2.hash(this.password, {
      type: argon2.argon2id,
      memoryCost: 2 ** 16,    // 64 MiB
      timeCost: 3,
      parallelism: 1
    });
    next();
  } catch (err) {
    next(err);
  }
});

// Instance method to verify a candidate password
userSchema.methods.verifyPassword = function(candidate) {
  // compare returns a Promise<boolean>
  return argon2.verify(this.password, candidate);
};

// Remove sensitive fields when converting to JSON
userSchema.methods.toJSON = function() {
  const obj = this.toObject();
  delete obj.password;
  return obj;
};

module.exports = mongoose.model('User', userSchema);
