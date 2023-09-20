import { createRoot } from "react-dom/client";
import MainController from "./Controller";
import Home from "./pages/home";

const root = createRoot(document.getElementById("app"));

root.render(
  <MainController>
    <Home />
  </MainController>
);
