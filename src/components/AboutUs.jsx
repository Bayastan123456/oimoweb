import { Box, Button, TextField, Typography } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

const AboutUs = () => {
  const navigate = useNavigate();

  return (
    <Box>
      <Box
        sx={{
          backgroundImage:
            "url(https://reporter.kg/wp-content/uploads/2023/04/boz-yj.jpg)",
          height: "90vh",
          width: "100%",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          display: "flex",
        }}
      ></Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          margin: "8rem 0",
          flexDirection: "column",
          fontSize: "20px",
          fontFamily: "Arial",
          lineHeight: "1.5",
          color: "black",
          "@media(min-width: 951px)": {
            margin: "8rem auto",
          },
        }}
      >
        <Typography
          variant="h2"
          sx={{
            mt: "10px",
            fontSize: `50px`,
            fontFamily: "Arial",
            fontWeight: "600",
            pb: "30px",
          }}
        >
          О нас
        </Typography>
        <Typography>
          OIMO был создан в 2007 году, когда два хозяина приняли трех гостей в
          своем доме в Сон-Куле, и с тех пор он вырос до более чем 4 миллионов
          хозяев, которые приняли 1,4 миллиарда приездов гостей практически в
          каждой стране по всему миру. Каждый день хозяева предлагают уникальное
          проживание и впечатления, которые позволяют гостям настоящим образом
          познакомиться с сообществами.
        </Typography>
      </Box>
    </Box>
  );
};

export default AboutUs;
