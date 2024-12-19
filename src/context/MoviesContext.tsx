import { ReactNode, createContext, useEffect, useState } from "react";
import axios from "axios";

interface props {
  children?: ReactNode
}

const API_KEY = import.meta.env.VITE_API_KEY

const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: `Bearer ${API_KEY}`
  }
};

const MoviesContext = createContext([])

function MoviesProvider({ children }: props) {

  const [hero, setHero] = useState({})
  const [trending, setTrending] = useState([])
  const [newReleases, setNewRealeses] = useState([])
  const [masterPieces, setMasterPieces] = useState([])

  useEffect(() => {
    getMovies()
  }, [])

  const getMovies = async () => {
    const hero = await axios.get('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1', options)
    const trending = await axios.get('https://api.themoviedb.org/3/trending/movie/day', options)
    const newReleases = await axios.get('https://api.themoviedb.org/3/movie/upcoming', options)
    const masterPieces = await axios.get('https://api.themoviedb.org/3/movie/top_rated', options)
    const index = Math.floor(Math.random() * hero.data.results.length)
    setHero(hero.data.results[index])
    setTrending(trending.data.results)
    setNewRealeses(newReleases.data.results)
    setMasterPieces(masterPieces.data.results)
  }

  return (
    <MoviesContext.Provider value={{ hero, trending, newReleases, masterPieces }}>
      {children}
    </MoviesContext.Provider>
  )
}


export { MoviesContext, MoviesProvider }


