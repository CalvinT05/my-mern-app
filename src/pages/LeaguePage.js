import React, { useState } from 'react';

import { getLeagueAccountData } from '../services/leagueService';
import {
  MasteryCrest,
  RankedEmblem,
  MiniRankedEmblem,
  SummonerIcon,
  LeagueCard
} from '../components/LeagueOfLegends';

const LeaguePage = () => {
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

  const profileIconId = leagueData?.summoner?.profileIconId;
  const rankedSolo = leagueData?.ranked?.find(r => r.queueType === 'RANKED_SOLO_5x5');
  const firstMastery = leagueData?.mastery?.[0];

  return (
    <div className="min-h-screen bg-gray-900 text-white p-6">
      <h1 className="text-2xl font-bold mb-4">Riot Account Search</h1>

      <div className="flex flex-col sm:flex-row gap-4 mb-6">
        <input
          type="text"
          placeholder="Game Name"
          value={gameName}
          onChange={(e) => setGameName(e.target.value)}
          className="p-2 rounded bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="text"
          placeholder="Tag Line"
          value={tagLine}
          onChange={(e) => setTagLine(e.target.value)}
          className="p-2 rounded bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          onClick={leagueSearch}
          className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded text-white"
        >
          Search
        </button>
      </div>

      {loading && <div className="text-yellow-400 mb-4">Loading...</div>}
      {error && <div className="text-red-500 mb-4">Error: {error}</div>}

      {leagueData.account && (
        <div className="mb-6">
          <h2 className="text-xl font-semibold mb-2">Account Info</h2>
          <pre className="bg-gray-800 p-4 rounded overflow-x-auto">{JSON.stringify(leagueData.account, null, 2)}</pre>
        </div>
      )}

      {leagueData.summoner && (
        <div className="mb-6">
          <h2 className="text-xl font-semibold mb-2">Summoner Info</h2>
          <pre className="bg-gray-800 p-4 rounded overflow-x-auto">{JSON.stringify(leagueData.summoner, null, 2)}</pre>
          {profileIconId !== undefined && <SummonerIcon iconId={profileIconId} />}
        </div>
      )}

      {leagueData.ranked && (
        <div className="mb-6">
          <h2 className="text-xl font-semibold mb-2">Rank Info</h2>
          <pre className="bg-gray-800 p-4 rounded overflow-x-auto">{JSON.stringify(leagueData.ranked, null, 2)}</pre>
          {rankedSolo?.tier && (
            <div className="flex items-center gap-4 mt-2">
              <RankedEmblem rankRaw={rankedSolo.tier} />
              <MiniRankedEmblem rankRaw={rankedSolo.tier} />
            </div>
          )}
        </div>
      )}

      {leagueData.mastery && (
        <div className="mb-6">
          <h2 className="text-xl font-semibold mb-2">Mastery Info</h2>
          <pre className="bg-gray-800 p-4 rounded overflow-x-auto">{JSON.stringify(leagueData.mastery, null, 2)}</pre>
          {firstMastery?.championPoints !== undefined && (
            <div className="mt-2">
              <MasteryCrest masteryLevelRaw={firstMastery.championLevel} height='200px' width='200px'/>
            </div>
          )}
        </div>
      )}

      <div className="mt-10">
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
    </div>
  );
};

export default LeaguePage;