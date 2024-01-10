import React from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";

const filtr = [
  { label: "По имени", value: "name" },
  { label: "Дешевые (убывание)", value: "cheap-desc" },
  { label: "Дорогие (возрастание)", value: "cheap-asc" },
  { label: "Больше свободного дня (убывание)", value: "moreFreeDays-desc" },
  { label: "Меньше свободного дня (возрастание)", value: "moreFreeDays-asc" },
];

const Sort = ({ setSelectedSort }) => {
  const handleChange = (event, value) => {
    setSelectedSort(value);
  };

  return (
    <>
      <Autocomplete
        disablePortal
        id="combo-box-demo"
        options={filtr}
        getOptionLabel={(option) => option.label}
        sx={{ width: 300, backgroundColor: "white" }}
        onChange={handleChange}
        renderInput={(params) => <TextField {...params} label="Сортировка" />}
      />
    </>
  );
};

export default Sort;
