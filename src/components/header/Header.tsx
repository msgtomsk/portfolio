import { useState } from "react";
import "./Header.less";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const onClick = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <header className="header">
        <div className="logo-container">
          <img src="src/assets/logo.png" alt="logo" />
        </div>
        <div className="right-container">
          <div className="hamburger-icon">
            <img
              onClick={onClick}
              src="src/assets/hamburger-icon.svg"
              alt="hamburger"
            />
          </div>
        </div>
      </header>

      <div className={"side-bar " + (isOpen ? "open" : "")}>
        <div className="text-right">
          <img
            onClick={onClick}
            src="src/assets/link-arrow.svg"
            alt="hamburger"
          />
        </div>
        <ul>
          <li>Item 1</li>
          <li>Item 2</li>
          <li>Item 3</li>
        </ul>
      </div>
    </>
  );
}

export default Header;
