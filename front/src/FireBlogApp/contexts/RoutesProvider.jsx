import { RouterProvider, createBrowserRouter } from "react-router-dom";
import HomePage from "../routes/HomePage/HomePage";
import Blog from "../routes/Blog/Blog";
import NotFoundPage from "../routes/NotFoundPage/NotFoundPage";
import BlogPost from "../routes/BlogPost/BlogPost";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    errorElement: <NotFoundPage />,
  },
  {
    path: "/blog",
    element: <Blog />,
  },
  {
    path: '/post/:postId',
    element: <BlogPost />
  }
]);

export default function RoutesProvider() {
  return <RouterProvider router={router} />;
}
