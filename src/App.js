import React, { Component, Fragment } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SignIn from "./Components/AuthComponent/Signin";
import Signup from "./Components/AuthComponent/Signup";
import SpotifyNavbar from "./Components/HeaderComponent/SpotifyNavbar";
import Home from "./Components/HomeComponent/Home";
import PageNoteFound from "./Components/pageNotFound/PageNotFound";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import firebase from "./firebase";
class App extends Component {
  state = {
    userInfo: "",
  };
  async componentDidMount() {
    await firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.setState({ userInfo: user });
      } else {
        this.setState({ userInfo: "" });
      }
    });
  }
  render() {
    console.log(this.state.userInfo);
    return (
      <Fragment>
        <Router>
          <header>
            <SpotifyNavbar user={this.state.userInfo} />
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
