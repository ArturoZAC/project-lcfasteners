import { RouterProvider } from "react-router-dom";
import { router } from "./routes/AppRouter";

export const AppLc = () => {
  return <RouterProvider router={router} />;
};
