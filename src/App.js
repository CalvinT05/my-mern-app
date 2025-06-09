import React, {useState} from 'react';
import {getLeagueAccountData} from './services/leagueService';
import {
  MasteryCrest,
  RankedEmblem,
  MiniRankedEmblem,
  SummonerIcon
} from './components/LeagueOfLegends';


function App() {
  const [gameName, setGameName] = useState('');
  const [tagLine, setTagLine] = useState('');
  const [leagueData, setLeagueData] = useState({
    account: null,
    summoner: null,
    ranked: null,
    mastery: null
  });

  const [error, setError] = useState(null);         // Holds error
  const [loading, setLoading] = useState(false);    // Handles loading state

  const leagueSearch = async () => {
    if(!gameName || !tagLine) {
      setError('Please enter both Game Name and Tag Line');
      return;
    }

    setLoading(true);
    setError(null);
    setLeagueData({
      account: null,
      summoner: null,
      ranked: null,
      mastery: null
    });

    try {
      setLeagueData(await getLeagueAccountData(gameName, tagLine));
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="App">
      <h1>Riot Account Search</h1>
      <input
        type="text"
        placeholder="Game Name"
        value={gameName}
        onChange={(e) => setGameName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Tag Line"
        value={tagLine}
        onChange={(e) => setTagLine(e.target.value)}
      />
      <button onClick={leagueSearch}>Search</button>

      {loading && <div>Loading...</div>}
      {error && <div style={{color: 'red'}}>Error: {error}</div>}

      <h2>Account Info</h2>
      <pre>{JSON.stringify(leagueData.account, null, 2)}</pre>

      <h2>Summoner Info</h2>
      <pre>{JSON.stringify(leagueData.summoner, null, 2)}</pre>

      <SummonerIcon iconId={leagueData.summoner.profileIconId} />

      <h2>Rank Info</h2>
      <pre>{JSON.stringify(leagueData.ranked, null, 2)}</pre>

      <RankedEmblem rankRaw={leagueData.ranked[0].tier} />
      <MiniRankedEmblem rankRaw={leagueData.ranked[0].tier} />

      <h2>Mastery Info</h2>
      <pre>{JSON.stringify(leagueData.mastery, null, 2)}</pre>

      <MasteryCrest masteryLevelRaw={leagueData.mastery[0].championPoints} />
    </div>
  );
}

export default App;