import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

// #region agent log
console.log('[DEBUG] App initialization started');
// #endregion

try {
  const rootElement = document.getElementById("root");
  
  // #region agent log
  console.log('[DEBUG] Root element check', { rootExists: !!rootElement });
  // #endregion
  
  if (!rootElement) {
    throw new Error("Root element not found");
  }
  
  const root = createRoot(rootElement);
  
  // #region agent log
  console.log('[DEBUG] About to render App');
  // #endregion
  
  root.render(<App />);
  
  // #region agent log
  console.log('[DEBUG] App rendered successfully');
  // #endregion
} catch (error) {
  // #region agent log
  console.error('[DEBUG] Error in main.tsx', error);
  // #endregion
  console.error("Error rendering app:", error);
}
