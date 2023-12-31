import React, { Suspense } from "react";
import { createRoot } from "react-dom/client";
import "./tailwind.css";
import { RecoilRoot } from "recoil";
import { RouterProvider } from "react-router-dom";
import router from "./routes";
import LoadingSpinner from "./components/LoadingSpinner";

async function enableMocking() {
  if (process.env.NODE_ENV !== "development") {
    return;
  }
  const { worker } = await import("./mocks/worker");
  return worker.start();
}

enableMocking().then(() => {
  const root = createRoot(document.getElementById("root")!);
  root.render(
    <Suspense fallback={<LoadingSpinner />}>
      <RecoilRoot>
        <RouterProvider router={router} />
      </RecoilRoot>
    </Suspense>,
  );
});
