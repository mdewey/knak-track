import React, { useState, useCallback } from 'react';

const Index = () => {
  const TRAIT_BONUS = 2
  const LEVEL = 1 + TRAIT_BONUS;
  const CHA = 3;
  const MAX_SPELLS = {
    FIRST: 5
  }
  const [firstLevelSpells, setFirstLevelSpells] = useState(MAX_SPELLS.FIRST);
  const rest = useCallback(() => {
    setFirstLevelSpells(MAX_SPELLS.FIRST)
  }, [MAX_SPELLS.FIRST])


  const consumeSpell = useCallback(() => {
    if (firstLevelSpells - 1 <= 0) {
      setFirstLevelSpells(0)
    } else {
      setFirstLevelSpells(v => v - 1)
    }
  }, [firstLevelSpells])
  return (
    <div>
      <h2>SPELLS</h2>
      <div className='round-tracker'>
        <button onClick={rest}>
          Rest
        </button>
        <h3>{firstLevelSpells}</h3>
        <button onClick={() => consumeSpell()}>hocus pocus!</button>

      </div>


      <h3>Spell options</h3>
      <ul>
        <li>
          <div>
            <a
              href="https://www.d20pfsrd.com/magic/all-spells/c/cure-light-wounds/"
              target={'_blank'}
              rel="noreferrer"
            >
              Cure Light Wounds = 1d8+{LEVEL}
            </a>
          </div>
        </li>
        <li>
          <a
            href="https://www.d20pfsrd.com/magic/all-spells/s/stone-shield/"
            target={'_blank'}
            rel="noreferrer"
          >
            Rock wall appears, giving you a +4 AC (full cover)
          </a>
        </li>
        <li>
          <a href="https://www.d20pfsrd.com/magic/all-spells/b/burning-disarm/"
            target={'_blank'} rel="noreferrer">
            Burning disarm = 3d4 fire damage, reflex save to drop it and take no damage DC {10 + CHA + 1}
          </a>
        </li>

      </ul></div>
  );
}

export default Index;
