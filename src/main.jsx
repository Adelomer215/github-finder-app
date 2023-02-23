import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import AlertContextProvider from "./context/alert/AlertContext";
import GithubContextProvider from "./context/github/GithubContext";
import "./styles/main.scss";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <AlertContextProvider>
        <GithubContextProvider>
          <App />
        </GithubContextProvider>
      </AlertContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);
