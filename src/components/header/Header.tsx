import { useEffect, useState } from "react";

import Text from "../text/Text";
import "./Header.less";

const SECTION_TITLES = [
  "Test",
  "Selected works",
  "Other Capabilities",
  "What they say about me",
  "Get in Touch",
];

const MENU_ITEMS = ["Projects", "About Me", "Contact"];

function Header({ activeSlide = 1 }: { activeSlide: number }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolling, setIsScrolling] = useState(false);

  const onClick = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    var timeoutRef: any;
    window.addEventListener(
      "scroll",
      function () {
        setIsScrolling(true);
        window.clearTimeout(timeoutRef);
        timeoutRef = setTimeout(function () {
          setIsScrolling(false);
        }, 66);
      },
      false
    );
  }, []);
  return (
    <>
      <header
        className={
          "header " +
          (isScrolling ? "scrolling " : "") +
          (activeSlide != 1 ? "bg" : "")
        }
      >
        <div className="logo-container">
          <img src="/portfolio/assets/logo.png" alt="logo" />
        </div>
        {activeSlide != 1 && (
          <Text text={SECTION_TITLES[activeSlide - 1]}></Text>
        )}
        <div className="right-container">
          <div className="hamburger-icon">
            <img
              onClick={onClick}
              src="/portfolio/assets/hamburger-icon.svg"
              alt="hamburger"
            />
          </div>
        </div>
      </header>

      <div className={"side-bar " + (isOpen ? "open" : "")}>
        <div className="text-right">
          <img
            onClick={onClick}
            src="/portfolio/assets/close.svg"
            alt="close"
          />
        </div>
        <ul>
          {MENU_ITEMS.map((menu) => (
            <li key={menu}>{menu}</li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default Header;
