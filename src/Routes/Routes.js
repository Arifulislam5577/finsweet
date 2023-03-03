import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/shared/Layout";
import About from "../pages/About/Index";
import HomePage from "../pages/Home/Index";
import NotFound from "../pages/NotFound/NotFound";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "/about", element: <About /> },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);

export default router;
