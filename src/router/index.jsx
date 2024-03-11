import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import CandyBar from "../pages/CandyBar";
import Payment from "../pages/Payment";
import UserProfile from "../pages/UserProfile";
import NotFound404 from "../pages/NotFound404";

import LayoutPublic from "../layout/LayoutPublic";
import SeatSelection from "../pages/SeatSelection";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <LayoutPublic />,
    errorElement: <NotFound404 />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/candybar",
        element: <CandyBar />,
      },
      {
        path: "/payment",
        element: <Payment />,
      },
      {
        path: "/profile",
        element: <UserProfile />,
      },
    ],
  },
  {
    path: "/seatselection",
    element: <SeatSelection />,
    errorElement: <NotFound404 />,
  },
]);
