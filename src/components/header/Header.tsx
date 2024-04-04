import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import Text from "../text/Text";
import "./Header.less";

const SECTION_TITLES = [
  "",
  "Selected Projects",
  "Other Capabilities",
  "What they say about me",
  "Get in Touch",
  "About me",
];

const MENU_ITEMS = [
  { text: "Projects", scrollTo: "works-container", externalLink: null },
  { text: "About Me", scrollTo: "", externalLink: "/portfolio/about" },
  { text: "Contact", scrollTo: "get-in-touch-container", externalLink: null },
];

function Header({
  activeSlide = 1,
  logoOnly = false,
}: {
  activeSlide: number;
  logoOnly: boolean;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolling, setIsScrolling] = useState(false);

  const onClick = () => {
    setIsOpen(!isOpen);
  };

  const onClickMenu = (menu: any) => {
    if (menu.externalLink) return;
    document
      .querySelector(`.${menu.scrollTo}`)
      ?.scrollIntoView({ behavior: "smooth", block: "center" });
    setIsOpen(false);
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
          <Link to="/portfolio/">
            <img src="/portfolio/assets/logo.png" alt="logo" />
          </Link>
        </div>
        {activeSlide != 1 && (
          <Text text={SECTION_TITLES[activeSlide - 1]}></Text>
        )}
        {logoOnly ? (
          <div></div>
        ) : (
          <div className="right-container">
            <div className="hamburger-icon">
              <img
                onClick={onClick}
                src="/portfolio/assets/hamburger-icon.svg"
                alt="hamburger"
              />
            </div>
          </div>
        )}
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
          {MENU_ITEMS.map((menu: any) => {
            return (
              <li onClick={() => onClickMenu(menu)} key={menu.text}>
                {menu.externalLink ? (
                  <Link to={menu.externalLink}>{menu.text}</Link>
                ) : (
                  menu.text
                )}
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}

export default Header;
