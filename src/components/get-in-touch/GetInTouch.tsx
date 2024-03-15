import "./GetInTouch.less";

import Button from "../button/Button";

function GetInTouch() {
  const onClick = () => {};
  return (
    <div className="component-container get-in-touch-container">
      <div className="get-in-touch-inner">
        <div className="get-in-touch-inner-text">
          LOOKING FORWARD TO WORK <span>TOGETHER?</span>
        </div>
        <div className="get-in-touch-button-holder">
          <Button isGetInTouch={true} onClick={onClick}></Button>
        </div>
      </div>
    </div>
  );
}

export default GetInTouch;
