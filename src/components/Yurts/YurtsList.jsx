import React, { useEffect } from "react";
import YurtsCard from "./YurtsCard";
import { Box } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { getYurts } from "../../store/yurts/yurtsActions";
import EditModal from "../EditModal";

const YurtsList = () => {
  const { yurts } = useSelector((state) => state.yurts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getYurts());
  }, []);
  console.log(yurts);
  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          gap: "5vw",
          marginTop: "80px",
        }}
      >
        {yurts?.map((item) => (
          <YurtsCard item={item} />
        ))}
        <EditModal />
      </Box>
    </>
  );
};

export default YurtsList;
