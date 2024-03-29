import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import { useNavigate } from "react-router-dom";
import image from "./images/logo.svg";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import Cart from "../Cart/Cart";
import { ADMIN } from "../helpers/consts";
import { useDispatch, useSelector } from "react-redux";
import { authListener } from "../../store/auth/authAction";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import { getCart } from "../../store/cart/cartSlice";

// const settings = ["Profile", "Account", "Dashboard", "Logout"];

function Navbar() {
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const [flag, SetFlag] = React.useState(null);

  React.useEffect(() => {
    let cart = JSON.parse(localStorage.getItem("cart"));
    if (!cart) {
      cart = {
        yurts: [],
        totalPrice: 0,
      };
    }
    localStorage.setItem("cart", JSON.stringify(cart));
    dispatch(getCart(cart));
  }, []);
  const pages = [
    { path: "/yurts", title: "Юрты" },
    { path: "/contacts", title: "Контакты" },
    { path: "/aboutUs", title: "О нас" },
    user === ADMIN && { path: "/admin", title: "Админ" },
  ];
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  const navigate = useNavigate();

  React.useEffect(() => {
    dispatch(authListener());
  }, [dispatch]);
  return (
    <AppBar position="fixed" sx={{ backgroundColor: "white" }}>
      <Container maxWidth="xl">
        <Toolbar
          disableGutters
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <img
            style={{ width: "8vw" }}
            src={image}
            alt="ll"
            onClick={() => navigate("/")}
          />

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page.title} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page.title}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <AdbIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            LOGO
          </Typography>
          <Box
            sx={{
              width: "40%",
              //   flexGrow: 1,
              display: { xs: "none", md: "flex" },
            }}
          >
            {pages.map((page) => (
              <Button
                key={page.title}
                onClick={() => navigate(page.path)}
                sx={{ marginLeft: "40px", color: "black", display: "block" }}
              >
                {page.title}
              </Button>
            ))}
          </Box>

          <Box sx={{}}>
            <Box
              sx={{
                color: "black",
                display: "flex",
                width: "10vw",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <PersonOutlineIcon
                sx={{}}
                onClick={() => navigate("/register")}
              />
              {flag ? (
                <Cart />
              ) : (
                <Button>
                  <ShoppingBasketIcon
                    onClick={() => SetFlag(true)}
                    sx={{ color: "black" }}
                  />
                </Button>
              )}
            </Box>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Navbar;
