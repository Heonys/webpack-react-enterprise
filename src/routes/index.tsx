import React, { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";
import App from "../App";

const RecoilPage = lazy(() => import("@/pages/RecoilPage"));
const ServiceWorkerPage = lazy(() => import("@/pages/ServiceWorkerPage"));
const ReactQuery = lazy(() => import("@/pages/ReactQuery"));
const TestPage = lazy(() => import("@/pages/TestPage"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/recoil", element: <RecoilPage /> },
      { path: "/msw", element: <ServiceWorkerPage /> },
      { path: "/rq", element: <ReactQuery /> },
      { path: "/test", element: <TestPage /> },
    ],
  },
]);

export default router;
