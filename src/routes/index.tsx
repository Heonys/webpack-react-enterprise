import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import { DialogProvider } from "@/hooks/useDialog";
import RecoilPage from "@/pages/RecoilPage";
import ServiceWorkerPage from "@/pages/ServiceWorkerPage";
import ReactQuery from "@/pages/ReactQuery";
import DialogPage from "@/pages/DialogPage";
import ProfilePage from "@/pages/ProfilePage";
import TodoPage from "@/pages/TodoPage";
import MainPage from "@/pages/MainPage";
import NotFoundPage from "@/components/NotFound";
import ProtectedRoute from "./ProtectedRoute";
import LanguagePage from "@/pages/LanguagePage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <NotFoundPage />,
    children: [
      { index: true, element: <MainPage /> },
      { path: "/recoil", element: <RecoilPage /> },
      { path: "/msw", element: <ServiceWorkerPage /> },
      { path: "/rq", element: <ReactQuery /> },
      { path: "/todo", element: <TodoPage /> },
      { path: "/i18n", element: <LanguagePage /> },
      {
        path: "/dialog",
        element: (
          <DialogProvider>
            <DialogPage />
          </DialogProvider>
        ),
      },
      {
        path: "/profile",
        element: (
          <ProtectedRoute>
            <ProfilePage />
          </ProtectedRoute>
        ),
      },
    ],
  },
]);

export default router;
