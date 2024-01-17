import { Suspense } from "react";
import { createRoot } from "react-dom/client";
import { ErrorBoundary } from "react-error-boundary";
import "./tailwind.css";
import { RouterProvider } from "react-router-dom";
import router from "./routes";
import LoadingSpinner from "./components/LoadingSpinner";
import worker from "@/mocks/worker";

if (process.env.NODE_ENV === "development") {
  worker.start();
}
const root = createRoot(document.getElementById("root")!);

root.render(
  <ErrorBoundary fallback={<div>Something went wrong</div>}>
    <Suspense fallback={<LoadingSpinner />}>
      <RouterProvider router={router} />
    </Suspense>
  </ErrorBoundary>,
);
