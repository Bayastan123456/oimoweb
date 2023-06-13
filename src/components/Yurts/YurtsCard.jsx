import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
const YurtsCard = () => {
  const image = [
    {
      img: "https://a0.muscache.com/im/pictures/3bd2e5ac-6a78-4e1b-a310-3b48885d192d.jpg?im_w=1200",
    },
    {
      img: "https://a0.muscache.com/im/pictures/072d971e-845f-4fdf-9a27-984df6881a01.jpg?im_w=720",
    },
    {
      img: "https://a0.muscache.com/im/pictures/bab1f777-0e07-48b7-b123-4a9f006a5fe2.jpg?im_w=720",
    },
  ];
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <Swiper
          spaceBetween={5}
          slidesPerView={1}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
        >
          {image.map((item) => (
            <SwiperSlide>
              <img style={{ width: "100%" }} src={item.img} alt="" />
            </SwiperSlide>
          ))}
        </Swiper>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Lizard {<FavoriteBorderIcon />}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
          <Typography variant="body2" color="text.secondary">
            $400
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default YurtsCard;
