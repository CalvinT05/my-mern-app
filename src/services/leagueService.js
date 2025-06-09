/*
 * League Service 
 * Connects to the backend API to fetch League of Legends account,
 * summoner, and rank data.
 * 
 * Endpoint information found in backend/routes/league.js and
 * backend/controllers/league-controller.js
 * 
 * Proxy (in package.json) is set to the backend server:
 * http://localhost:5000
 * 
 */

// Imports
import axios from 'axios';

/* 
 * getLeagueData function
 * arguments: gameName, tagLine
 * returns: League account, summoner, and rank data
 * 
 */
export async function getLeagueAccountData(gameName, tagLine) {
  try {
    // Fetch Riot account info
    const accountData = await axios.get(`/api/league/account/${gameName}/${tagLine}`); // getAccountByRiotID
    const puuid = accountData.data.puuid; // Extract PUUID from account data

    // Fetch other data with PUUID
    const [
      summonerData,
      rankedData,
      masteryData
    ] = await Promise.all([ // Promise.all to fetch in parallel (faster than sequential)
      
      axios.get(`/api/league/summoner/${puuid}`), // getSummonerByPUUID
      axios.get(`/api/league/rank/${puuid}`), // getRankByPUUID
      axios.get(`/api/league/mastery/${puuid}`) // getMasteryByPUUID
    ]);

    // Return all data
    return {
      account: accountData.data,
      summoner: summonerData.data,
      ranked: rankedData.data,
      mastery: masteryData.data
    };
  } catch (error) {
    // Handle errors and rethrow them
    throw new Error(error.message);
  }
}