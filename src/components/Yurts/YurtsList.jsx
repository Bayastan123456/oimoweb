import React from "react";
import YurtsCard from "./YurtsCard";
import { Box } from "@mui/material";

const YurtsList = () => {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          gap: "5vw",
          marginTop: "20px",
        }}
      >
        <YurtsCard />
      </Box>
    </>
  );
};

export default YurtsList;
