import { Favorite, FavoriteBorder } from "@mui/icons-material";
import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  Checkbox,
  Typography,
} from "@mui/material";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getYurts } from "../store/yurts/yurtsActions";
import { useNavigate } from "react-router-dom";

const OnlyThree = () => {
  const { yurts } = useSelector((state) => state.yurts);
  console.log(yurts);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getYurts());
  }, [dispatch]);
  const label = { inputProps: { "aria-label": "Checkbox demo" } };

  const navigate = useNavigate();
  let filterObj = yurts.filter((item, index) => {
    return index < 3;
  });

  console.log(filterObj);
  return (
    <Box sx={{ display: "flex", gap: "5%" }}>
      {filterObj?.map((item) => (
        <Card
          sx={{
            width: "345px",
            borderRadius: "20px",
            boxShadow: "20px 20px 20px black",
          }}
        >
          <CardActionArea>
            <img
              style={{ width: "100%", height: "30vh" }}
              src={item.image1}
              alt="image"
              onClick={() => navigate("/details/" + item.id)}
            />

            <CardContent>
              <Typography
                gutterBottom
                variant="h5"
                component="div"
                sx={{ display: "flex", justifyContent: "space-between" }}
              >
                {item.city}
                {
                  <Checkbox
                    {...label}
                    icon={<FavoriteBorder />}
                    checkedIcon={<Favorite />}
                  />
                }
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Свободные дни: {item.days}
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                fontWeight="bold"
              >
                ${item.price}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      ))}
    </Box>
  );
};

export default OnlyThree;
