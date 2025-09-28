import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import i18n from "./i18n.ts"; // Import your i18n configuration
import { I18nextProvider } from "react-i18next";
import { LessonProvider } from "./context/LessonContext.tsx";

createRoot(document.getElementById("root")!).render(
  <I18nextProvider i18n={i18n}>
    <LessonProvider>
      <App />
    </LessonProvider>
  </I18nextProvider>
);
