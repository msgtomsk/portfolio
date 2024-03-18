import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import "./Intro.less";
import Button from "../button/Button";

function Intro() {
  const introRef = useRef(null);
  useLayoutEffect(() => {
    let ctx = gsap.context(() => {}, introRef);
    const tl = gsap.timeline();

    tl.from(".portfolio-img", {
      y: -100,
      opacity: 0,
    })
      .to(".portfolio-img", {
        y: 0,
        ease: "power3.out",
        delay: 0.01,
        duration: 2.5,
        opacity: 1,
      })
      .from(".name-wrapper", {
        y: -100,
        opacity: 0,
      })
      .to(".name-wrapper", {
        y: 0,
        ease: "power3.out",
        delay: 0.05,
        duration: 1.5,
        opacity: 1,
      })
      .from(".about-brand", {
        y: -80,
        opacity: 0,
      })
      .to(".about-brand", {
        y: 0,
        duration: 2,
        ease: "power3.out",
        delay: 0.1,
        opacity: 1,
      })
      .from(".brand-desc", {
        y: 100,
        opacity: 0,
      })
      .to(".brand-desc", {
        y: 0,
        duration: 1,
        delay: 0.1,
        ease: "power3.out",
        opacity: 1,
      });

    return () => ctx.revert();
  }, []);

  const onClickBtn = () => {
    document
      .querySelector(".works-container")
      ?.scrollIntoView({ behavior: "smooth", block: "center" });
  };
  return (
    <div className="component-container intro-container" ref={introRef}>
      <div className="fixed-width-container">
        <img
          className="portfolio-img"
          src="/portfolio/assets/avatar.png"
          alt="arya"
        />
        <div className="text-container">
          <div className="name-wrapper">
            <h1>ARYA SIVARAJ</h1>
            <div className="brand-name">Nirvannah</div>
          </div>
          <div className="about-brand">
            Passionate, <span className="highlight-text">Visual Designer</span>{" "}
            with a strong design sense. Enjoys identifying gaps and creatively
            solving problems with expertise in UI/UX.
          </div>
        </div>
      </div>
      <div className="brand-desc">
        <p>
          I established my professional identity under the brand name
          <span className="highlight-text"> 'Nirvannah.</span>
        </p>
        <div className="btn-container">
          <Button arrowDirection="down" onClick={onClickBtn}></Button>
        </div>
        <div></div>
      </div>
    </div>
  );
}

export default Intro;
