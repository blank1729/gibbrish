import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import AnimatedRoutes from "./Routes/AnimatedRoutes";
import Header from "./Components/Header";
import Studio from "./studio/Studio";
import ThemeProvider from "./ThemeContext";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
    <ThemeProvider>
      <AnimatedRoutes />
    </ThemeProvider>
      <Routes>
        <Route path="/studio" element={<Studio />}>
          Studio
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
