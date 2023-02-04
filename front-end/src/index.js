import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import App from "./App";

import Home from "./routes/Home";
import Courses from "./routes/Courses.js";
import Articles from "./routes/Articles";
import Login from "./routes/Login";
import SignUp from "./routes/SignUp";
import ErrorPage from "./pages/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />,
  },
  {
    path: "courses/",
    element: <Courses />,
  },
  {
    path: "articles/",
    element: <Articles />,
  },
  {
    path: "login/",
    element: <Login />,
  },
  {
    path: "signup/",
    element: <SignUp />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
