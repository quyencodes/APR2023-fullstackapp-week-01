import {useState, useEffect} from 'react'
import '../styles/input.css'

export default function App() {
  const data = [
    {title: 'Mean Girls'},
    {title: 'Hackers'},
    {title: 'The Grey'},
    {title: 'Sunshine'},
    {title: 'Ex Machina'},
  ];

  const [movies, setMovies] = useState(data)

  return (
    <main className="container">
      <div>My react app</div>
    </main>
  )
}