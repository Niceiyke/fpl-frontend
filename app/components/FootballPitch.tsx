import React, { useState, useEffect } from 'react';

import PlayerCard from './ui/PlayerCard';

type FootballPitchProps = {
  players: Player[];
};

const getPlayersByPosition = (players: Player[], position: number) => {
  return players.filter(p => p.position === position);
};

const FootballPitch: React.FC<FootballPitchProps> = ({ players }) => {
  const [loading, setLoading] = useState(true);
  const [goalkeepers, setGoalkeepers] = useState<Player[]>([]);
  const [defenders, setDefenders] = useState<Player[]>([]);
  const [midfielders, setMidfielders] = useState<Player[]>([]);
  const [forwards, setForwards] = useState<Player[]>([]);

  useEffect(() => {
    if (players) {
      const goalkeepers = getPlayersByPosition(players, 1);
      const defenders = getPlayersByPosition(players, 2);
      const midfielders = getPlayersByPosition(players, 3);
      const forwards = getPlayersByPosition(players, 4);

      setGoalkeepers(goalkeepers);
      setDefenders(defenders);
      setMidfielders(midfielders);
      setForwards(forwards);

      setLoading(false);
    }
  }, [players]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="bg-green-800 p-4 rounded-lg shadow-md  max-w-screen-md mx-auto  grid gap-2 overflow-y-auto scrollbar-thin scrollbar-thumb-green">
      {/* Goalkeeper */}
      <PlayerCardList players={goalkeepers} title="" />
      {/* Defenders */}
      <PlayerCardList players={defenders} title="" />
      {/* Midfielders */}
      <PlayerCardList players={midfielders} title="" />
      {/* Forwards */}
      <PlayerCardList players={forwards} title="" />
    </div>
  );
};

const PlayerCardList: React.FC<PlayerCardListProps> = ({ players, title }) => {
  return (
    <div className="flex justify-center gap-4 space-x-1">
      {players.map(player => (
        <PlayerCard key={player.id} player={player} />
      ))}
      <h2 className="text-lg font-bold">{title}</h2>
    </div>
  );
};

interface PlayerCardListProps {
  players: Player[];
  title: string;
}

export default FootballPitch;