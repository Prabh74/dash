import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import router from "./router";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
console.log("Made by Prabhjot Singh");
root.render(<RouterProvider router={router} />);
