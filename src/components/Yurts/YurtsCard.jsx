import {
  Box,
  Button,
  Card,
  CardActionArea,
  CardContent,
  Checkbox,
  Typography,
} from "@mui/material";
import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Pagination, Mousewheel, Keyboard } from "swiper";
import { Favorite, FavoriteBorder, Label } from "@mui/icons-material";
import { useNavigate } from "react-router";

const YurtsCard = ({ item }) => {
  const label = { inputProps: { "aria-label": "Checkbox demo" } };
  const navigate = useNavigate();
  const image = [
    {
      img: item.image1,
    },
    {
      img: item.image2,
    },
    {
      img: item.image3,
    },
    {
      img: item.image4,
    },
    {
      img: "https://a0.muscache.com/im/pictures/bb39ca0e-0241-4d77-b7a7-3f3ea6ac3bc7.jpg?im_w=1440",
    },
    {
      img: "https://a0.muscache.com/im/pictures/5e844e8d-ea23-404f-8818-4120660cd15d.jpg?im_w=1440",
    },
  ];
  return (
    <Card sx={{ maxWidth: 345, borderRadius: "20px" }}>
      <CardActionArea onClick={() => navigate("/details/" + item.id)}>
        <Swiper
          spaceBetween={5}
          slidesPerView={1}
          cssMode={true}
          pagination={{
            clickable: true,
          }}
          mousewheel={true}
          keyboard={true}
          modules={[Pagination, Mousewheel, Keyboard]}
          className="mySwiper"
        >
          {image.map((item) => (
            <SwiperSlide>
              <img
                style={{ width: "100%", height: "300px" }}
                src={item.img}
                alt="image"
              />
            </SwiperSlide>
          ))}
        </Swiper>
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
            {item.days}
            {item.descr}
          </Typography>
          <Typography variant="body2" color="text.secondary" fontWeight="bold">
            ${item.price}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default YurtsCard;
