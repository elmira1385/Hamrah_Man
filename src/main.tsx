import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Login from "./pages/Login";
import "./index.css"
import "./Fonts/Webfonts/fontiran.css"
import './i18n';
import  Otp from "./pages/Otp";
import  Main from "./pages/Main";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Login/>,
  },
  {
    path: "/otp",
    element: <Otp/>,
  },
  {
    path: "/main",
    element: <Main/>,
  },
 
]);


createRoot(document.getElementById("root")!).render(
  <StrictMode>
      <RouterProvider router={router} />
  </StrictMode>
);
 