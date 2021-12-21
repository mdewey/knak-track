import React, { useState, useCallback } from 'react';

const Index = () => {
  const [currentRound, setCurrentRound] = useState(0);
  const [usedAttackOfOpportunity, setUsedAttackOfOpportunity] = useState(false)

  const endTurn = useCallback(() => {
    setCurrentRound(s => s + 1);
    setUsedAttackOfOpportunity(false);
  }, [])
  return (
    <div>
      <h2>Round Tracker</h2>
      <div className='round-tracker'>
        <button onClick={endTurn}>
          end turn
        </button>
        <button onClick={() => setCurrentRound(s => s - 1)}>-</button>
        <h3>{currentRound}</h3>
        <button onClick={() => setCurrentRound(s => s + 1)}>+</button>
      </div>
      <ul>
        <li>
          <label>
            <input
              type="checkbox"
              name="usedAttackOfOpportunity"
              checked={usedAttackOfOpportunity}
              onClick={() => setUsedAttackOfOpportunity(s => !s)} />
            uses swift action
          </label>
        </li>
      </ul>
    </div>
  );
}

export default Index;
