import { RouterProvider, createBrowserRouter } from "react-router-dom";
import HomePage from "../routes/HomePage/HomePage";
import Blog from "../routes/Blog/Blog";
import NotFoundPage from "../routes/NotFoundPage/NotFoundPage";
// import BlogPost from "../routes/BlogPost/BlogPost";

import NavRoot from "../routes/NavRoot/NavRoot";

const router = createBrowserRouter([
  {
    path: "/",
    element: <NavRoot />,
    children: [
      {
        path: "",
        element: <HomePage />,
      },
      {
        path: "/blog",
        element: <Blog />,
      },
      {
        path: "*",
        element: <NotFoundPage />,
      },
    ],
  },
]);

export default function RoutesProvider() {
  return <RouterProvider router={router} />;
}
