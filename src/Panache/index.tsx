import React, { useState, useCallback } from 'react';

const Index = () => {
  const LEVEL = 4;
  const CHA = 3;
  const MAX_PANACHE = CHA + 2

  const [panache, setPanache] = useState(5);
  const rest = useCallback(() => {
    setPanache(MAX_PANACHE)
  }, [MAX_PANACHE])

  const addPanache = useCallback(() => {
    if (panache + 1 >= MAX_PANACHE) {
      setPanache(MAX_PANACHE)
    } else {
      setPanache(v => v + 1)
    }
  }, [panache, MAX_PANACHE])
  const subtractPanache = useCallback(() => {
    if (panache - 1 <= 0) {
      setPanache(0)
    } else {
      setPanache(v => v - 1)
    }
  }, [panache])
  return (
    <div>
      <h2>Panache Tracker</h2>
      <div className='round-tracker'>
        <button onClick={rest}>
          Rest
        </button>
        <button onClick={subtractPanache}>-</button>
        <h3>{panache}</h3>
        <button onClick={addPanache}>Get a Kill</button>
        <button onClick={addPanache}>Crit</button>
        <button onClick={addPanache}>Do something darring</button>
      </div>

      {panache > 0 ? <div>
        <h3>panache options:</h3>
        <ul>
          <li>
            <div> always on: +{LEVEL} to damage</div>
            <div> spend: additional +{LEVEL} damage</div>
          </li>
          <li>
            +2 to init
          </li>
          <li>
            <div>spend one to parry</div>
            <div>if still has then riposte</div>
          </li>
          <li>
            can dodge (+2 to AC) plus 5ft step
          </li>
          <li>
            can intimidate as a swift action
          </li>
        </ul></div> :
        <div>
          <h3>out of panache!</h3>
          <ul>
            <li>
              no +{LEVEL} to damage
            </li>
            <li>
              -2 to init
            </li>
            <li>
              Can't parry
            </li>
            <li>
              can't dodge
            </li>
            <li>
              can intimidate as a pleeb
            </li>
          </ul>
        </div>}
    </div>
  );
}

export default Index;
