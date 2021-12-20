import React, { useState } from 'react';

const Index = () => {
  const [currentRound, setCurrentRound] = useState(0);
  const [usedAttackOfOpportunity, setUsedAttackOfOpportunity] = useState(false)
  return (
    <div>
      <h2>Round Tracker</h2>
      <div className='round-tracker'>
        <button onClick={() => setCurrentRound(s => s--)}>-</button>
        <h3>{currentRound}</h3>
        <button onClick={() => setCurrentRound(s => s++)}>+</button>
      </div>
      <ul>
        <li>
          <input
            type="checkbox"
            name="usedAttackOfOpportunity"
            value={usedAttackOfOpportunity ? 'checked' : ''}
            onClick={() => setUsedAttackOfOpportunity(s => !s)} />
          <label htmlFor="usedAttackOfOpportunity">
            Used Attack of Opportunity
          </label>
        </li>
      </ul>
    </div>
  );
}

export default Index;
