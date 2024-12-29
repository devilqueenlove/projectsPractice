import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App
      title="Harsh"
      desc="random fakhjkdfsjkldfs askfjldfasjkldfs jhasklkljsfd kasfjdkl"
    />
    <App title="Sharma" desc="kjldsfjk jkasfhdkl hfsklda kjjlafs kasdflj" />
  </StrictMode>
);
