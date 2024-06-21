import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { ThemeProvider } from "@material-tailwind/react";
import TestContext from "./TestContext/TestContext.jsx";
import { Localization } from "./Localization/Localization.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  
    <Localization>
      <TestContext>
        <App />
      </TestContext>
    </Localization>
 
);
