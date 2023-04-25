import {useState, useEffect} from 'react'
import axios from 'axios';
import '../styles/input.css'

// other files
import SearchBar from './Components/SearchBar.jsx';
import AnimeList from './Components/AnimeList.jsx'
import AddAnime from './Components/AddAnime.jsx'


const data = [
  {title: 'Kaguya-sama: Love Is War'},
  {title: 'Oshi No Ko'},
  {title: 'Summer Time Rendering'},
  {title: 'Shadows House'},
  {title: '86 Eighty-Six'},
];

export default function App() {
  const [animes, setAnimes] = useState([])

  const getData = async () => {
    const response = await axios.get('http://localhost:8000/anime')
    setAnimes(response.data)
  };

  useEffect(() => {
    getData()
  }, [])

  const handleSearch = (animeSearched) => {
    const searchResult = animes.filter((anime, index) => anime.title.toLowerCase().startsWith(animeSearched.toLowerCase()))
    setAnimes(searchResult)
  }

  const handleReset = () => {
    setAnimes([...data])
  }

  const addAnime = (animeTitle) => {
    const postData = async (newAnime) => {
      const body = {title: newAnime}
      const response = await axios.post('http://localhost:8000/anime', body)
      const copyAnimes = [...animes]
      copyAnimes.push(response.data)
      setAnimes(copyAnimes)
    }
    postData(animeTitle)
  }

  return (
    <main className="container">
      <h1>AnimeList</h1>
        {animes !== undefined ? <div className="sub-container">
          <AddAnime addAnime={addAnime}/>
          <SearchBar handleSearch={handleSearch} handleReset={handleReset}/>
          <AnimeList animes={animes}/>
        </div> : <div>Loading...</div>
        }
    </main>
  )
}