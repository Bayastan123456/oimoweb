import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

const Contact = () => {
  return (
    <Box className="bg-maincon">
      <Box
        sx={{
          backgroundImage:
            "url(https://bogatyr.club/uploads/posts/2023-03/1677805131_bogatyr-club-p-ornamenti-kirgizskie-foni-pinterest-15.png)",
          height: "90vh",
          width: "100%",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          justifyContent: "center",
          alignItems: "center",
          color: "white",
          display: "flex",
        }}
      >
        <Typography
          variant="h2"
          sx={{
            mt: "10px",
            fontSize: `50px`,
            fontFamily: "Arial",
            fontWeight: "600",
            pb: "10px",
            backgroundImage:
              "url(https://bogatyr.club/uploads/posts/2023-03/1677805131_bogatyr-club-p-ornamenti-kirgizskie-foni-pinterest-15.png)",
            boxShadow: "0px -6px 12px white",
            color: "beige",
          }}
        >
          Контакты
        </Typography>
      </Box>
      <Box>
        <Typography>
          <h1>Контактные данные</h1>
          <div className="contact-info">
            <div className="contact-img">
              <img
                id="bishkek"
                src="https://upload.wikimedia.org/wikipedia/commons/1/14/Bishkek-capital-of-Kyrgyzstan.jpg"
                alt="Contact"
              />
            </div>
            <div className="contact-info__text">
              <h2>Адрес</h2>
              <p>г.Бишкек,ул.Боконбаева 777</p>
              <h2>Телефон</h2>
              <p>996997333260</p>
              <h2>Почта</h2>
              <p>BishkekOimo@gmail.com</p>
            </div>
          </div>
          <div className="contact-info">
            <div className="contact-img">
              <img
                id="issyk"
                src="https://sputnik.kg/img/103430/44/1034304403_691:0:1814:1123_1920x0_80_0_0_9fad4cdf907eeb736274521586d87b4e.jpg"
                alt="Contact"
              />
            </div>
            <div className="contact-info__text">
              <h2>Адрес</h2>
              <p>г.Чолпон-Ата,ул.Чуйская 228</p>
              <h2>Телефон</h2>
              <p>9966666666</p>
              <h2>Почта</h2>
              <p>IssykOimo@gmail.com</p>
            </div>
          </div>
          <div className="contact-info">
            <div className="contact-img">
              <img
                id="osh"
                src="https://asiamountains.net/assets/cache_image/assets/lib/resized/370/1600x1063_0x0_d0b.jpg"
                alt="Contact"
              />
            </div>
            <div className="contact-info__text">
              <h2>Адрес</h2>
              <p>г.Ош,ул.Московская 666</p>
              <h2>Телефон</h2>
              <p>9966665554</p>
              <h2>Почта</h2>
              <p>OshOimo@gmail.com</p>
            </div>
          </div>
        </Typography>
      </Box>
    </Box>
  );
};

export default Contact;
