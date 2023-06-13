import React from "react";
import HomePage from "../pages/HomePage";
import NotFoundPage from "../pages/NotFoundPage";
import YurtsPage from "../pages/YurtsPage";
import { Route, Routes } from "react-router-dom";

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
