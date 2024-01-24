import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import { DialogProvider } from "@/hook/useDialog";
import RecoilPage from "@/pages/RecoilPage";
import ServiceWorkerPage from "@/pages/ServiceWorkerPage";
import ReactQuery from "@/pages/ReactQuery";
import DialogPage from "@/pages/DialogPage";
import TestPage from "@/pages/TestPage";
import UtilPage from "@/pages/UtilPage";
import MainPage from "@/pages/MainPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <MainPage /> },
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
      { path: "/util", element: <UtilPage /> },
    ],
  },
]);

export default router;
