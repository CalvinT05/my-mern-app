/*
 * Ranked Emblem React Component
 *
 */

import React from 'react';

/*
 * Props: Raw rank
 * Renders the rank emblem based on the provided rank
 * 
 */
function RankedEmblem({rankRaw}) {
    // Lowercase the rank and get image path
    const rank = (rankRaw ?? 'unranked').toLowerCase(); // Default to 'unranked' if no rank is provided
    const rankName = rank.charAt(0).toUpperCase() + rank.slice(1); // Capitalize the first letter of the rank   
    
    // Format the image for display
    return (
      <div>
          <img
              src={`/league-of-legends/ranked-emblems/${rank}.png`}
              alt={`${rankName} Emblem`}
              style={{width: '100px', height: '100px'}}
          />
      </div>
    );
}

export default RankedEmblem;
