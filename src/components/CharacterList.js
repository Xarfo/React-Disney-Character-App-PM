import React from 'react';

import Character from './Character';

function CharacterList(props) {
  // do more stuff here
  return (
    <div>
      {props.disneyDataList.map((character, index) => {
        return <Character character={character} key={index} />;
      })}
    </div>
  );
  // this won't get touched
}

export default CharacterList;
