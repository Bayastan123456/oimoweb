import React, { useEffect, useState } from "react";
import YurtsList from "../components/Yurts/YurtsList";
import { Box, Input, Pagination } from "@mui/material";
import Sort from "../components/Sort";
import { useDispatch, useSelector } from "react-redux";
import { getYurts } from "../store/yurts/yurtsActions";

const YurtsPage = () => {
  const { yurts } = useSelector((state) => state.yurts);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getYurts());
  }, [dispatch]);

  const [search, setSearch] = useState("");
  const [selectedSort, setSelectedSort] = useState(null);

  const filterValue = yurts.filter((yurt) => {
    return yurt.city.toLowerCase().includes(search.toLowerCase());
  });
  // useEffect(() => {
  //   if (selectedSort) {
  //     const [sortType, sortOrder] = selectedSort.split("-");
  //     if (sortType === "cheap") {
  //       if (sortOrder === "desc") {
  //         let filtry = filterValue.sort(
  //           (a, b) => b.yurts.price - a.yurts.price
  //         );
  //         console.log(filtry);
  //       } else {
  //         filterValue.sort((a, b) => a.yurts.price - b.yurts.price);
  //       }
  //     } else if (sortType === "moreFreeDays") {
  //       if (sortOrder === "desc") {
  //         filterValue.sort((a, b) => b.yurts.days - a.yurts.days);
  //       } else {
  //         filterValue.sort((a, b) => a.yurts.days - b.yurts.days);
  //       }
  //     }
  //   }
  // }, [selectedSort, filterValue]);
  // console.log(selectedSort);

  const [page, setPage] = useState(1);
  const itemPerPage = 3;
  const count = Math.ceil(filterValue.length / itemPerPage);

  function currentData() {
    const begin = (page - 1) * itemPerPage;
    const end = begin + itemPerPage;
    return filterValue.slice(begin, end);
  }

  const handleChange = (_, p) => {
    setPage(p);
  };

  console.log(selectedSort);
  return (
    <Box
      sx={{
        backgroundImage:
          "url(https://bogatyr.club/uploads/posts/2023-03/1677805130_bogatyr-club-p-ornamenti-kirgizskie-foni-pinterest-57.jpg)",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-around",
          paddingTop: "100px",
        }}
      >
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

        <Sort setSelectedSort={setSelectedSort} />
      </Box>

      <YurtsList currentData={currentData} />
      <Box sx={{ display: "flex", justifyContent: "center", margin: "50px 0" }}>
        <Pagination count={count} page={page} onChange={handleChange} />
      </Box>
    </Box>
  );
};

export default YurtsPage;
