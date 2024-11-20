import React from "react";
import ReactDOM from "react-dom";
import App from "./src/App"; // "src" klasöründen App'i çağır
import Provider from "./src/context/Provider"; // "src/context" içindeki Provider'ı çağır

ReactDOM.render(
  <Provider>
    <App />
  </Provider>,
  document.getElementById("root")
);
