import { useContext } from "react";
import { MoviesContext } from "../context/MoviesContext";

const Hero = () => {
  const { hero } = useContext(MoviesContext)
  return (
    <section
      className="relative h-screen bg-cover bg-center flex flex-col justify-center px-6 lg:px-16 text-white"
      style={{
        backgroundImage: `url("https://image.tmdb.org/t/p/original${hero?.backdrop_path}")`,
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-transparent"></div>

      <div className="relative z-10 max-w-lg space-y-4">
        <h1 className="text-6xl font-bold">{hero?.original_title}</h1>
        <p className="text-gray-300 text-lg">
          {hero?.overview}
        </p>
        <div className="flex space-x-4">
          <button className="bg-white text-black px-8 py-2 rounded hover:bg-gray-200">
            ▶ Play
          </button>
          <button className="bg-gray-600 text-white px-8 py-2 rounded hover:bg-gray-700">
            More Info
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
