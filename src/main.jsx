import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";
import Body from "./component/Body.jsx";
import ContactUs from "./component/ContactUs.jsx";
import DeliveryAndPayment from "./component/DeliveryAndPayment.jsx";

import RestaurantMenu from "./component/RestaurantMenu.jsx";
import "./App.css";
import SignIn from "./component/SignIn.jsx";
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/sign-in",
        element: <SignIn />,
      },
      {
        path: "/delivery-payments",
        element: <DeliveryAndPayment />,
      },
      {
        path: "/restaurant-menu/:resId",
        element: <RestaurantMenu />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={appRouter} />
  </React.StrictMode>
);
