import React, { useState } from 'react';
import { getLeagueAccountData } from './services/leagueService';
import {
  MasteryCrest,
  RankedEmblem,
  MiniRankedEmblem,
  SummonerIcon,
  LeagueCard
} from './components/LeagueOfLegends';

export default function App() {
  const [gameName, setGameName] = useState('');
  const [tagLine, setTagLine] = useState('');
  const [leagueData, setLeagueData] = useState({
    account: null,
    summoner: null,
    ranked: null,
    mastery: null
  });

  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const leagueSearch = async () => {
    if (!gameName || !tagLine) {
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
      const data = await getLeagueAccountData(gameName, tagLine);
      setLeagueData(data);
    } catch (err) {
      setError(err.message || 'Unknown error occurred');
    } finally {
      setLoading(false);
    }
  };

  // Safely extract data
  const profileIconId = leagueData?.summoner?.profileIconId;
  const rankedSolo = leagueData?.ranked?.find(r => r.queueType === 'RANKED_SOLO_5x5');
  const firstMastery = leagueData?.mastery?.[0];

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
      {error && <div style={{ color: 'red' }}>Error: {error}</div>}

      {/* ACCOUNT */}
      {leagueData.account && (
        <>
          <h2>Account Info</h2>
          <pre>{JSON.stringify(leagueData.account, null, 2)}</pre>
        </>
      )}

      {/* SUMMONER */}
      {leagueData.summoner && (
        <>
          <h2>Summoner Info</h2>
          <pre>{JSON.stringify(leagueData.summoner, null, 2)}</pre>
          {profileIconId !== undefined && <SummonerIcon iconId={profileIconId} />}
        </>
      )}

      {/* RANKED */}
      {leagueData.ranked && (
        <>
          <h2>Rank Info</h2>
          <pre>{JSON.stringify(leagueData.ranked, null, 2)}</pre>
          {rankedSolo?.tier && (
            <>
              <RankedEmblem rankRaw={rankedSolo.tier} />
              <MiniRankedEmblem rankRaw={rankedSolo.tier} />
            </>
          )}
        </>
      )}

      {/* MASTERY */}
      {leagueData.mastery && (
        <>
          <h2>Mastery Info</h2>
          <pre>{JSON.stringify(leagueData.mastery, null, 2)}</pre>
          {firstMastery?.championPoints !== undefined && (
            <MasteryCrest masteryLevelRaw={firstMastery.championLevel} height='200px' width='200px'/>
          )}
        </>
      )}

      {/* LEAGUE CARD */}
      <LeagueCard
        iconId={profileIconId}
        level={551}
        summonerName={"ohareshairs"}
        tag={"Swain"}
        rankRaw={"emerald"}
        rankName={"Emerald 2"}
        lp={91}
      />

    </div>
  );
}
