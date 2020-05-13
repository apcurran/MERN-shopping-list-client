import React from 'react';
import AppNavbar from './components/AppNavbar';
import About from "./components/About";
import Login from "./components/Login";
import Logout from "./components/Logout";
import ShoppingList from './components/ShoppingList';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>

      <div className="App">
        <AppNavbar />
        <Switch>
          <Route path="/" exact component={About} />
          <Route path="/user/login" exact component={Login} />
          <Route path="/user/logout" exact component={Logout} />
          <Route path="/user/list" exact component={ShoppingList} />
        </Switch>
      </div>

    </Router>
  );
}

export default App;
