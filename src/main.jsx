import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./index.css";
import Login from "./pages/Login.jsx";
import Visit from "./pages/Visit.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/visit" element={<Visit />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
