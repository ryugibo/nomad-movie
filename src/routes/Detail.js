import { useEffect, useState, useCallback } from "react";
import { useParams } from "react-router-dom";
import Movie from "../components/Movie";

function Detail() {
  const { id } = useParams();
  const [movie, setMovie] = useState({});
  const getMovie = useCallback(async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    setMovie(json.data.movie);
  }, [id]);
  console.log(movie);
  useEffect(() => {
    getMovie();
  }, [getMovie]);
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
