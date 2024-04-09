import { createBrowserRouter } from "react-router-dom";
import NotFound404 from "../pages/NotFound404";
import LayoutRoot from "../layout/LayoutRoot";

// Public
import Home from "../pages/Home";
import CandyBar from "../pages/CandyBar";
import MovieDetail from "../pages/MovieDetail";
// Private
import UserProfile from "../pages/UserProfile";
import SeatSelection from "../pages/SeatSelection";
import Payment from "../pages/Payment";
import Login from "../pages/Login"
import Register from "../pages/Register"

// loaders
import { loaderMovie } from "../pages/MovieDetail";
import { loaderMovies } from "../components/Movies";
import LayoutPrivate from "../layout/LayoutPrivate";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <LayoutRoot />,
    errorElement: <NotFound404 />,
    children: [
      {
        index: true,
        element: <Home/>,
        loader: loaderMovies,
      },   
      {
        path: "/movies/:id",
        element: <MovieDetail />,
        loader: loaderMovie,
      },
      {
        path: "/candybar",
        element: <CandyBar/>
      },
      {
        path:'/login',
        element: <Login/>
      },
      {
        path:'/register',
        element: <Register/>
      },
      {
        path: "/private",
        element: <LayoutPrivate/>,
        children: [
          {
            path: "/private/selectseats/:id",
            element: <SeatSelection/>
          },
          {
            path: "/private/payment",
            element: <Payment />,
          },
          {
            path: "/private/profile",
            element: <UserProfile />,
          },

        ]
      }
    ],
  },
]);
