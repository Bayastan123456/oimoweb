import { Favorite, FavoriteBorder } from "@mui/icons-material";
import { Box, Button, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router";
import PlaceIcon from "@mui/icons-material/Place";
import KeyIcon from "@mui/icons-material/Key";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import StarIcon from "@mui/icons-material/Star";
import HotelIcon from "@mui/icons-material/Hotel";
import {
  deleteYurt,
  getOneYurt,
  getYurts,
} from "../../store/yurts/yurtsActions";
import EditModal from "../EditModal";
import { ADMIN } from "../helpers/consts";
import { getCart } from "../../store/cart/cartSlice";
import { calcTotalPrice } from "../helpers/functions";
const YurtsDetails = () => {
  const { yurts } = useSelector((state) => state.yurts);
  const { yurtDetails } = useSelector((state) => state.yurts);
  const { user } = useSelector((state) => state.auth);
  const [count, setCount] = useState(1);
  function getCount() {
    setCount((prev) => prev + 1);
  }

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

  const navigate = useNavigate();

  const result = +yurtDetails.price * count + 10;

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
      subPrice: +yurt.price * count + 10,
    };

    let yurtInCart = cart.yurts.filter((elem) => elem.item.id === yurt.id);

    if (yurtInCart.length == 0) {
      cart.yurts.push(obj);
    } else {
      cart.yurts = cart.yurts.filter((elem) => elem.item.id !== yurt.id);
    }
    cart.totalPrice = calcTotalPrice(cart.yurts);
    localStorage.setItem("cart", JSON.stringify(cart));
    dispatch(getCart(cart));
    console.log(cart.yurts);
  }
  return (
    <Box
      sx={{
        width: "100%",
        backgroundImage:
          "url(https://bogatyr.club/uploads/posts/2023-03/thumbs/1677805146_bogatyr-club-p-ornamenti-kirgizskie-foni-pinterest-39.jpg)",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <Box
        width="90%"
        sx={{
          margin: "60px auto 0px",
          background: "white",
          paddingLeft: "20px",
        }}
      >
        <Typography variant="h2">{yurtDetails.city}</Typography>
        <Box display="flex">
          <img
            style={{
              width: "40vw",
              height: "500px",
              border: "10px solid white",
            }}
            src={yurtDetails.image1}
            alt="image"
          />
          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
            }}
          >
            <img
              style={{
                width: "250px",
                height: "250px",
                border: "10px solid white",
              }}
              src={yurtDetails.image2}
              alt="image"
            />
            <img
              style={{ height: "250px", border: "10px solid white" }}
              src={yurtDetails.image3}
              alt="image"
            />{" "}
            <img
              style={{ height: "250px", border: "10px solid white" }}
              src={yurtDetails.image4}
              alt="image"
            />
          </Box>
        </Box>
        <Box
          width="100%"
          sx={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: "50px",
          }}
        >
          <Box
            sx={{
              borderTop: "2px solid gray",
              width: "50%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              gap: "10px",
            }}
          >
            <Typography sx={{ fontWeight: "bold", fontSize: "18px" }}>
              {<PlaceIcon />} Отличное расположение
            </Typography>
            <Typography>
              100% недавних гостей оценили расположение жилья на пять звезд.
            </Typography>
            <Typography sx={{ fontWeight: "bold", fontSize: "18px" }}>
              {<KeyIcon />} Прибытие организовано отлично
            </Typography>
            <Typography>
              {" "}
              100% недавних гостей оценили прибытие на пять звезд.
            </Typography>
            <Typography sx={{ fontWeight: "bold", fontSize: "18px" }}>
              {<CalendarMonthIcon />} Бесплатная отмена до 13:00 17 июн.
            </Typography>
          </Box>
          <Box
            sx={{
              width: "35%",
              height: "40vh",
              // border: "2px solid orange",
              boxShadow: "20px 20px 40px black",
              borderRadius: "20px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-around",
              textAlign: "center",
            }}
          >
            <Box sx={{ display: "flex", justifyContent: "space-around" }}>
              <Typography sx={{ fontSize: "25px", fontWeight: "bold" }}>
                ${yurtDetails.price}{" "}
                <span style={{ fontWeight: "100" }}>ночь</span>
              </Typography>
              <Typography>{<StarIcon />} 4.81 </Typography>
            </Box>
            <Box sx={{ display: "flex", justifyContent: "space-around" }}>
              <Typography>
                Сервисный сбор OIMO Показать разбивку цены
              </Typography>
              <Typography>$10</Typography>
            </Box>
            <Box
              sx={{
                width: "10vw",
                display: "flex",
                justifyContent: "space-around",
                alignItems: "center",
              }}
            >
              <Button
                onClick={() =>
                  count > 1 ? setCount((prev) => prev - 1) : setCount(1)
                }
              >
                -
              </Button>
              <Typography>{count}</Typography>
              <Button onClick={getCount}>+</Button>
              <Typography>ночей</Typography>
            </Box>

            <Typography
              sx={{
                borderTop: "2px solid gray",
                width: "80%",
                margin: "0 auto",
              }}
            >
              Всего (без учета налога): ${result}
            </Typography>
            {user != ADMIN ? (
              <Button
                color="secondary"
                variant="contained"
                sx={{ width: "250px", margin: "0 auto" }}
                onClick={() => addToCart(yurtDetails)}
              >
                В корзину
              </Button>
            ) : (
              <Box sx={{ display: "flex", justifyContent: "space-around" }}>
                <EditModal yurtDetails={yurtDetails} />
                <Button
                  color="secondary"
                  variant="contained"
                  onClick={() => {
                    dispatch(deleteYurt(id));
                    navigate("/yurts");
                  }}
                >
                  Удаление,
                </Button>
              </Box>
            )}
          </Box>
        </Box>
        <Box
          sx={{
            width: "70%",

            borderRadius: "20px",
            marginTop: "50px",
          }}
        >
          <Box>
            <Typography variant="h4">Краткое описание</Typography>
            <Typography>{yurtDetails.descr}</Typography>
          </Box>
          <Box>
            <Typography variant="h4">Свободные дни:</Typography>

            <Typography> {yurtDetails.days}</Typography>
          </Box>
        </Box>
        <Box sx={{ marginTop: "50px" }}>
          <Typography variant="h5" sx={{}}>
            Где вы будете спать
          </Typography>
          <Box
            sx={{
              border: "2px solid gray",
              width: "25%",
              height: "150px",
              borderRadius: "20px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "space-evenly",
            }}
          >
            <Box>
              {<HotelIcon />} {<HotelIcon />}
              {<HotelIcon />}
              {<HotelIcon />}
            </Box>
            <Typography>Спальня</Typography>
            <Typography>4 матраса на полу</Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default YurtsDetails;
