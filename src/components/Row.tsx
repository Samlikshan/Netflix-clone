const Row = ({ title, movies }) => {
  return (
    <div className="px-6 lg:px-16 mt-6">
      <h2 className="text-xl font-semibold mb-2 text-white">{title}</h2>
      <div className="flex overflow-x-scroll scrollbar-hide space-x-4">
        {movies.map((movie, index) => (
          <img
            key={index} // Use movie.id to uniquely identify each movie
            src={`https://image.tmdb.org/t/p/w500${movie?.poster_path}`} // Access imageUrl if movies is an object array
            alt={index} // Set a descriptive alt text based on the movie title
            className="w-48 h-72 rounded cursor-pointer hover:scale-110 transition duration-200"
          />
        ))}
      </div>
    </div>
  );
};

export default Row;




























































