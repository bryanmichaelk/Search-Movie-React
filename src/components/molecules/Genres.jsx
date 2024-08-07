import React from "react";
import Button from "../atom/Button";

function Genres(props) {
  const { genres = [], onClick, selectedGenre } = props;
  return (
    <div className="flex flex-wrap gap-2">
      {genres.map((genre, index) => (
        <Button onClick={onClick} key={index} name={genre} className={`text-sm md:text-md lg:text-lg text-black font-semilight border-2 ${selectedGenre === genre? "bg-gray-200 border-none": ""}`}>
          {genre}
        </Button>
      ))}
    </div>
  );
}

export default Genres;
