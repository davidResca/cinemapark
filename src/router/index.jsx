import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import CandyBar from "../pages/CandyBar";
import Payment from "../pages/Payment";
import UserProfile from "../pages/UserProfile";
import NotFound404 from "../pages/NotFound404";

import LayoutPublic from "../layout/LayoutPublic";
import SeatSelection from "../pages/SeatSelection";
import MovieDetail from "../pages/MovieDetail";
import { loaderMovie } from "../pages/MovieDetail";
import { loaderMovies } from "../components/Movies";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <LayoutPublic />,
    errorElement: <NotFound404 />,
    children: [
      {
        index: true,
        element: <Home />,
        loader: loaderMovies,
      },
      {
        path: "/movies/:id",
        element: <MovieDetail />,
        loader: loaderMovie,
      },
      {
        path: "/seatselect/:id",
        element: <SeatSelection/>
      },
      {
        path: "/candybar",
        element: <CandyBar/>
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
]);
