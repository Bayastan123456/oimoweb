import { Button } from "@mui/base";
import { Favorite, FavoriteBorder, Image } from "@mui/icons-material";
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
import { useNavigate, useParams } from "react-router";
import {
  deleteYurt,
  getOneYurt,
  getYurts,
} from "../../store/yurts/yurtsActions";
import EditModal from "../EditModal";
import { getCart } from "../../store/cart/cartSlice";

const YurtsDetails = () => {
  const { yurts } = useSelector((state) => state.yurts);
  const { yurtDetails } = useSelector((state) => state.yurts);
  const dispatch = useDispatch();
  const { id } = useParams();
  console.log(id);

  console.log(yurts);

  useEffect(() => {
    dispatch(getYurts());
    dispatch(getOneYurt(id));
  }, []);

  console.log(yurtDetails);

  const label = { inputProps: { "aria-label": "Checkbox demo" } };

  function addToCart(yurt) {
    let cart = JSON.parse(localStorage.getItem("cart"));
    if (!cart) {
      cart = {
        yurts: [],
        totalPrice: 0,
      };
    }
    let obj = {
      item: yurt,
      count: 1,
      subPrice: +yurt.price,
    };

    let yurtInCart = cart.yurts.filter((elem) => elem.item.id === yurt.id);

    if (yurtInCart.length == 0) {
      cart.yurts.push(obj);
    } else {
      cart.yurts = cart.yurts.filter((elem) => elem.item.id !== yurt.id);
    }
    dispatch(getCart(cart.products));
  }

  const navigate = useNavigate();
  return (
    <>
      YurtsDetails
      <Card sx={{ maxWidth: 345, borderRadius: "20px" }}>
        <CardActionArea>
          <Box>
            <img
              style={{ width: "100%", height: "300px" }}
              src={yurtDetails.image1}
              alt="image"
            />{" "}
            <img
              style={{ width: "100%", height: "300px" }}
              src={yurtDetails.image2}
              alt="image"
            />{" "}
            <img
              style={{ width: "100%", height: "300px" }}
              src={yurtDetails.image3}
              alt="image"
            />{" "}
            <img
              style={{ width: "100%", height: "300px" }}
              src={yurtDetails.image4}
              alt="image"
            />
          </Box>
          <CardContent>
            <Typography
              gutterBottom
              variant="h5"
              component="div"
              sx={{ display: "flex", justifyContent: "space-between" }}
            >
              {yurtDetails.city}
              {
                <Checkbox
                  {...label}
                  icon={<FavoriteBorder />}
                  checkedIcon={<Favorite />}
                />
              }
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {yurtDetails.days}
              {yurtDetails.descr}
            </Typography>
            <Typography
              variant="body2"
              color="text.secondary"
              fontWeight="bold"
            >
              ${yurtDetails.price}
            </Typography>
            <EditModal yurtDetails={yurtDetails} />
            <Button
              onClick={() => {
                dispatch(deleteYurt(id));
                navigate("/yurts");
              }}
            >
              Удаление
            </Button>
            <Button onClick={() => addToCart(yurtDetails)}>В корзину</Button>
          </CardContent>
        </CardActionArea>
      </Card>
    </>
  );
};

export default YurtsDetails;
