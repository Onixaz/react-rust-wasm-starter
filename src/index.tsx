import React from "react";
import ReactDOM from "react-dom";

import "./global.scss";
import { useWasm } from "./hooks/useWasm";


const App = () => {

  const { instance, loading } = useWasm()
  if (loading) {
    return <h1>Loading...</h1>
  }

  if (!instance) {
    return <h1>Failed to load the instance</h1>
  }

  return (
    <>
      <h1>{instance.fibonnaci(40)}</h1>
    </>
  )
};

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
