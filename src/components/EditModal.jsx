import { Box, Button, Modal, TextField, Typography } from "@mui/material";
import React from "react";

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

const EditModal = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <div>
      <Button onClick={handleOpen}>Edit</Button>
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
            Изменение
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
            <TextField id="filled-basic" label="город" variant="filled" />
            <TextField id="filled-basic" label="цена" variant="filled" />
            <TextField
              id="filled-basic"
              label="свободные дни"
              variant="filled"
            />
            <TextField id="filled-basic" label="описание" variant="filled" />
            <TextField id="filled-basic" label="фото1" variant="filled" />
            <TextField id="filled-basic" label="фото2" variant="filled" />
            <TextField id="filled-basic" label="фото3" variant="filled" />
            <TextField id="filled-basic" label="фото4" variant="filled" />
          </Box>
          <Button>Сохранить</Button>
        </Box>
      </Modal>
    </div>
  );
};

export default EditModal;
