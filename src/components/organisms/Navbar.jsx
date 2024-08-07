import React from "react";
import Image from "../atom/Image";
import Search from "../molecules/Search";

function Navbar(props) {
  const {onSubmit, onChange} = props;
  return (
    <nav className="fixed top-0 right-0  w-full bg-white border-b border-gray-100 drop-shadow-lg z-10">
      <div className="flex items-center justify-between px-2 py-2 max-w-[1280px] m-auto">
        <Image
          src="/public/navbar/movie-logo.png"
          alt="logo"
          width="125"
          height=""
          className=""
        />
        <Search onSubmit={onSubmit} onChange={onChange}/>
      </div>
    </nav>
  );
}

export default Navbar;
