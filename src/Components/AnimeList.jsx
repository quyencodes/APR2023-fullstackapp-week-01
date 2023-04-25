import react from 'react'

export default function AnimeList({animes}) {
  return (
    <>
      {animes.length > 0 ?
        <div className="animes-container">
          {animes?.map((anime, index) => (
          <div className="animes-object" key={index} index={index}>     {anime.title}
          </div>
        ))}
        </div> :
        <div> No animes here... please click reset to see full list </div>
      }
    </>
  )
}