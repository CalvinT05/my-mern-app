import SummonerIcon from './SummonerIcon';
import RankedEmblem from './RankedEmblem';

export default function LeagueCard({
  iconId,
  level,
  summonerName,
  tag,
  rankRaw,
  rankName,
  lp
}) {
  return (
    <div className="flex items-center bg-gray-900 p-4 rounded-2xl shadow-lg max-w-md">
      {/* Summoner Icon + Level badge */}
      <div className="relative">
        <SummonerIcon iconId={iconId} height="64px" width="64px" />
        <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 bg-blue-600 text-white text-xs font-bold px-2 py-0.5 rounded-full">
          {level}
        </span>
      </div>

      {/* Name and Tag */}
      <div className="ml-4">
        <h2 className="text-white font-semibold text-lg">
          {summonerName} <span className="text-gray-400">#{tag}</span>
        </h2>
      </div>

      {/* Spacer */}
      <div className="flex-1"></div>

      {/* Rank emblem and LP */}
      <div className="flex items-center">
        <RankedEmblem rankRaw={rankRaw} height="48px" width="48px" />
        <div className="ml-2 text-right">
          <p className="text-white font-medium text-sm">{rankName}</p>
          <p className="text-gray-400 text-xs">{lp} LP</p>
        </div>
      </div>
    </div>
  );
}