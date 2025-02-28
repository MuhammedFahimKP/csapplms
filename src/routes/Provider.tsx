import { RouterProvider } from "react-router-dom";

import { router } from "./Routes";

const RouteProvider = () => {
  return <RouterProvider router={router} />;
};

export default RouteProvider;
