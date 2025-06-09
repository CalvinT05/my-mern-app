/*
 * Summoner Icon React Component
 *
 * Props: Raw mastery level
 * Renders the mastery crest based on the provided mastery 
 * level
 * 
 */
export default function SummonerIcon({iconId}) {
    // Build the icon URL from the provided icon ID
    const iconUrl = `https://ddragon.leagueoflegends.com/cdn/15.11.1/img/profileicon/${iconId}.png`;

    // Format the image for display
    return (
      <div>
          <img
              src={iconUrl}
              alt={`Summoner Icon ${iconId}`}
              style={{width: '100px', height: '100px'}}
          />
      </div>
    );
}
