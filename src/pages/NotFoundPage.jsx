import React from "react";
import { Button, Typography, Box } from "@mui/material";
import { useNavigate } from "react-router-dom";
import img from "./img/main.png";

export default function SimpleLGQuery() {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        backgroundImage: `url(${img})`,
        backgroundSize: "100%",
        height: "100vh",
        // position: "absolute",
        // left: "0",
        // right: "0",
        // top: "64px",
        // bottom: "0",
        textAlign: "center",
      }}
    >
      <Typography
        variant="h3"
        sx={{
          fontSize: `125px`,
          fontFamily: "Arial",
          fontWeight: "700",
          paddingTop: "10%",
        }}
      >
        404
      </Typography>
      <Typography
        variant="h3"
        sx={{
          mt: "10px",
          fontSize: `40px`,
          fontFamily: "Arial",
          fontWeight: "600",
        }}
      >
        Извините, но запрошенная вами страница не найдена
      </Typography>

      <Button
        onClick={() => navigate("/")}
        variant="contained"
        sx={{
          borderRadius: "500px",
          mt: "30px",
          width: `175px`,
          backgroundColor: "grey",
          transition: "0.6s",
          fontFamily: "arial",
          fontWeight: "600",
        }}
      >
        На главную
      </Button>
    </Box>
  );
}
