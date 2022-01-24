import React, { useState, useEffect } from "react";
import logo from "../images/logo.png";
import axios from "axios";
import Grid from "./Grid";
import Search from "./Search";

const Navbar = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [query, setQuery] = useState("");
  useEffect(() => {
    const fetchData = async () => {
      const characters = await axios(
        `https://www.breakingbadapi.com/api/characters?name=${query}`
      );
      console.log(characters.data);
      setData(characters.data);
      setIsLoading(false);
    };
    fetchData();
  }, [query]);
  return (
    <>
      <div className="navbar">
        <img src={logo} alt="" width="200px" />
        <Search setQuery={setQuery} />
        <Grid isLoading={isLoading} data={data} />
      </div>
    </>
  );
};

export default Navbar;
