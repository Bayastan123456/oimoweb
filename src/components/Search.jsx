import { Box, Input, InputAdornment } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { getYurts } from "../store/yurts/yurtsActions";

const Search = () => {
  const { yurts } = useSelector((state) => state.yurts);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getYurts());
  }, []);
  const [search, setSearch] = useState("");

  console.log(search);

  const filterValue = yurts.filter((yurt) => {
    return yurt.city.toLowerCase().includes(search.toLocaleLowerCase());
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
