import "./index.css";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { router } from "./components/router.tsx";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <>
    <h1 className="text-center pt-4 text-3xl">Bible Reading Challenge</h1>
    <RouterProvider router={router} />
  </>
);
