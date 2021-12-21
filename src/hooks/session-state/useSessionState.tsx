import { useState, useCallback } from 'react'


export const useSessionState = (key: string, defaultValue: any) => {
  const [thing, setThing] = useState();


  const set = useCallback((value) => {
    // update session storage
    window.localStorage.setItem(key, value);
    // update state value
    setThing(value)

  }, [key])

  const get = useCallback(() => {
    const stored = window.localStorage.getItem(key);
    if (thing) {
      return thing
    } else if (stored) {
      return stored
    } else {
      return defaultValue;
    }
  }, [defaultValue, key, thing])


  return { set, get }
};