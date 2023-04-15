import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { DataContextProvder } from "./context/dataContext";

const rootElement = document.getElementById("root");

const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <DataContextProvder>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </DataContextProvder>
  </StrictMode>
);
