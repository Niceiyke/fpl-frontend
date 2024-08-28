"use client"

import React, { useEffect, useState } from 'react';
import FootballPitch from '../../components/FootballPitch';
import {getLineUp} from '../../components/api/api';
import Bench from '@/app/components/Bench';
import TeamInfo from '@/app/components/ui/TeamInfo';

const BestLineUp = () => {
  const [firstEleven, setFirstEleven] = useState<Player[]>([]);
  const [bench, setBench] = useState<Player[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getLineUp().then((data) => {
      console.log(data.lineup)
      setFirstEleven(data.lineup);
      setBench(data.bench);
      setLoading(false);
    });
  }, []);
  const teamInfo = {
    budget: 4.5,
    availableTransfers: 2,
    totalExpectedPoints: 65.3,
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center gap-2">
      <div className=" bg-gray-100 flex items-center justify-center">
      <TeamInfo
        budget={teamInfo.budget}
        availableTransfers={teamInfo.availableTransfers}
        totalExpectedPoints={teamInfo.totalExpectedPoints}
      />
    </div>
      <FootballPitch players={firstEleven} />
      <Bench players={bench} />
    </div>
  );
};

export default BestLineUp;
