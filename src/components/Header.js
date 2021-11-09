import React from "react";
import { FaSearch, FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";
import "../styles/header.css";
import Image from '../images/RAWG logo.svg';
import { useSearch } from "../Contexts/SearchContext";


const Header = () => {
  const { setSearchQuery } = useSearch();

  return (
    <div className="header">
      <Link to="/">
        <img
          className="header__icon"
          src={Image}
          alt=""
        />
      </Link>

      <div className="header__center">
        <FaSearch />
        <input type="text" placeholder="Search" onChange={(e)=>{
          setSearchQuery(e.target.value);
        }}/>
      </div>

      <div className="header__right">
        <FaUser />
      </div>
    </div>
  );
};

export default Header;
