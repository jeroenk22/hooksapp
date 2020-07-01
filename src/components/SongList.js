import React, { useState } from 'react';
import { v1 as uuidv1 } from 'uuid';

const SongList = () => {
  const [songs, setSongs] = useState([
    { id: 1, title: 'almost home' },
    { id: 2, title: 'memory gospel' },
    { id: 3, title: 'this wild darkness' },
  ]);

  const addSong = () => {
    setSongs([...songs, { id: uuidv1(), title: 'new song' }]);
  };

  return (
    <div className='song-list'>
      <ul>
        {songs.map((song) => {
          return <li key={song.id}>{song.title}</li>;
        })}
      </ul>
      <button onClick={addSong}>Add a song</button>
    </div>
  );
};

export default SongList;
