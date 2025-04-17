import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";

// for redirecting on gh pages
const redirectPath = sessionStorage.getItem("redirectPath");
if (redirectPath) {
  sessionStorage.removeItem("redirectPath");
  window.history.replaceState(null, "", redirectPath);
}

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
