import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import UviPage from "./pages/UviPage";
import ReminderPage from "./pages/ReminderPage";
import UviImpact from "./pages/UviImpact";
import reportWebVitals from "./reportWebVitals";
import Track from "./pages/track";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/uvi",
    element: <UviPage />,
  },
  {
    path: "/reminder",
    element: <ReminderPage />,
  },
  {
    path: "/impact",
    element: <UviImpact />,
  },
  {
    path: "/track",
    element: <Track />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
