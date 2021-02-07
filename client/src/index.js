import React from "react";
import ReactDOM from "react-dom";
import {AuthContextProvider} from "./context/AuthContext"
import { DataContextProvider } from "./context/UserTransactionData"
import App from "./App";

ReactDOM.render(
<AuthContextProvider>
    <DataContextProvider>
        <App />
    </DataContextProvider>
</AuthContextProvider>
, document.getElementById("root"));
