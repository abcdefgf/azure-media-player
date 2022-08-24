import React from "react";
import ReactDOM from "react-dom";
import { AzureMP } from "react-azure-mp"

import "./styles.css";

function App() {
  return (
    <div className="App">
      <h1>Simple initialization</h1>
      <AzureMP
        src={[{ src: "https://amssamples.streaming.mediaservices.windows.net/91492735-c523-432b-ba01-faba6c2206a2/AzureMediaServicesPromo.ism/manifest", type: "application/vnd.ms-sstr+xml" }]}
      />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
