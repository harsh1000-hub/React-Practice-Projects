import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import TextExpander from "./TextExpander";
import { useState } from "react";
// import App from "./App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <TextExpander />
    <TextExpander
      buttonColor="orange"
      textOpenButton="Show Text"
      textCloseButton="Collapse text"
    />
    <TextExpander expanded={true} className="box" />
  </StrictMode>
);
