import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/shared/Layout";
import HomePage from "../pages/Home/Index";
import NotFound from "../pages/NotFound/NotFound";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <HomePage /> },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);

export default router;
