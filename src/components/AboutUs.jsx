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
          margin: "8rem 20rem",
          flexDirection: "column",
          fontSize: "20px",
          fontFamily: "Arial",
          lineHeight: "1.5",
          color: "black",
          "@media(min-width: 1024px)": {
            margin: "8rem 15rem",
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
          своем доме в Сон-Куле,С тех пор OIMO превратился в глобальную
          платформу, объединяющую более четырех миллионов хозяев, которые с
          радостью принимают гостей из всех уголков мира. Сегодня OIMO
          предлагает не только уникальные места для проживания, но и
          неповторимые впечатления и опыты, позволяющие гостям насытиться
          аутентичной атмосферой и общением с местными сообществами. Мы гордимся
          тем, что каждый день наша платформа помогает людям установить более
          глубокие связи с разными культурами и открыть для себя мир в новом
          свете.
        </Typography>
      </Box>
    </Box>
  );
};

export default AboutUs;
