import { StrictMode } from "react";
import ReactDOM from "react-dom";
import App from "./App";
import AppShell from "./AppShell";

ReactDOM.render(
  <StrictMode>
    <AppShell>
      <App />
    </AppShell>
  </StrictMode>,
  document.getElementById("root")
);
