import React, { useCallback } from 'react';
import { useSessionState } from '../hooks/session-state/useSessionState';

const Index = () => {
  const LEVEL = 4;
  const CHA = 3;
  const MAX_SMITES = 2
  const { get: smites, set: setSmites } = useSessionState("SMITES", MAX_SMITES);

  const rest = useCallback(() => {
    setSmites(MAX_SMITES)
  }, [setSmites])


  const consumeSmite = useCallback(() => {
    const s = smites();
    if (s - 1 <= 0) {
      setSmites(0)
    } else {
      setSmites(s - 1)
    }
  }, [setSmites, smites])
  return (
    <div>
      <h2>Smite Tracker</h2>
      <div className='round-tracker'>
        <button onClick={rest}>
          Rest
        </button>
        <h3>{smites()}</h3>
        <button onClick={consumeSmite}>SMITE</button>

      </div>


      <h3>smite bonuses options:</h3>
      <ul>
        <li>
          <div> +{LEVEL} to damage</div>
        </li>
        <li>
          +{CHA} to hit
        </li>
        <li>
          if they are a dragon, undead, outsider, then double the first hit
        </li>

      </ul></div>
  );
}

export default Index;
