"use client"

import React, { useEffect, useState } from 'react';
import FootballPitch from '../components/FootballPitch';
import {getManagerTeam} from '../components/api/api';

const MyTeam = () => {
  const [players, setPlayers] = useState<Player[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getManagerTeam().then((data) => {
      console.log(data.team)
      setPlayers(data.team);
      setLoading(false);
    });
  }, []);

  return (
    <div className="min-h-screen flex justify-center items-center">
      <FootballPitch players={players} />
    </div>
  );
};

export default MyTeam;
