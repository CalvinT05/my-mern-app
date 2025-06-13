/*  
 * Barrel File for League of Legends components
 * Imports and exports all League-related components
 * 
 * Import methods:
 * 
 * - Specify the components you need
 * import {
 *      LeagueAccount,
 *      MasteryCrest,
 *      RankedEmblem...
 * } from './components/LeagueOfLegends';
 * 
 * - Import all components as a single object
 * import * as LoL from './components/LeagueOfLegends';
 * (Access as LoL.LeagueAccount, LoL.MasteryCrest, etc.)
 * 
 */

export {default as MasteryCrest} from './MasteryCrest';
export {default as RankedEmblem} from './RankedEmblem';
export {default as MiniRankedEmblem} from './MiniRankedEmblem';
export {default as SummonerIcon} from './SummonerIcon';
export {default as LeagueCard} from './LeagueCard';