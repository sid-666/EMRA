import React, { useContext } from "react";
import AuthContext from "./context/AuthContext";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Nav from "./components/Nav"
import Login from "./pages/login"
import Register from "./pages/register"
import Transaction from "./pages/transactioninput"
import Dashboard from "./pages/dashboard"
import Home from "./pages/home"

function App() {
  const { loggedIn } = useContext(AuthContext);
  return (
    <BrowserRouter>
      <Nav />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        {loggedIn === false && (
          <>
            <Route path="/register">
              <Register />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
          </>
        )}
        {loggedIn === true && (

          <>
            <Route path="/transaction">
              <Transaction />
            </Route>

            <Route path="/dashboard">
              <Dashboard />
            </Route>
          </>
        )}
      </Switch>
    </BrowserRouter>


  );
}

export default App;
