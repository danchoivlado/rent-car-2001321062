import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./sassStyles/_reset.scss";
import ThemeContext from "./providers/ThemeContext";
import { BrowserRouter } from "react-router-dom";
import JobsContext from "./providers/JobsContext";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeContext>
        <JobsContext>
          <App />
        </JobsContext>
      </ThemeContext>
    </BrowserRouter>
  </React.StrictMode>
);
