import "./tailwind.css";
import { Suspense } from "react";
import { createRoot } from "react-dom/client";
import { ErrorBoundary } from "react-error-boundary";
import { RouterProvider } from "react-router-dom";
import { GoogleOAuthProvider } from "@react-oauth/google";
import router from "./routes";
import LoadingSpinner from "./components/LoadingSpinner";
import { AuthContextProvider } from "./context/AuthContext";

(async () => {
  if (process.env.NODE_ENV === "development") {
    const worker = (await import("@/mocks/worker")).default;
    await worker.start();
  }
  const clientId = process.env.REACT_APP_GOOGLE_CLIENT_ID!;

  const root = createRoot(document.getElementById("root")!);

  root.render(
    <ErrorBoundary fallback={<div>Something went wrong</div>}>
      <Suspense fallback={<LoadingSpinner />}>
        <GoogleOAuthProvider clientId={clientId}>
          <AuthContextProvider>
            <RouterProvider router={router} />
          </AuthContextProvider>
        </GoogleOAuthProvider>
      </Suspense>
    </ErrorBoundary>,
  );
})();
