// components/FootballPitch.tsx

import React from 'react';
import PlayerCard from './ui/PlayerCard';

type BenchProps = {
  players: Player[];
};

const Bench: React.FC<BenchProps> = ({ players }) => {
  const goalkeepers = players.filter(p => p.position === 1);
  const defenders = players.filter(p => p.position === 2);
  const midfielders = players.filter(p => p.position === 3);
  const forwards = players.filter(p => p.position === 4);

  return (
    <div className="bg-green-800 p-4 rounded-lg shadow-md  max-w-screen-md mx-auto  grid gap-2 overflow-y-auto scrollbar-thin scrollbar-thumb-green">
      {/* Goalkeeper */}
      <div className="flex justify-center gap-4 space-x-1">
        {goalkeepers.map(player => (
          <PlayerCard key={player.id} player={player} />
        ))}
        {forwards.map(player => (
          <PlayerCard key={player.id} player={player} />
        ))}
        {midfielders.map(player => (
          <PlayerCard key={player.id} player={player} />
        ))}
        {defenders.map(player => (
          <PlayerCard key={player.id} player={player} />
        ))}



      </div>

    </div>
  );
};

export default Bench;
