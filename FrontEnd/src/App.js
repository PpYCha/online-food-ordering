import "./App.css";
import Navbar from "./components/Navbar";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import About from "./pages/About";
import Home from "./pages/Home";

import AddressForm from "./pages/Checkout";

import SignUp from "./pages/SignUp";

import Error from "./pages/Error";
import SingleStore from "./pages/SingleStore";

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
        <Route exact path="/checkout">
          <AddressForm />
        </Route>

        <Route exact path="/signup">
          <SignUp />
        </Route>
        <Route path="/store/:id">
          <SingleStore />
        </Route>
        <Route path="*">
          <Error />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
