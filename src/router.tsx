import { createBrowserRouter } from "react-router-dom";

export default createBrowserRouter([
  {
    path: "/",
    lazy: () => import("./routes"),
  },
]);
