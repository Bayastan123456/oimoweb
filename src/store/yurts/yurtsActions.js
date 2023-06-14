import { createAsyncThunk } from "@reduxjs/toolkit";
import { API } from "../../components/helpers/consts";
import { setYurts } from "./yurtsSlice";
import axios from "axios";

export const getYurts = createAsyncThunk(
  "@yurts/getYurts",
  async (_, { dispatch }) => {
    const { data } = await axios(API);
    dispatch(setYurts(data));
  }
);

export const addYurts = createAsyncThunk(
  "@yurts/addYurts",
  async (obj, { dispatch }) => {
    await axios.post(API, obj);
    dispatch(getYurts());
  }
);
