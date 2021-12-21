import React, { useState, useCallback } from 'react';
import { useSessionState } from '../hooks/session-state/useSessionState';

const Index = () => {
  const LEVEL = 4;
  const CHA = 3;
  const MAX_LAY_ON_HANDS = (LEVEL / 2) + CHA
  const { get: getRemaining, set: setRemaining } = useSessionState("LAY_ON_HANDS", MAX_LAY_ON_HANDS);
  // const [layOnHands, setLayOnHands] = useState(MAX_LAY_ON_HANDS);
  const rest = useCallback(() => {
    setRemaining(MAX_LAY_ON_HANDS)
  }, [MAX_LAY_ON_HANDS, setRemaining])


  const consumeResource = useCallback(() => {
    const value = getRemaining();
    if (value - 1 <= 0) {
      setRemaining(0)
    } else {
      setRemaining(value - 1)
    }
  }, [getRemaining, setRemaining])



  return (
    <div>
      <h2>Lay on Hands</h2>
      <div className='round-tracker'>
        <button onClick={rest}>
          Rest
        </button>
        <h3>{getRemaining()}</h3>
        <button onClick={consumeResource}>Lay On Hands</button>

      </div>


      <h3>lay on hand options:</h3>
      <ul>
        <li>
          <div> 1 instance = 2d6 heal</div>
        </li>
        <li>
          for 2 you can channel 30 ft and heal 2d6
        </li>

      </ul></div>
  );
}

export default Index;
