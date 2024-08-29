import React, { useState, useEffect } from 'react';
import { Player } from './Player';

interface Team {
  players: PlayerAPI[];
}

interface PlayerFilter {
  position?: number;
  team?: string;
  cost?: number;
  form?: string;
}

const TeamBuilder: React.FC = () => {
  const [players, setPlayers] = useState<PlayerAPI[]>([]);
  const [team, setTeam] = useState<Team>({ players: [] });
  const [filter, setFilter] = useState<PlayerFilter>({});

  useEffect(() => {
    // Load FPL data from API or local storage
    const fetchData = async () => {
      const response = await fetch('https://fantasy.premierleague.com/api/elements/');
      const data = await response.json();
      setPlayers(data);
    };
    fetchData();
  }, []);

  const handlePlayerSelect = (player: PlayerAPI) => {
    setTeam({ players: [...team.players, player] });
  };

  const handleFilterChange = (filter: PlayerFilter) => {
    setFilter(filter);
  };

  const filteredPlayers = players.filter((player) => {
    if (filter.position && player.element_type !== filter.position) return false;
    if (filter.team && player.team !== filter.team) return false;
    if (filter.cost && player.now_cost !== filter.cost) return false;
    if (filter.form && player.form !== filter.form) return false;
    return true;
  });

  return (
    <div>
      <h1>Team Builder</h1>
      <h2>Filters</h2>
      <form>
        <label>
          Position:
          <select value={filter.position} onChange={(e) => handleFilterChange({ position: parseInt(e.target.value) })}>
            <option value="">All</option>
            <option value="1">Goalkeeper</option>
            <option value="2">Defender</option>
            <option value="3">Midfielder</option>
            <option value="4">Forward</option>
          </select>
        </label>
        <label>
          Team:
          <select value={filter.team} onChange={(e) => handleFilterChange({ team: e.target.value })}>
            <option value="">All</option>
            {players.map((player) => (
              <option value={player.team_code} key={player.team_code}>
                {player.team}
              </option>
            ))}
          </select>
        </label>
        <label>
          Cost:
          <input type="number" value={filter.cost} onChange={(e) => handleFilterChange({ cost: parseInt(e.target.value) })} />
        </label>
        <label>
          Form:
          <select value={filter.form} onChange={(e) => handleFilterChange({ form: e.target.value })}>
            <option value="">All</option>
            <option value="0.0">Poor</option>
            <option value="0.5">Average</option>
            <option value="1.0">Good</option>
          </select>
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