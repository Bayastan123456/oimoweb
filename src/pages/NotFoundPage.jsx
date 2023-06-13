import React from "react";
import { Button, useMediaQuery, Typography, Box } from "@mui/material";
import { useNavigate } from "react-router-dom";
import img from "./img/main.png";

export default function SimpleLGQuery() {
  const SXs = useMediaQuery("(max-width: 370px");
  const xs = useMediaQuery("(max-width: 600px)");
  const cm = useMediaQuery("(max-width: 900px)");
  const md = useMediaQuery("(max-width: 1200px)");

  const navigate = useNavigate();

  return (
    <Box
      sx={{
        backgroundImage: `url(${img})`,
        backgroundSize: "100%",
        position: "absolute",
        left: "0",
        right: "0",
        top: "0",
        bottom: "0",
      }}
    >
      <Typography
        variant="h3"
        sx={{
          mt: "15%",
          fontSize: `125px`,
          fontFamily: "Arial",
          fontWeight: "700",
          marginLeft: "40%",
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
          marginLeft: "15%",
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
          fontFamily: "ubuntu",
          fontWeight: "400",
          marginLeft: "41%",
        }}
      >
        На главную
      </Button>
    </Box>
  );
}
