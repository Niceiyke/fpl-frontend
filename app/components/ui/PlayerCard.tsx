
import React from 'react';
const PlayerCard: React.FC<{ player: Player }> = ({ player }) => (
  <div className="w-[120px] h-auto bg-white rounded-lg shadow-md flex flex-col items-center p-2 text-center text-xs">
    <h3 className="font-semibold truncate">{player.name}</h3>
    <p className="text-gray-600">£{player.price}m</p>

    {/* Expected Points */}
    <div className="mt-1">
      <p className="font-semibold text-green-500">Pts</p>
      <p>{player.expectedPoints}</p>
    </div>

    {/* FDR for Next 3 Games */}
    <div className="mt-1">
      <div className="flex justify-center space-x-1">
        {player.fdr.map((difficulty, index) => (
          <span
            key={index}
            className={`w-4 h-4 rounded-full flex items-center justify-center text-xs ${
              difficulty <= 2
                ? 'bg-green-400'
                : difficulty <= 3
                ? 'bg-yellow-400'
                : 'bg-red-400'
            }`}
          >
            {difficulty}
          </span>
        ))}
      </div>
    </div>
  </div>
);

export default PlayerCard;
