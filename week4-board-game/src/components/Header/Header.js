import React from 'react';
import { CharacterContext } from '../../contexts/CharacterContext';
import './Header.style.scss';

function Header() {
  const { changeCharacter } = React.useContext(CharacterContext);
  const characterList = ["male1", "male2", "female1", "female2", "magician1", "magician2"];
  const showCharacterName = (name) => {
    return name[0].toUpperCase() + name.slice(1, name.length - 1) + " " + name[name.length - 1];
  };

  return (
    <div className="header">
      <h2 className="title">React Boardgame</h2>
      <label className="select-label" htmlFor="character">Choose a character</label>
      <select className="select-input" id="character" name="character" onChange={changeCharacter}>
        {
          characterList.map((character, index) => (
            <option key={index} value={character}>{showCharacterName(character)}</option>
          ))
        }
      </select>
    </div>
  )
} 

export default Header;
