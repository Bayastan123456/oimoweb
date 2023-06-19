import React from "react";
import HomePage from "../pages/HomePage";
import NotFoundPage from "../pages/NotFoundPage";
import YurtsPage from "../pages/YurtsPage";
import { Navigate, Route, Routes } from "react-router-dom";
import AdminPage from "../pages/AdminPage";
import YurtsDetails from "../components/Yurts/YurtsDetails";
import RegistrationPage from "../components/Register";
import AboutUs from "../pages/AboutUsPage";
import EditModal from "../components/EditModal";
import ContactPage from "../pages/ContactPage";
import LoginPage from "../pages/LoginPage";
import Admin from "../components/Admin";
import { ADMIN } from "../components/helpers/consts";
import { useSelector } from "react-redux";

const MainRoutes = () => {
  const { user } = useSelector((state) => state.auth);

  const PUBLIC_ROUTES = [
    {
      link: "/",
      element: <HomePage />,
      id: 1,
    },
    {
      link: "/yurts",
      element: <YurtsPage />,
      id: 2,
    },
    {
      link: "*",
      element: <NotFoundPage />,
      id: 3,
    },
    {
      link: "/details/:id",
      element: <YurtsDetails />,
      id: 5,
    },
    { link: "/register", element: <RegistrationPage />, id: 6 },
    {
      link: "/login",
      element: <LoginPage />,
      id: 7,
    },
    {
      link: "/aboutUs",
      element: <AboutUs />,
      id: 8,
    },
    {
      link: "/contacts",
      element: <ContactPage />,
      id: 6,
    },
  ];
  const PRIVATE_ROUTES = [
    {
      link: "/admin",
      element: <AdminPage />,
      key: 1,
    },
  ];
  return (
    <>
      <Routes>
        {PUBLIC_ROUTES.map((item) => (
          <Route path={item.link} element={item.element} key={item.id} />
        ))}
        {user &&
          PRIVATE_ROUTES.map((item) => (
            <Route
              path={item.link}
              element={
                user === ADMIN ? item.element : <Navigate replace to="*" />
              }
              key={item.id}
            />
          ))}
      </Routes>
    </>
  );
};

export default MainRoutes;
