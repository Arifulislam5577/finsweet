import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/shared/Layout";
import HomePage from "../pages/Home/Index";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [{ index: true, element: <HomePage /> }],
  },
]);

export default router;
