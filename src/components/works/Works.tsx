import { useRef, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "./Works.less";

import Work from "./work/Work";
import Button from "../button/Button";
import WORKS from "../../data/works.json";

function Works() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const sliderRef: any = useRef(null);
  const settings = {
    dots: true,
    infinite: true,
    arrows: false,
  };

  const onClick = () => {
    console.log("Go to selected work");
  };
  const onClickLeftArrow = () => {
    if (sliderRef.current != null) {
      sliderRef.current.slickPrev();
    }
  };
  const onClickRightArrow = () => {
    if (sliderRef.current != null) {
      sliderRef.current.slickNext();
    }
  };

  return (
    <div className="component-container works-container">
      <div className="works-inner">
        <Slider
          ref={sliderRef}
          {...settings}
          afterChange={(newIndex) => {
            setCurrentIndex(newIndex);
          }}
        >
          {WORKS.map((work: any) => {
            return (
              <Work key={work.id} workDetails={work} onClick={onClick}></Work>
            );
          })}
        </Slider>
        <div className="action-container">
          <div></div>
          <div className="text-center">
            <span>
              0{currentIndex + 1}//0{WORKS.length}- Work
            </span>
          </div>
          <div className="arrows-wrapper">
            <button type="button" onClick={onClickLeftArrow}>
              <img src="/portfolio/assets/chevron-left.svg" alt="left arrow" />
            </button>
            <button type="button" onClick={onClickRightArrow}>
              <img
                src="/portfolio/assets/chevron-right.svg"
                alt="right arrow"
              />
            </button>
          </div>
        </div>
        <div className="button-container">
          <Button onClick={() => onClick()}></Button>
        </div>
      </div>
    </div>
  );
}

export default Works;
