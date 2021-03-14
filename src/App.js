import React, { Component, Fragment } from "react";
import Signup from "./Components/AuthComponent/Signup";
import Fotter from "./Components/FotterComponent/Fotter";
import SpotifyNavbar from "./Components/HeaderComponent/SpotifyNavbar";
import SpotifySlider from "./Components/SliderComponent/SpotifySlider";
class App extends Component {
  state = {};
  render() {
    return (
      <Fragment>
        <header>
          <SpotifyNavbar />
        </header>
        <main>
          {/* <Signup /> */}
          <SpotifySlider />
        </main>
        <footer>
          <Fotter />
        </footer>
      </Fragment>
    );
  }
}

export default App;
