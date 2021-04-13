import React from "react";
import { BrowserRouter } from "react-router-dom";
import Routing from "./routing";
import { GlobalProvider } from "./context/GlobalState";
function App() {
  return (
    <BrowserRouter>
      <GlobalProvider>
        <Routing />
      </GlobalProvider>
    </BrowserRouter>
  );
}

export default App;
