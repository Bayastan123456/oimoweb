import { Box, Button, Modal, TextField, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { editYurt, getOneYurt } from "../store/yurts/yurtsActions";
import { useNavigate } from "react-router";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const EditModal = ({ yurtDetails }) => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  // ----------------------------------------------

  const [city, setCity] = useState(yurtDetails.city);
  const [price, setPrice] = useState(yurtDetails.price);
  const [days, setDays] = useState(yurtDetails.days);
  const [descr, setDescr] = useState(yurtDetails.descr);
  const [image1, setImage1] = useState(yurtDetails.image1);
  const [image2, setImage2] = useState(yurtDetails.image2);
  const [image3, setImage3] = useState(yurtDetails.image3);
  const [image4, setImage4] = useState(yurtDetails.image4);

  useEffect(() => {
    setCity(yurtDetails.city);
    setPrice(yurtDetails.price);
    setDays(yurtDetails.days);
    setDescr(yurtDetails.descr);
    setImage1(yurtDetails.image1);
    setImage2(yurtDetails.image2);
    setImage3(yurtDetails.image3);
    setImage4(yurtDetails.image4);
  }, [yurtDetails]);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const saveEditedYurts = () => {
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
      id: yurtDetails.id,
    };
    dispatch(editYurt(obj));
    dispatch(getOneYurt(obj.id));
  };

  return (
    <div>
      <Button onClick={handleOpen}>Редактирование</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography
            id="modal-modal-title"
            variant="h6"
            component="h2"
            className="fontFamilyS"
          >
            Редактирование
          </Typography>
          <Box
            sx={{
              mt: 2,
              display: "flex",
              justifyContent: "center",

              flexDirection: "column",
              gap: "15px",
            }}
          >
            <TextField
              id="filled-basic"
              label="Город"
              variant="filled"
              value={city}
              onChange={(e) => setCity(e.target.value)}
            />
            <TextField
              id="filled-basic"
              label="Цена"
              variant="filled"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
            <TextField
              id="filled-basic"
              label="Свободные дни"
              variant="filled"
              value={days}
              onChange={(e) => setDays(e.target.value)}
            />
            <TextField
              id="filled-basic"
              label="Описание"
              variant="filled"
              value={descr}
              onChange={(e) => setDescr(e.target.value)}
            />
            <TextField
              id="filled-basic"
              label="Фото1"
              variant="filled"
              value={image1}
              onChange={(e) => setImage1(e.target.value)}
            />
            <TextField
              id="filled-basic"
              label="Фото2"
              variant="filled"
              value={image2}
              onChange={(e) => setImage2(e.target.value)}
            />
            <TextField
              id="filled-basic"
              label="Фото3"
              variant="filled"
              value={image3}
              onChange={(e) => setImage3(e.target.value)}
            />
            <TextField
              id="filled-basic"
              label="Фото4"
              variant="filled"
              value={image4}
              onChange={(e) => setImage4(e.target.value)}
            />
          </Box>
          <Button onClick={saveEditedYurts}>Сохранить</Button>
        </Box>
      </Modal>
    </div>
  );
};

export default EditModal;
