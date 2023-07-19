import React, { lazy, Suspense, useEffect } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/title";
import Body from "./components/body";
import Footer from "./components/footer";
import About from "./components/about";
import Contact from "./components/contact";
import RestaurantMenu from "./components/restaurantMenu";
import Profile from "./components/profile";
import Cart from "./components/cart";
import Error from "./components/error";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Shimmer from "./components/shimmer.js";
import { Provider } from "react-redux";
import store from "./utils/store";
import axios from "axios";

const Instamart = lazy(() => import("./components/instamart"));

const AppLayout = () => {
  useEffect(() => {
    (async () => {
      const response = await axios.post("http://localhost:4000/user_login", {
        sayHai: true,
      });
      console.log(response.data);
    })();
  }, []);

  return (
    <Provider store={store}>
      <>
        <Header />
        <Outlet />
        <Footer />
      </>
    </Provider>
  );
};

const appRouter = createBrowserRouter([
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
        children: [
          {
            path: "profile",
            element: <Profile />,
          },
        ],
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/restaurant/:id",
        element: <RestaurantMenu />,
      },
      {
        path: "/instamart",
        element: (
          <Suspense fallback={<Shimmer />}>
            <Instamart />
          </Suspense>
        ),
      },
      {
        path: "/cart",
        element: <Cart />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
