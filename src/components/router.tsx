import { createBrowserRouter } from "react-router";
import Register from "../pages/Register";
import Login from "../pages/Login";
import Dashboard from "../pages/Dashboard";

export const router = createBrowserRouter([
  { path: "/", element: <Login /> },
  { path: "/signup", element: <Register /> },
  { path: "/home", element: <Dashboard /> },
]);
