import React from "react";
import ReactDOM from "react-dom/client";
// code added VV
import { Authenticator } from '@aws-amplify/ui-react';
// code added ^^
import App from "./App.tsx";
import "./index.css";
import { Amplify } from "aws-amplify";
import outputs from "../amplify_outputs.json";
// code added VV
import '@aws-amplify/ui-react/styles.css';
// code added ^^


Amplify.configure(outputs);

ReactDOM.createRoot(document.getElementById("root")!).render(
  // code added VV
    <React.StrictMode>
    <Authenticator>
      <App />
    </Authenticator>
  </React.StrictMode>
  // code added ^^
);

  

