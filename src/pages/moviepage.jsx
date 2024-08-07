import React, { useEffect, useState } from "react";
import Layout from "../components/templates/Layout";
import ListMovie from "../components/organisms/ListMovie";
import Genres from "../components/molecules/Genres";
import { getAllMovies } from "../services/movie.service";

const MoviePage = () => {
  const [value, setValue] = useState("");
  const [fetchApi, setFetchApi] = useState([]);
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [genres, setGenres] = useState([]);
  const [selectedGenre, setSelectedGenre] = useState('')

  useEffect(() => {
    getAllMovies((data) => {
      setFetchApi(data);
      setFilteredMovies(data); // Initialize filtered movies with all movies
      extractGenres(data);
    });
  }, []);

  const extractGenres = (movies) => {
    const genreSet = new Set();
    movies.forEach((movie) => {
      movie.genre.forEach((genre) => {
        genreSet.add(genre);
      });
    });
    setGenres(Array.from(genreSet));
    console.log(genres)
  };

  const handleInputChange = (e) => {
    setValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const filtered = fetchApi.filter((movie) =>
      movie.title.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredMovies(filtered);
    setSelectedGenre('')
  };

  const handleClick = (e) => {
    const genre = e.target.name;
    console.log(genre);
    setSelectedGenre(genre)
    const filtered = fetchApi.filter((movie) =>
      movie.genre.map(g => g.toLowerCase()).includes(genre.toLowerCase())
    );
    setFilteredMovies(filtered);
  }

  return (
    <Layout  onChange={handleInputChange} onSubmit={handleSubmit}>
      <section className="pt-[120px] px-8 flex flex-col gap-8">
        <Genres genres={genres} onClick={handleClick} selectedGenre={selectedGenre}/>
        <ListMovie contents={filteredMovies} />
      </section>
    </Layout>
  );
};

export default MoviePage;
