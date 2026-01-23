import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { AppLc } from "./AppLc";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <AppLc />
  </StrictMode>,
);
