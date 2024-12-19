import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Row from "../components/Row";
import Footer from "../components/Footer";
import { useContext } from "react";
import { MoviesContext } from "../context/MoviesContext";
import { AuthContext } from "../context/AuthContext";

const Home = () => {

  const { trending, newReleases, masterPieces } = useContext(MoviesContext)
  const { isLoggedIn } = useContext(AuthContext)
  return (
    <div className="bg-black text-white">
      <Navbar />
      <Hero />
      <Row title="Trending Now" movies={trending} />
      <Row title="Top Picks For You" movies={masterPieces} />
      <Row title="New Releases" movies={newReleases} />
      <Footer />
    </div>
  );
};

export default Home;


