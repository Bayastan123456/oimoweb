import React, { useEffect } from "react";
import YurtsCard from "./YurtsCard";
import { Box } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { getYurts } from "../../store/yurts/yurtsActions";

const YurtsList = ({ currentData }) => {
  const { yurts } = useSelector((state) => state.yurts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getYurts());
  }, []);

  console.log(currentData);
  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          gap: "5vw",
          marginTop: "80px",
          justifyContent: "center",
        }}
      >
        {yurts ? (
          currentData().map((item) => <YurtsCard item={item} key={item.id} />)
        ) : (
          <></>
        )}
      </Box>
    </Box>
  );
};

export default YurtsList;
