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
export const getOneYurt = createAsyncThunk("@yurts/getOneYurt", async (id) => {
  const { data } = await axios.get(`${API}/${id}`);
  return data;
});
export const deleteYurt = createAsyncThunk(
  "@yurts/deleteYurt",
  async (id, { dispatch }) => {
    await axios.delete(`${API}/${id}`);
    dispatch(getYurts());
  }
);
export const editYurt = createAsyncThunk(
  "@yurts/editYurt",
  async (obj, { dispatch }) => {
    await axios.patch(`${API}/${obj.id}`, obj);
    dispatch(getYurts());
  }
);
