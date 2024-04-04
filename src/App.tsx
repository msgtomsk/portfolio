import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./App.css";

import Header from "./components/header/Header";
import Intro from "./components/intro/Intro";
import OtherCapabilities from "./components/other-capabilities/OtherCapabilities";
import Works from "./components/works/Works";
import WhatTheySayAboutMe from "./components/about-me/WhatTheySayAboutMe";
import GetInTouch from "./components/get-in-touch/GetInTouch";
import SectionFooter from "./components/section-footer/SectionFooter";
gsap.registerPlugin(ScrollTrigger);

function App() {
  const [activeSlide, setActiveSlide] = useState(1);
  const introCompRef = useRef(null);
  const worksCompRef = useRef(null);
  const otherCapabilitiesRef = useRef(null);
  const aboutMeCompRef = useRef(null);
  const getInTouchCompRef = useRef(null);

  const isMobile = window.innerWidth < 769;

  const refArray = [
    introCompRef,
    worksCompRef,
    otherCapabilitiesRef,
    aboutMeCompRef,
    getInTouchCompRef,
  ];

  useEffect(() => {
    refArray.map((ref, index) => {
      ScrollTrigger.create({
        trigger: ref.current,
        start: "top center",
        onEnter: () => {
          setActiveSlide(index + 1);
        },
        onLeaveBack: () => {
          setActiveSlide(index);
        },
      });
    });
  }, []);
  return (
    <>
      <Header activeSlide={activeSlide}></Header>
      <section ref={introCompRef}>
        <Intro></Intro>
      </section>
      <section ref={worksCompRef}>
        <Works></Works>
      </section>
      <section ref={otherCapabilitiesRef}>
        <OtherCapabilities></OtherCapabilities>
      </section>
      <section ref={aboutMeCompRef}>
        <WhatTheySayAboutMe></WhatTheySayAboutMe>
      </section>
      <section ref={getInTouchCompRef}>
        <GetInTouch></GetInTouch>
      </section>
      {!isMobile && activeSlide != 1 && (
        <footer>
          <SectionFooter activeSlide={activeSlide}></SectionFooter>
        </footer>
      )}
    </>
  );
}

export default App;
