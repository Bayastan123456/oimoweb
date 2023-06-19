import { Box, Button, TextField } from "@mui/material";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addYurts } from "../store/yurts/yurtsActions";
import { useNavigate } from "react-router-dom";

const Admin = () => {
  const [city, setCity] = useState("");
  const [price, setPrice] = useState("");
  const [days, setDays] = useState("");
  const [descr, setDescr] = useState("");
  const [image1, setImage1] = useState("");
  const [image2, setImage2] = useState("");
  const [image3, setImage3] = useState("");
  const [image4, setImage4] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleYurts = () => {
    if (
      !city.trim() ||
      !price.trim() ||
      !days.trim() ||
      !descr.trim() ||
      !image1.trim()
    ) {
      alert("Заполните поля!");
      return;
    }
    let obj = {
      city,
      price,
      days,
      descr,
      image1,
      image2,
      image3,
      image4,
    };
    dispatch(addYurts(obj));
  };
  return (
    <Box
      sx={{
        width: "100vw",
        height: "100vh",
        paddingTop: "65px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        alignContent: "space-between",
        gap: "30px",
        fontSize: "40px",
        backgroundImage:
          "url(https://bogatyr.club/uploads/posts/2023-03/1677805146_bogatyr-club-p-ornamenti-kirgizskie-foni-pinterest-39.jpg)",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      Admin
      <Box
        sx={{
          width: "100%",
          marginTop: "100px",
          width: "35%",
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
          gap: "15px",
        }}
      >
        <TextField
          sx={{ background: "white" }}
          label="Город"
          variant="outlined"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <TextField
          sx={{ background: "white" }}
          label="Цена"
          variant="outlined"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
        <TextField
          sx={{ background: "white" }}
          label="Свободные дни"
          variant="outlined"
          value={days}
          onChange={(e) => setDays(e.target.value)}
        />
        <TextField
          sx={{ background: "white" }}
          label="Описание"
          variant="outlined"
          value={descr}
          onChange={(e) => setDescr(e.target.value)}
        />
        <TextField
          sx={{ background: "white" }}
          label="Фото"
          variant="outlined"
          value={image1}
          onChange={(e) => setImage1(e.target.value)}
        />
        <TextField
          sx={{ background: "white" }}
          label="Фото"
          variant="outlined"
          value={image2}
          onChange={(e) => setImage2(e.target.value)}
        />
        <TextField
          sx={{ background: "white" }}
          label="Фото"
          variant="outlined"
          value={image3}
          onChange={(e) => setImage3(e.target.value)}
        />
        <TextField
          sx={{ background: "white" }}
          label="Фото"
          variant="outlined"
          value={image4}
          onChange={(e) => setImage4(e.target.value)}
        />
      </Box>
      <Button
        variant="contained"
        onClick={() => {
          handleYurts();
          navigate("/yurts");
        }}
      >
        Добавить
      </Button>
    </Box>
  );
};

export default Admin;
