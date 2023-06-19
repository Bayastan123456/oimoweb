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
  ];

  return (
    <Card
      sx={{
        maxWidth: 345,
        borderRadius: "20px",
        boxShadow: "20px 20px 20px black",
      }}
    >
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
          {image.map((i) => (
            <SwiperSlide onClick={() => navigate("/details/" + item.id)}>
              <img
                style={{ width: "100%", height: "300px" }}
                src={i.img}
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
            Свободные дни: {item.days}
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
