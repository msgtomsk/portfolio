import "./App.css";

import Header from "./components/header/Header";
import Intro from "./components/intro/Intro";
import OtherCapabilities from "./components/other-capabilities/OtherCapabilities";
import Works from "./components/works/Works";
import AboutMe from "./components/about-me/AboutMe";
import GetInTouch from "./components/get-in-touch/GetInTouch";

function App() {
  return (
    <>
      <Header></Header>
      <Intro></Intro>
      <Works></Works>
      <OtherCapabilities></OtherCapabilities>
      <AboutMe></AboutMe>
      <GetInTouch></GetInTouch>
    </>
  );
}

export default App;
