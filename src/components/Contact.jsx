import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

const Contact = () => {
  return (
    <Box>
      <Box
        sx={{
          backgroundImage:
            "url(https://bogatyr.club/uploads/posts/2023-03/1677805131_bogatyr-club-p-ornamenti-kirgizskie-foni-pinterest-15.png)",
          height: "90vh",
          width: "100%",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          justifyContent: "center",
          alignItems: "center",
          color: "white",
          display: "flex",
        }}
      >
        <Typography
          variant="h2"
          sx={{
            mt: "10px",
            fontSize: `50px`,
            fontFamily: "Arial",
            fontWeight: "600",
            pb: "10px",
            backgroundImage:
              "url(https://bogatyr.club/uploads/posts/2023-03/1677805131_bogatyr-club-p-ornamenti-kirgizskie-foni-pinterest-15.png)",
            opacity: "89%",
            boxShadow: "0px -6px 12px white",
            color: "beige",
          }}
        >
          Контакты
        </Typography>
      </Box>
    </Box>
  );
};

export default Contact;
