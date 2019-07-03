import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import createStore from "./store";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./components/App.jsx";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";

import * as serviceWorker from "./serviceWorker";

const store = createStore();

const application = (
  <Provider store={store}>
    <Router>
      <App />
      <ToastContainer
        autoClose={3000}
        position="top-right"
        hideProgressBar={true}
      />
    </Router>
  </Provider>
);
const rootDocument = document.getElementById("root");

ReactDOM.render(application, rootDocument);


serviceWorker.register();