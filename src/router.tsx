import { createBrowserRouter } from "react-router-dom";
import Layout from "./components/Layout";
import Loader from "./components/Loader";
import BeanPage from "./pages/Bean";
import Beans from "./pages/Beans";
import Facts from "./pages/Fatcs";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Review from "./pages/Review";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    loader: Loader,
    children: [
      { index: true, element: <Home /> },
      { path: "facts", element: <Facts /> },
      { path: "bean/:id", element: <BeanPage /> },
      { path: "beans", element: <Beans /> },
      { path: "review", element: <Review /> },
      { path: "*", element: <NotFound /> },
    ],
  },
]);

export default router;
