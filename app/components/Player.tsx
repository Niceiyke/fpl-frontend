import React from 'react';

interface PlayerProps {
  player: PlayerAPI;
  onSelect: () => void;
}

export const Player: React.FC<PlayerProps> = ({ player, onSelect }) => {
  return (
    <div 
      className="player-card bg-white shadow-md rounded-lg p-4 mb-4 hover:shadow-lg transition-shadow cursor-pointer"
      onClick={onSelect}
    >
      <h3 className="text-lg font-semibold text-gray-800">{player.web_name}</h3>
      <p className="text-gray-600">
        <strong>Position:</strong> {getPositionName(player.element_type)}
      </p>
      <p className="text-gray-600">
        <strong>Team:</strong> {player.team}
      </p>
      <p className="text-gray-600">
        <strong>Cost:</strong> £{(player.now_cost / 10).toFixed(1)}m
      </p>
      <p className="text-gray-600">
        <strong>Form:</strong> {player.form}
      </p>
    </div>
  );
};

// Helper function to convert position number to a readable string
const getPositionName = (positionId: number): string => {
  switch (positionId) {
    case 1:
      return 'Goalkeeper';
    case 2:
      return 'Defender';
    case 3:
      return 'Midfielder';
    case 4:
      return 'Forward';
    default:
      return 'Unknown';
  }
};
