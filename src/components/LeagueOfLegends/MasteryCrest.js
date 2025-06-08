/*
 * Ranked Emblem React Component
 *
 */

import React from 'react';

/*
 * Props: Raw mastery level
 * Renders the mastery crest based on the provided mastery 
 * level
 */
function RankedEmblem({masteryLevelRaw}) {
    // Get the mastery level for the image, defaulting to 0 if less than 4
    const masteryLevel = (masteryLevelRaw < 4) ? 0 : masteryLevelRaw;
    
    // Format the image for display
    return (
      <div>
          <img
              src={`/league-of-legends/mastery-crests/level-${masteryLevel}.png`}
              alt={`$Level ${masteryLevel} Crest`}
              style={{width: '100px', height: '100px'}}
          />
      </div>
    );
}

export default RankedEmblem;
