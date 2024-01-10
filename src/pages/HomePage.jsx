import React from "react";
import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-fade";

import { Autoplay, Pagination, Navigation, EffectFade } from "swiper";
import { Box, Button, CardMedia, Typography } from "@mui/material";
import WavesIcon from "@mui/icons-material/Waves";
import PetsIcon from "@mui/icons-material/Pets";
import LocalFloristIcon from "@mui/icons-material/LocalFlorist";
import LocalFireDepartmentIcon from "@mui/icons-material/LocalFireDepartment";
import GasMeterIcon from "@mui/icons-material/GasMeter";
import LocalLaundryServiceIcon from "@mui/icons-material/LocalLaundryService";
import CarRepairIcon from "@mui/icons-material/CarRepair";
import MicrowaveIcon from "@mui/icons-material/Microwave";
import { useNavigate } from "react-router-dom";
import OnlyThree from "../components/OnlyThree";

const HomePage = () => {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty("--progress", 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 2000)}s`;
  };
  const navigate = useNavigate();
  return (
    <Box color="white" sx={{ fontFamily: "'PT Serif', serif" }}>
      <Swiper
        modules={[Autoplay, Pagination, Navigation, EffectFade]}
        spaceBetween={5}
        centeredSlides={true}
        autoplay={{
          delay: 10000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        effect={"fade"}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        className="mySwiper"
      >
        <SwiperSlide>
          <Box
            sx={{
              backgroundImage:
                "url(https://img.freepik.com/premium-photo/natural-landscape-lonely-yurt-against-background-of-field-and-mountains_124507-33917.jpg)",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              backgroundPosition: "center",
              width: "100vw",
              height: "100vh",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "column",
            }}
          >
            <Typography
              sx={{
                color: "white",
                boxShadow: "5px 10px 10px black",
                fontSize: "60px",
                fontStyle: "italic",
              }}
              className="fontFamilySItalic"
            >
              Добро пожаловать!!!
            </Typography>
            <Button
              variant="outlined"
              sx={{ marginTop: "50px", color: "white", backgroundColor: "red" }}
              className="fontFamilyS"
              onClick={() => navigate("/yurts")}
            >
              Заказать
            </Button>
          </Box>
        </SwiperSlide>
        <SwiperSlide>
          <Box
            sx={{
              backgroundImage:
                "url(https://bogatyr.club/uploads/posts/2023-03/1678776207_bogatyr-club-p-yurta-fon-foni-instagram-1.jpg)",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              backgroundPosition: "center",
              width: "100vw",
              height: "100vh",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "column",
            }}
          >
            <Typography
              variant="h2"
              sx={{
                boxShadow: "10px 10px 10px white",
                ":hover": { color: "white" },
              }}
              className="fontFamilySItalic"
            >
              Yurt Camp Beltam (Seaside) <br /> Иссык-Кульская область, Киргизия
            </Typography>
          </Box>
        </SwiperSlide>
        <SwiperSlide>
          <Box
            sx={{
              backgroundImage:
                "url(https://abrakadabra.fun/uploads/posts/2022-01/1642475226_1-abrakadabra-fun-p-fon-yurta-1.jpg)",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              backgroundPosition: "center",
              width: "100vw",
              height: "100vh",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "column",
            }}
          ></Box>
        </SwiperSlide>
        <div className="autoplay-progress" slot="container-end">
          <svg viewBox="0 0 48 48" ref={progressCircle}>
            <circle cx="24" cy="24" r="20"></circle>
          </svg>
          <span ref={progressContent}></span>
        </div>
      </Swiper>
      <Box
        sx={{
          backgroundImage:
            "url(https://sneg.top/uploads/posts/2023-03/1678448462_sneg-top-p-gori-kirgizii-oboi-instagram-3.jpg)",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          textAlign: "center",
          width: "100%",
        }}
      >
        <Typography
          color="white"
          sx={{
            padding: "50px 0",
            fontSize: { xl: 50, lg: 45, md: 40, cm: 35, xs: 30 },
          }}
          className="fontFamilyS"
        >
          КЫРГЫЗСКАЯ ЮРТА <br /> Дом, который всегда с тобой
        </Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            flexWrap: {
              xl: "nowrap",
              lg: "nowrap",
              md: "nowrap",
              cm: "wrap",
              xs: "wrap",
            },
            width: "80%",
            alignItems: "center",
            margin: "auto",
            backgroundColor: "rgb(0,0,0,0.5)",
          }}
        >
          <CardMedia
            component="img"
            image="https://img.freepik.com/premium-photo/white-modern-yurt-against-background-of-coniferous-forest-and-mountains_124507-33928.jpg"
            alt="yurta"
            sx={{ width: "50%" }}
          />

          <Typography color="white" className="fontFamilyS">
            В культуре и укладе жизни современных кыргызов до сих пор сильно
            влияние их кочевого прошлого. В течение многих столетий переезжали
            они с места на место по суровым просторам Сибири, занимались
            разведением скота, главным образом лошадей. Будучи отменными
            наездниками, постоянно воевали с многочисленными врагами. Но, в
            конечном счете, оставили Сибирь и мигрировали в горы Тянь-Шаня и
            Памира, где и нашли пристанище
          </Typography>
        </Box>

        <Typography
          sx={{
            color: "white",
            margin: "50px 0 ",
            fontSize: { xl: 50, lg: 45, md: 40, cm: 35, xs: 30 },
          }}
          className="fontFamilyS"
        >
          Юрта - это разборная, достаточно легкая конструкция
        </Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            width: "80%",
            alignItems: "center",
            margin: "auto",
            paddingBottom: "50px",
          }}
        >
          <Typography
            className="fontFamilyS"
            color="white"
            sx={{
              backgroundColor: "rgb(0,0,0,0.5)",
              padding: "40px 0",
              fontSize: {
                xl: 18,
                lg: 17,
                md: 16,
                cm: 15,
                xs: 11,
              },
            }}
          >
            Для крепления отдельных элементов также использовались плетеные
            кожаные ремешки, которые опоясывали юрту по периметру и служили ее
            украшением. Идеальным материалом, который был выбран кочевниками для
            покрытия стен и крыши юрты, была кошма. Кошму или войлочный ковер
            катают из верблюжьей или овечьей шерсти. Она не пропускает холод и
            жару, не боится влаги, в ней не заводятся паразиты. Кошмой также
            полностью застилали полы. Семья простого кочевника обычно жила в
            юрте «боз юй» на 5 - 6 «канатов» (секций «кереге»). На строительство
            таких юрт уходило от 80 до 100 жердей «ууки». Когда семья снималась
            с места, обычно требовалось 30 - 40 минут, чтобы ее разобрать. Юрта
            весила около 400 кг, и ее перевозили, навьючив на двух лошадей или
            одного верблюда.
          </Typography>
          <CardMedia
            component="img"
            image="https://sputnik.kg/img/101476/71/1014767142_0:210:2000:1335_2072x0_60_0_0_e7297d0eaa8abb525c3d63742f64e884.jpg"
            alt="yurta"
            sx={{
              width: { xl: "40%", lg: "40%", md: "40%", cm: "60%", xs: "60%" },
              display: {
                xl: "block",
                lg: "block",
                md: "block",
                cm: "none",
                xs: "none",
              },
            }}
          />
        </Box>
      </Box>
      <Box
        sx={{
          textAlign: "center",
          backgroundImage:
            "url(https://supara.kg/wp-content/uploads/2017/06/5.yurt-young-01-600x400.jpg)",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          width: "100%",
        }}
      >
        <Typography
          sx={{
            padding: "50px 0px",
            fontSize: { xl: 50, lg: 45, md: 40, cm: 35, xs: 30 },
          }}
          className="fontFamilyS"
        >
          {" "}
          НАШИ ЮРТЫ
        </Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            paddingBottom: "50px",
            flexWrap: "wrap",
            overflowX: "auto",
          }}
        >
          <OnlyThree />
        </Box>
      </Box>
      <Box
        sx={{
          textAlign: "center",
          backgroundImage:
            "url(https://sneg.top/uploads/posts/2023-03/thumbs/1678448468_sneg-top-p-gori-kirgizii-oboi-instagram-67.jpg)",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <Typography
          // variant="h3"
          color="error"
          sx={{
            boxShadow: "5px 10px 10px black",
            marginTop: "50px",
            fontFamily: "'PT Serif', serif",
            fontSize: { xl: 50, lg: 45, md: 40, cm: 35, xs: 30 },
          }}
        >
          Какие удобства вас ждут
        </Typography>
        <Typography
          sx={{
            variant: "ul",
            textAlign: "start",
            backgroundColor: "rgb(0,0,0,0.5)",
            listStyle: "none",
            fontSize: {
              xl: 35,
              lg: 30,
              md: 25,
              cm: 20,
              xs: 11,
            },
            width: "50%",
          }}
          className="fontFamilyS"
        >
          <li>
            <WavesIcon /> Выход к озеру
          </li>
          <li>
            <PetsIcon /> Можно с питомцами
          </li>
          <li>
            <LocalFloristIcon />
            Задний двор
          </li>
          <li>
            <LocalFireDepartmentIcon />
            Костровище
          </li>
          <li>
            <CarRepairIcon />
            Бесплатная парковка на территории
          </li>

          <li>
            <LocalLaundryServiceIcon />
            Стиральная машина
          </li>
          <li>
            <MicrowaveIcon /> Микроволновая печь
          </li>
          <li>
            <GasMeterIcon />
            Датчик дыма
          </li>
          <li>
            <GasMeterIcon /> Датчик угарного газа
          </li>
        </Typography>
      </Box>
    </Box>
  );
};

export default HomePage;
