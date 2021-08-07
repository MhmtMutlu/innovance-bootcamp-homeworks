import React from 'react';
import useLocalStorage from '../hooks/useLocalStorage';

export const CharacterContext = React.createContext();

function CharacterContextProvider({ children }) {
  const [characterLocalStr, setCharacterLocalStr] = useLocalStorage("character", "male1")

  const changeCharacter = (e) => {
    setCharacterLocalStr(e.target.value);
  };

  return (
    <CharacterContext.Provider value={{ characterLocalStr, changeCharacter }}>
      {children}
    </CharacterContext.Provider>
  )
}

export default CharacterContextProvider;
