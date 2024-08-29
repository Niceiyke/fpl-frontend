'use client'
import React, { useState, useEffect } from 'react';
import { Player } from './components/Player';
import { getAllPlayer } from './components/api/api';

interface Team {
  players: PlayerAPI[];
}

interface PlayerFilter {
  position?: number;
  team?: string;
  cost?: number;
  form?: number;
}

const TeamBuilder: React.FC = () => {
  const [players, setPlayers] = useState<PlayerAPI[]>([]);
  const [team, setTeam] = useState<Team>({ players: [] });
  const [filter, setFilter] = useState<PlayerFilter>({});

  useEffect(() => {
    getAllPlayer().then((data) => {
    console.log(data.players);
    setPlayers(data.players);
});
}, []);

  const handlePlayerSelect = (player: PlayerAPI) => {
    // Prevent adding duplicate players
    if (!team.players.some((p) => p.id === player.id)) {
      setTeam({ players: [...team.players, player] });
    }
  };

  const handleFilterChange = (newFilter: Partial<PlayerFilter>) => {
    setFilter((prev) => ({ ...prev, ...newFilter }));
  };

  // Get unique teams from the player list
  const uniqueTeams = Array.from(new Set(players.map((player) => player.team)));

  const filteredPlayers = players.filter((player) => {
    if (filter.position && player.element_type !== filter.position) return false;
    if (filter.team && player.team !== filter.team) return false;
    if (filter.cost && player.now_cost > filter.cost) return false; // Allow players with cost <= filter
    if (filter.form && parseFloat(player.form) < filter.form) return false; // Allow players with form >= filter
    return true;
  });

  return (
    <div>
      <h1>Team Builder</h1>
      <h2>Filters</h2>
      <form>
        <label>
          Position:
          <select value={filter.position || ''} onChange={(e) => handleFilterChange({ position: parseInt(e.target.value) })}>
            <option value="">All</option>
            <option value="1">Goalkeeper</option>
            <option value="2">Defender</option>
            <option value="3">Midfielder</option>
            <option value="4">Forward</option>
          </select>
        </label>
        <label>
          Team:
          <select value={filter.team || ''} onChange={(e) => handleFilterChange({ team: e.target.value })}>
            <option value="">All</option>
            {uniqueTeams.map((team, index) => (
              <option value={team} key={index}>
                {team}
              </option>
            ))}
          </select>
        </label>
        <label>
          Cost:
          <input type="number" value={filter.cost || ''} onChange={(e) => handleFilterChange({ cost: parseInt(e.target.value) })} />
        </label>
        <label>
          Form:
          <input type="number" step="0.1" value={filter.form || ''} onChange={(e) => handleFilterChange({ form: parseFloat(e.target.value) })} />
        </label>
      </form>
      <h2>Players</h2>
      <ul>
        {filteredPlayers.map((player) => (
          <li key={player.id}>
            <Player player={player} onSelect={() => handlePlayerSelect(player)} />
          </li>
        ))}
      </ul>
      <h2>Team</h2>
      <ul>
        {team.players.map((player) => (
          <li key={player.id}>
            {player.web_name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TeamBuilder;
