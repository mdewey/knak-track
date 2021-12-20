import React, { useState, useCallback } from 'react';

const Index = () => {
  const [panache, setPanache] = useState(5);
  const rest = useCallback(() => {
    setPanache(5)
  }, [])

  const addPanache = useCallback(() => {
    if (panache + 1 >= 5) {
      setPanache(5)
    } else {
      setPanache(v => v + 1)
    }
  }, [panache])
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
      <button onClick={rest}>
        Rest
      </button>
      <div className='round-tracker'>
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
            <div> always on: +4 to damage</div>
            <div> spend: additional +4 damage</div>
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
              no +4 to damage
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