// components/TeamInfo.tsx

import { FC } from 'react';

interface TeamInfoProps {
  budget: number;
  availableTransfers: number;
  totalExpectedPoints: number;
}

const TeamInfo: FC<TeamInfoProps> = ({ budget, availableTransfers, totalExpectedPoints }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-4 w-full">
      <div className="flex space-y-2 gap-2  items-center  ">
        <div className="flex justify-between items-center">
          <span className="text-gray-500">Budget:</span>
          <span className="font-semibold text-blue-600">£{budget.toFixed(1)}m</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-gray-500">Available Transfers:</span>
          <span className="font-semibold text-white-600">{availableTransfers}</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-gray-500">Total Expected Points:</span>
          <span className="font-semibold text-purple-600">{totalExpectedPoints.toFixed(1)}</span>
        </div>
      </div>
    </div>
  );
};

export default TeamInfo;
