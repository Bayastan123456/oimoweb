import {
  Box,
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

const image = [
  {
    img: "https://a0.muscache.com/im/pictures/3bd2e5ac-6a78-4e1b-a310-3b48885d192d.jpg?im_w=720",
  },
  {
    img: "https://a0.muscache.com/im/pictures/072d971e-845f-4fdf-9a27-984df6881a01.jpg?im_w=720",
  },
  {
    img: "https://a0.muscache.com/im/pictures/bab1f777-0e07-48b7-b123-4a9f006a5fe2.jpg?im_w=720",
  },
  {
    img: "https://a0.muscache.com/im/pictures/458a6be1-2fa8-4bfc-8ca1-bc36a283f669.jpg?im_w=720",
  },
  {
    img: "https://a0.muscache.com/im/pictures/bb39ca0e-0241-4d77-b7a7-3f3ea6ac3bc7.jpg?im_w=1440",
  },
  {
    img: "https://a0.muscache.com/im/pictures/5e844e8d-ea23-404f-8818-4120660cd15d.jpg?im_w=1440",
  },
];

const YurtsCard = () => {
  const label = { inputProps: { "aria-label": "Checkbox demo" } };

  return (
    <Card sx={{ maxWidth: 345, borderRadius: "20px" }}>
      <CardActionArea>
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
            Kanimekh, Узбекистан
            {
              <Checkbox
                {...label}
                icon={<FavoriteBorder />}
                checkedIcon={<Favorite />}
              />
            }
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Расстояние: 742 километра 15–20 июн. $34 ночь
          </Typography>
          <Typography variant="body2" color="text.secondary" fontWeight="bold">
            $400
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default YurtsCard;
