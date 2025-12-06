import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Login from "./pages/Login";
import "./index.css";
import "./Fonts/Webfonts/fontiran.css";
import "./i18n";
import Otp from "./pages/Otp";
import Main from "./pages/Main";
import Charge from "./pages/Charge";
import Internet from "./pages/Internet";
import Services from "./pages/Services";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/otp",
    element: <Otp />,
  },
  {
    path: "/main",
    children:[
      {index:true,element:<Main/>},
      {path:"charge",element:<Charge/>},
      {path:"internet",element:<Internet/>},
      {path:"services",element:<Services/>}
    ]
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
