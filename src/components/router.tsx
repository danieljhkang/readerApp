import { createBrowserRouter } from "react-router";
import App from "../App";
import Register from "../pages/Register";
import Login from "../pages/Login";
import Dashboard from "../pages/Dashboard";

export const router = createBrowserRouter([
  { path: "/", element: <App /> },
  { path: "/signup", element: <Register /> },
  { path: "/signin", element: <Login /> },
  { path: "/", element: <Dashboard /> },
]);
