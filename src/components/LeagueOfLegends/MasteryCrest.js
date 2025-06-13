/*
 * Mastery Crest React Component
 * 
 * Props: Raw mastery level
 * Renders the mastery crest based on the provided mastery 
 * level
 * 
 */

export default function MasteryCrest({masteryLevelRaw, height = '100px', width = '100px'}) {
    // Get the mastery level for the image, defaulting to 0 if less than 4
    const masteryLevel = (masteryLevelRaw > 10) ? 10 : masteryLevelRaw;
    
    // Format the image for display
    return (
      <div>
          <img
              src={`/league-of-legends/mastery-crests/mastery-${masteryLevel}.png`}
              alt={`Mastery ${masteryLevel} Crest`}
              style={{width, height}}
          />
      </div>
    );
}
