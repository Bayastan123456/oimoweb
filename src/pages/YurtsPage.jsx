import React, { useEffect, useState } from "react";
import YurtsList from "../components/Yurts/YurtsList";
import { Box, Pagination, Typography } from "@mui/material";
import Sort from "../components/Sort";
import { useDispatch, useSelector } from "react-redux";
import { getYurts } from "../store/yurts/yurtsActions";

const YurtsPage = () => {
  const { yurts } = useSelector((state) => state.yurts);
  console.log(yurts);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getYurts());
  }, []);

  const [page, setPage] = useState(1);
  const itemPerPage = 3;
  const count = Math.ceil(yurts.length / itemPerPage);

  function currentData() {
    const begin = (page - 1) * itemPerPage;
    const end = begin + itemPerPage;
    return yurts.slice(begin, end);
  }
  console.log(currentData);
  const handleChange = (_, p) => {
    setPage(p);
  };
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
      <Sort />
      <YurtsList currentData={currentData} />
      <Box sx={{ display: "flex", justifyContent: "center", margin: "50px 0" }}>
        <Pagination count={count} page={page} onChange={handleChange} />
      </Box>
    </Box>
  );
};

export default YurtsPage;
