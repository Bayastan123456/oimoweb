import React from "react";
import HomePage from "../pages/HomePage";
import NotFoundPage from "../pages/NotFoundPage";
import YurtsPage from "../pages/YurtsPage";
import { Route, Routes } from "react-router-dom";
import AdminPage from "../pages/AdminPage";
import RegistrationPage from "../components/Register";
import AboutUs from "../pages/AboutUsPage";
import EditModal from "../components/EditModal";
import ContactPage from "../pages/ContactPage";

const MainRoutes = () => {
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
      link: "/admin",
      element: <AdminPage />,
      id: 4,
    },
    {
      link: "/register",
      element: <RegistrationPage />,
      id: 5,
    },
    {
      link: "/aboutUs",
      element: <AboutUs />,
      id: 6,
    },
    {
      link: "/contacts",
      element: <ContactPage />,
      id: 6,
    },
  ];

  return (
    <>
      <Routes>
        {PUBLIC_ROUTES.map((item) => (
          <Route path={item.link} element={item.element} key={item.id} />
        ))}
      </Routes>
    </>
  );
};

export default MainRoutes;
