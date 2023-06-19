import * as React from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { Box, Typography } from "@mui/material";

const filtr = [
  { label: "По имени" },
  { label: "Дешевые" },
  { label: "Дорогие" },
  { label: "Больше свободного дня" },
];
const Sort = () => {
  return (
    <Box sx={{ paddingTop: "100px", display: "flex", justifyContent: "end" }}>
      <Autocomplete
        disablePortal
        id="combo-box-demo"
        options={filtr}
        sx={{ width: 300, backgroundColor: "white" }}
        renderInput={(params) => <TextField {...params} label="Сортировка" />}
      />
    </Box>
  );
};

export default Sort;
