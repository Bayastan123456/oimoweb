import React from "react";
import YurtsList from "../components/Yurts/YurtsList";
import { Box } from "@mui/material";

const YurtsPage = () => {
  return (
    <Box sx={{ display: "flex", justifyContent: "center" }}>
      <YurtsList />
    </Box>
  );
};

export default YurtsPage;
