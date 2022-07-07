import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import FormBuilder from "./view/form/Builder";

const rootElement = document.getElementById("surveyElement");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <FormBuilder />
  </StrictMode>
);
