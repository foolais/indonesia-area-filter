import { createBrowserRouter } from "react-router-dom";
import FilterPage from "./page/FilterPage";
import { regionLoader } from "./utils/loader";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <FilterPage />,
    loader: regionLoader,
  },
]);
