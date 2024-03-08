import "./GetInTouch.less";

import SectionFooter from "../section-footer/SectionFooter";
import Text from "../text/Text";
import Button from "../button/Button";

const FOOTER_LINKS = [
  { url: "#", linkText: "LinkedIn" },
  { url: "#", linkText: "Behance" },
  { url: "#", linkText: "twitter" },
  { url: "#", linkText: "Instagram" },
];

function GetInTouch() {
  const onClick = () => {};
  return (
    <div className="component-container get-in-touch-container">
      <Text text="What they say about me"></Text>
      <div className="get-in-touch-inner">
        <div className="get-in-touch-inner-text">
          LOOKING FORWARD TO WORK <span>TOGETHER?</span>
        </div>
        <div className="get-in-touch-button-holder">
          {/* <button className="get-in-touch-button">
            <img src="src/assets/hand.svg" alt="hand" />
            <p>Lets get in touch</p>
          </button> */}
          <Button isGetInTouch={true} onClick={onClick}></Button>
        </div>
      </div>
      <SectionFooter
        text="Know more about me?"
        links={FOOTER_LINKS}
      ></SectionFooter>
    </div>
  );
}

export default GetInTouch;
