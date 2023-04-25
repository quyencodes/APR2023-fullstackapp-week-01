import {useState} from 'react';

export default function AddAnime({addAnime}) {
  const [anime, setAnime] = useState('')

  return (
    <form onSubmit={(event) => {
      event.preventDefault()
      addAnime(anime)
      setAnime('')
    }}>
      <label>Add anime:
        <input
          type="text"
          placeholder="Add anime title here"
          value={anime}
          onChange={(event) => setAnime(event.target.value)}
        />
      </label>
      <button type="submit">Add</button>
    </form>
  )
}