import React from "react";
import ReactDOM from "react-dom/client";
import styles from "./index.css";
import Header from "./src/components/Header";
import Body from "./src/components/Body";
import Footer from "./src/components/Footer";
import {
  createBrowserRouter as Router,
  RouterProvider,
  Outlet,
} from "react-router";
import About from "./src/components/About";
import Error from "./src/components/Error";
import Contact from "./src/components/Contactus";
import Menu from "./src/components/Menu";
import Profile from "./src/components/Profile";
import ProfileClass from "./src/components/ProfileClass";
import useOnline from "./utils/useOnline";
import Offline from "./src/components/Offline";

const AppLayout = function () {
  const isOnline = useOnline();
  if (!isOnline)
    return (
      <>
        <Header />
        <Offline />
        <Footer />
      </>
    );
  return (
    <div className="bg-gray-800 h-full  ">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

const appRouter = Router([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
        children: [{ path: "profile", element: <Profile /> }],
      },
      { path: "/contact", element: <Contact /> },
      { path: "/restaurant/:resId", element: <Menu /> },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
