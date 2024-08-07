import React from "react";
import CardMovie from "../molecules/CardMovie";

function ListMovie(props) {
  const { contents = [] } = props;
  return (
    <div className="flex flex-wrap gap-4 justify-center">
      {contents.map((content) => (
        <CardMovie key={content.id} content={content} />
      ))}
    </div>
  );
}

export default ListMovie;
