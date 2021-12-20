import React, { useState, useCallback } from 'react';

const Index = () => {
  const LEVEL = 4;
  const CHA = 3;
  const MAX_LAY_ON_HANDS = (LEVEL / 2) + CHA
  const [layOnHands, setLayOnHands] = useState(MAX_LAY_ON_HANDS);
  const rest = useCallback(() => {
    setLayOnHands(MAX_LAY_ON_HANDS)
  }, [MAX_LAY_ON_HANDS])


  const consumeResource = useCallback(() => {
    if (layOnHands - 1 <= 0) {
      setLayOnHands(0)
    } else {
      setLayOnHands(v => v - 1)
    }
  }, [layOnHands])



  return (
    <div>
      <h2>Lay on Hands</h2>
      <button onClick={rest}>
        Rest
      </button>
      <div className='round-tracker'>
        <button onClick={consumeResource}>Lay On Hands</button>
        <h3>{layOnHands}</h3>

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
