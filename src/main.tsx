import ReactDOM, { Container } from "react-dom/client";
import { BrowserRouter } from "react-router";
import App from "./App";
import "./index.css";

const root = document.getElementById("root");

ReactDOM.createRoot(root as Container).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
