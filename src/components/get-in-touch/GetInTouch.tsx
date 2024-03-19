import SectionFooter from "../section-footer/SectionFooter";
import "./GetInTouch.less";

import Button from "../button/Button";

function GetInTouch() {
  const isMobile = window.innerWidth < 769;
  const onClick = () => {
    window.location.href =
      "mailto:aryasivaraj97@gmail.com?subject=Let's Connect";
  };
  return (
    <div className="component-container get-in-touch-container">
      <div className="get-in-touch-inner">
        <div className="get-in-touch-inner-text">
          LOOKING FORWARD TO WORK <span>TOGETHER?</span>
        </div>
        <div className="get-in-touch-button-holder">
          <Button isGetInTouch={true} onClick={onClick}></Button>
        </div>
        {isMobile && <SectionFooter activeSlide={5}></SectionFooter>}
      </div>
    </div>
  );
}

export default GetInTouch;
