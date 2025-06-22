/*  
 * Barrel File for Web Pages
 * Imports and exports all Web Pages
 * 
 * Import methods:
 * 
 * - Specify the components you need
 * import {
 *      LeaguePage,
 *      OverwatchPage,
 *      OtherPage...
 * } from './pages';
 * 
 * - Import all components as a single object
 * import * as Pages from './pages';
 * (Access as Pages.LeaguePage, Pages.OverwatchPage, etc.)
 * 
 */

export { default as LeaguePage } from './LeaguePage';
export { default as OverwatchPage } from './OverwatchPage';
export { default as OtherPage } from './OtherPage';