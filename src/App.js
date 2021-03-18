import React, { Component, Fragment } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SignIn from "./Components/AuthComponent/Signin";
import Signup from "./Components/AuthComponent/Signup";
import SpotifyNavbar from "./Components/HeaderComponent/SpotifyNavbar";
import Home from "./Components/HomeComponent/Home";
import PageNoteFound from "./Components/pageNotFound/PageNotFound";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
class App extends Component {
  state = {};
  render() {
    return (
      <Fragment>
        <Router>
          <header>
            <SpotifyNavbar />
          </header>
          <ToastContainer />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/Signin" exact component={SignIn} />
            <Route path="/signup" exact component={Signup} />
            <Route path="*" component={PageNoteFound} />
          </Switch>
        </Router>
      </Fragment>
    );
  }
}

export default App;
