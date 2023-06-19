import * as React from "react";
import Box from "@mui/material/Box";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import {
  Card,
  CardActionArea,
  CardContent,
  Checkbox,
  Typography,
} from "@mui/material";
import { Favorite, FavoriteBorder } from "@mui/icons-material";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { useParams } from "react-router";
import { getCart } from "../../store/cart/cartSlice";
import { calcTotalPrice } from "../helpers/functions";

export default function Cart() {
  const [state, setState] = React.useState({
    right: false,
  });
  const label = { inputProps: { "aria-label": "Checkbox demo" } };
  const dispatch = useDispatch();
  const { id } = useParams();
  const { yurts, totalPrice } = useSelector((state) => state.cart.cart);
  console.log(yurts);
  console.log(totalPrice);

  useEffect(() => {
    let cart = JSON.parse(localStorage.getItem("cart"));
    if (!cart) {
      localStorage.setItem(
        "cart",
        JSON.stringify({ yurts: [], totalPrice: 0 })
      );
      cart = { yurts: [], totalPrice: 0 };
    }
    cart.totalPrice = calcTotalPrice(yurts);
    dispatch(getCart(cart));
  }, [state]);

  function deleteCart(id) {
    let cart = JSON.parse(localStorage.getItem("cart"));
    cart.yurts = cart.yurts.filter((item) => item.item.id !== id);
    cart.totalPrice = calcTotalPrice(cart.yurts);
    localStorage.setItem("cart", JSON.stringify(cart));
    dispatch(getCart(cart));
  }
  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: 550 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      {yurts?.map((elem) => (
        <List sx={{ width: "100%" }}>
          <Card sx={{ maxWidth: 245, borderRadius: "20px" }}>
            <CardActionArea>
              <Box>
                <img
                  style={{ width: "100%", height: "300px" }}
                  src={elem.item.image1}
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
                  {elem.item.city}
                  {
                    <Checkbox
                      {...label}
                      icon={<FavoriteBorder />}
                      checkedIcon={<Favorite />}
                    />
                  }
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  fontWeight="bold"
                ></Typography>
              </CardContent>
            </CardActionArea>
          </Card>
          <h3>${elem.subPrice}</h3>
          <Button onClick={() => deleteCart(elem.item.id)}>Удалить</Button>
        </List>
      ))}
      <h2>К оплате: ${totalPrice} </h2>
    </Box>
  );

  return (
    <div>
      {["right"].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button onClick={toggleDrawer(anchor, true)}>
            <ShoppingBasketIcon sx={{ color: "black" }} />
          </Button>
          <SwipeableDrawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
            onOpen={toggleDrawer(anchor, true)}
          >
            {list(anchor)}
          </SwipeableDrawer>
        </React.Fragment>
      ))}
    </div>
  );
}
