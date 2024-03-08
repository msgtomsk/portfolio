import { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "./Works.less";

import Work from "./work/Work";
import Button from "../button/Button";
import SectionFooter from "../section-footer/SectionFooter";
import Text from "../text/Text";

const FOOTER_LINKS = [{ url: "#", linkText: "Behance." }];
const WORKS = [
  {
    id: "work1",
    workName: "Work_name",
    aboutWork:
      "Passionate, Experience Designer with a strong design sense. Enjoys identifying gaps and creatively solving problems with expertise in UI/UX.",
    skills: ["Skill set 1", "Skill set 2", "Skill set 3"],
  },
  {
    id: "work2",
    workName: "Work_name",
    aboutWork:
      "Passionate, Experience Designer with a strong design sense. Enjoys identifying gaps and creatively solving problems with expertise in UI/UX.",
    skills: ["Skill set 11", "Skill set 22", "Skill set 33"],
  },
  {
    id: "work3",
    workName: "Work_name",
    aboutWork:
      "Passionate, Experience Designer with a strong design sense. Enjoys identifying gaps and creatively solving problems with expertise in UI/UX.",
    skills: ["Skill set 111", "Skill set 222", "Skill set 333"],
  },
];

function Works() {
  const sliderRef: any = useRef(null);
  const settings = {
    dots: true,
    infinite: true,
    arrows: false,
  };

  const onClick = () => {
    if (sliderRef.current != null) {
      sliderRef.current.slickNext();
    }
  };
  return (
    <div className="component-container works-container">
      <Text text="Selected works"></Text>
      <div className="works-inner">
        <Slider ref={sliderRef} {...settings}>
          {WORKS.map((work: any) => {
            return <Work key={work.id} workDetails={work}></Work>;
          })}
        </Slider>

        <div className="button-container">
          <Button onClick={onClick}></Button>
        </div>
      </div>
      <SectionFooter
        text="view more works"
        links={FOOTER_LINKS}
      ></SectionFooter>
    </div>
  );
}

export default Works;
