import { createBrowserRouter } from "react-router-dom";

import { AppLayout } from "../layout/AppLayout";

import { ModelPage } from "../pages/modelo/ModelPage";
import { ProductsPage } from "../pages/products/ProductsPage";
import { ValidPage } from "../pages/valid/ValidPage";
import { TrainingPage } from "../pages/training/TrainingPage";
import { HomePage } from "../pages/home/HomePage";

export const router = createBrowserRouter([
  {
    path: "/informativas/lcfasteners/",
    element: <AppLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "modelo-gestion",
        element: <ModelPage />,
      },
      {
        path: "productos",
        element: <ProductsPage />,
      },
      {
        path: "validacion-tecnica",
        element: <ValidPage />,
      },
      {
        path: "capacitacion",
        element: <TrainingPage />,
      },
    ],
  },
]);
