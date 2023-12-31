import React, { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";
import App from "../App";

const RecoilPage = lazy(() => import("@/pages/RecoilPage"));
const ServiceWorkerPage = lazy(() => import("@/pages/ServiceWorkerPage"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/recoil", element: <RecoilPage /> },
      { path: "/msw", element: <ServiceWorkerPage /> },
    ],
  },
]);

export default router;
