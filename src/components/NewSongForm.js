import React, { useState } from 'react';

const NewSongForm = ({ addSong }) => {
  const [title, SetTitle] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    addSong(title);
    SetTitle('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Song name:</label>
      <input
        type='text'
        required
        value={title}
        onChange={(e) => SetTitle(e.target.value)}
      />
      <input type='submit' value='Add song' />
    </form>
  );
};

export default NewSongForm;
