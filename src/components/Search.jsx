import { Box, Input, InputAdornment } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";

const Search = () => {
  const { yurts } = useSelector((state) => state.yurts);

  const [products, setProducts] = useState(yurts);
  const [search, setSearch] = useState("");

  function searchYurt(text, list) {
    if (!text) {
      return list;
    } else {
      list.filter(({ city }) => {
        return city.toLowerCase().includes(text.toLowerCase());
      });
    }
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      const searchedYurta = searchYurt(search, yurts);
      setProducts(searchedYurta);
    }, 300);
  });

  return (
    <>
      <Input
        id="standard-adornment-amount"
        sx={{
          backgroundColor: "white",
          width: "70%",
          marginBottom: "0px",
          paddingLeft: "20px",
          fontSize: "25px",
          boxShadow: "10px 20px 30px  rgba(34, 60, 80, 0.6)",
          borderRadius: "20px",
        }}
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search"
      />
      {/* {yurts.map((yurta, index) => {
        return <li key={index}>{yurta.city}</li>;
      })} */}
    </>
  );
};

export default Search;
