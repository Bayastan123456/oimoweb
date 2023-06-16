import { Button, useSelect } from "@mui/base";
import { Favorite, FavoriteBorder } from "@mui/icons-material";
import {
  Card,
  CardActionArea,
  CardContent,
  Checkbox,
  Pagination,
  Typography,
} from "@mui/material";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router";
import Swiper, { Keyboard, Mousewheel } from "swiper";
import { SwiperSlide } from "swiper/react";
import {
  deleteYurt,
  getOneYurt,
  getYurts,
} from "../../store/yurts/yurtsActions";

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
  const image = [
    {
      img: yurtDetails.image1,
    },
    {
      img: yurtDetails.image2,
    },
    {
      img: yurtDetails.image3,
    },
    {
      img: yurtDetails.image4,
    },
    {
      img: "https://a0.muscache.com/im/pictures/bb39ca0e-0241-4d77-b7a7-3f3ea6ac3bc7.jpg?im_w=1440",
    },
    {
      img: "https://a0.muscache.com/im/pictures/5e844e8d-ea23-404f-8818-4120660cd15d.jpg?im_w=1440",
    },
  ];

  const navigate = useNavigate();
  return (
    <>
      YurtsDetails
      <Card sx={{ maxWidth: 345, borderRadius: "20px" }}>
        <CardActionArea>
          {/* <Swiper
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
          </Swiper> */}
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
            <Button>Редактирование</Button>
            <Button
              onClick={() => {
                dispatch(deleteYurt(id));
                navigate("/yurts");
              }}
            >
              Удаление
            </Button>
          </CardContent>
        </CardActionArea>
      </Card>
    </>
  );
};

export default YurtsDetails;
