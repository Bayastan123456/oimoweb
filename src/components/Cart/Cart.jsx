import * as React from "react";
import Box from "@mui/material/Box";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
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
import { getOneYurt, getYurts } from "../../store/yurts/yurtsActions";

export default function Cart() {
  const [state, setState] = React.useState({
    right: false,
  });
  const label = { inputProps: { "aria-label": "Checkbox demo" } };
  const { yurtDetails } = useSelector((state) => state.yurts);
  const { yurts } = useSelector((state) => state.yurts);
  const dispatch = useDispatch();
  const { id } = useParams();
  console.log(id);

  console.log(yurts);

  useEffect(() => {
    dispatch(getYurts());
    dispatch(getOneYurt(id));
  }, []);

  console.log(yurtDetails);

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
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        <Card sx={{ maxWidth: 245, borderRadius: "20px" }}>
          <CardActionArea>
            <Box>
              <img
                style={{ width: "100%", height: "300px" }}
                src={yurtDetails.image1}
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
            </CardContent>
          </CardActionArea>
        </Card>
      </List>
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
