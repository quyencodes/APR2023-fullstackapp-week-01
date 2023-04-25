import { useState } from 'react';

export default function SearchBar({handleSearch, handleReset}) {
  const [form, setForm] = useState('')

  return (
    <div className="search-container">
    <form onSubmit={(event) => {
      event.preventDefault()
      handleSearch(form);
    }}>
      <label>
        Search a specific anime: &nbsp;
        <input
          type="text"
          name="input"
          placeholder="Search..."
          value={form}
          onChange={(event) => setForm(event.target.value)}></input>
      </label>
      <button type="submit">Submit</button>
    </form>
    <div className="search-divider"/>
    <button
      className="button-reset"
      type="submit"
      onClick={handleReset}>
        Reset
      </button>
    </div>
  )
}