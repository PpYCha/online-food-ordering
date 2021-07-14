import "./App.css";
import Navbar from "./component/Navbar";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import About from "./pages/About";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Store from "./pages/Store";
function App() {
  return (
    <Router>
      <Navbar />

      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/about">
          <About />
        </Route>
        <Route exact path="/register">
          <Register />
        </Route>
        <Route exact path="/store">
          <Store />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
