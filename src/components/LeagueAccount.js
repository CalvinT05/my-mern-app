/* 
 * League Account React Component
 * 
 * 
 */

// Imports
import React, {useEffect, useState} from 'react';
import {getLeagueAccountData} from '../services/leagueService';

/*
 * Props: gameName, tagLine
 * 
 */
function LeagueAccount({gameName, tagLine}) {
  // Holds account, summoner, and rank data
  const [data, setData] = useState({
    account: null,
    summoner: null,
    rank: null
  });
  // Holds error message if any
  const [error, setError] = useState(null);

  // Fetch data when component mounts or gameName/tagLine changes
  useEffect(() => {
    getLeagueAccountData(gameName, tagLine)
      .then(setData)
      .catch(err => setError(err.message));
  }, [gameName, tagLine]);

  // Render component and display loading/error states
  if (error) return <div>Error: {error}</div>;
  if (!data.account || !data.summoner || !data.rank) return <div>Loading data...</div>;

  // Render account, summoner, and rank info
  return (
    <div>
      <h2>Account Info</h2>
      <pre>{JSON.stringify(data.account, null, 2)}</pre>

      <h2>Summoner Info</h2>
      <pre>{JSON.stringify(data.summoner, null, 2)}</pre>

      <h2>Rank Info</h2>
      <pre>{JSON.stringify(data.rank, null, 2)}</pre>
    </div>
  );
}

export default LeagueAccount;