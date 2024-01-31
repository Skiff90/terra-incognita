import React from "react";
import ReactDOM from "react-dom";
import App from "./App"; // або App.jsx, якщо ви перейменували
import { ApolloProvider } from "@apollo/client";
import apolloClient from "./apolloClient";

ReactDOM.render(
  <ApolloProvider client={apolloClient}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </ApolloProvider>,
  document.getElementById("root")
);
