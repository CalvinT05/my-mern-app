/*
 * Ranked Emblem React Component
 *
 * Props: Raw rank
 * Renders the ranked emblem based on the provided rank
 * 
 */

export default function RankedEmblem({rankRaw, height = '100px', width = '100px'}) {
    // Lowercase the rank and get image path
    const rank = (rankRaw ?? 'unranked').toLowerCase(); // Default to 'unranked' if no rank is provided
    const rankName = rank.charAt(0).toUpperCase() + rank.slice(1); // Capitalize the first letter of the rank   
    
    // Format the image for display
    return (
      <div>
          <img
              src={`/league-of-legends/ranked-emblems/${rank}.png`}
              alt={`${rankName} Ranked Emblem`}
              style={{width, height}}
          />
      </div>
    );
}
