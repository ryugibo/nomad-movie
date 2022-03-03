import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Movie from "../components/Movie";

function Detail() {
  const { id } = useParams();
  const [movie, setMovie] = useState({});
  const getMovie = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    setMovie(json.data.movie);
  };
  console.log(movie);
  useEffect(() => {
    getMovie();
  }, []);
  return Object.keys(movie).length === 0 ? (
    <h1>Loading...</h1>
  ) : (
    <Movie
      id={movie.id}
      coverImg={movie.medium_cover_image}
      title={movie.title}
      summary={movie.description_full}
      genres={movie.genres}
    />
  );
}

export default Detail;
