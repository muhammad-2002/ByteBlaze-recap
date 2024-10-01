import { createBrowserRouter } from "react-router-dom";
import Blog from "../components/Home/Blog";
import Bookmark from "../components/Home/Bookmark";
import Home from "../components/Home/Home";
import MainLayout from "../layout/MainLayout";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        index: true,
        element: <Home></Home>,
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
      },
      {
        path: "/bookmark",
        element: <Bookmark></Bookmark>,
      },
    ],
  },
]);
