import React, { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import { DialogProvider } from "@/hook/useDialog";

const RecoilPage = lazy(() => import("@/pages/RecoilPage"));
const ServiceWorkerPage = lazy(() => import("@/pages/ServiceWorkerPage"));
const ReactQuery = lazy(() => import("@/pages/ReactQuery"));
const TestPage = lazy(() => import("@/pages/TestPage"));
const DialogPage = lazy(() => import("@/pages/DialogPage"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/recoil", element: <RecoilPage /> },
      { path: "/msw", element: <ServiceWorkerPage /> },
      { path: "/rq", element: <ReactQuery /> },
      {
        path: "/dialog",
        element: (
          <DialogProvider>
            <DialogPage />
          </DialogProvider>
        ),
      },
      { path: "/test", element: <TestPage /> },
    ],
  },
]);

export default router;
