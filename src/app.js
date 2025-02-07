/**
 * Header
 *   Logo
 *   Nav Items
 *   Cart
 * Body
 *   Search Bar
 *   Image Carousel using Config Driven UI
 *   Restraunt List
 *   Restraunt Cards
 *     Image
 *     Name
 *     Rating
 *     Cusines
 * Footer
 *   Links
 *   CopyRight
 */

import React, { lazy, Suspense, useState, useContext } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import About from "./components/About";
import Error from "./components/Error";
import { RouterProvider, createBrowserRouter, Outlet } from "react-router-dom";
import Contact from "./components/Contact";
import RestaurantMenu from "./components/RestaurantMenu";
import Profile from "./components/ProfileFunctional";
import ProfileClass from "./components/ProfileClass";
import Shimmer from "./components/Shimmer";
import userContext from "./utils/UserContext";
import { Provider } from "react-redux";
import store from "./utils/store";
import Cart from "./components/Cart";

// We will not import Instamart like this as we are splitting the code.
// import Instamart from "./components/Instamart";

// Importing instamart dynamically using lazy which is for lazy loading
const Instamart = lazy(() => import("./components/Instamart"));
// Upon On Demand Loading -> Upon render -> Suspend the loading

const AppLayout = () => {
  console.log("AppLayout Rendering...")
  const [user, setUser] = useState({
    name: "Raman Malhotra",
    email: "malhotra.srishti2004@gmail.com",
  });

  return (
    <>
      {/* This is just for overriding the default value which we have used in userContext */}
      <Provider store={store}>
        <userContext.Provider
          value={{
            user: user,
            setUser: setUser,
          }}
        >
          <Header />
          <Outlet />
          <Footer user={user} />
        </userContext.Provider>
      </Provider>
    </>
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
        // path: "/restaurant/:resId",
        element: <RestaurantMenu />,
      },
      {
        path: "/instamart",
        element: (
          // "fallback" can be anything. It could be an <h1> tag also
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

// console.log("Rendering App... ");

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
