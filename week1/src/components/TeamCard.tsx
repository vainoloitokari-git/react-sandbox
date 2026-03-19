import React, { useState } from "react";

export interface CardProps {
  name: string;
  role: string;
}

export const TeamCard = ({ name, role }: CardProps) => {
  const [votes, setVotes] = useState(0);

  return (
    <div className="bg-gradient-to-br from-purple-500 to-pink-500 text-white rounded-xl shadow-lg p-6 w-64">
      <h2 className="text-xl font-semibold">{name}</h2>
      <p className="text-gray-600">{role}</p>

      <div className="mt-4">
        <p className="font-medium">Votes: {votes}</p>
        <button
          onClick={() => setVotes(votes + 1)}
          className="mt-2 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Vote
        </button>
      </div>
    </div>
  );
};
