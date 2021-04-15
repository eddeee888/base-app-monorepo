// import * as serviceWorker from 'serviceWorker';
import ReactDOM from "react-dom";
import AppShell from "./AppShell";
import App from "./App";

ReactDOM.render(
  <AppShell>
    <App />
  </AppShell>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
// serviceWorker.unregister();
