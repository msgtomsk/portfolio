import "./AboutMe.less";

import AboutMeCard from "./about-me-card/AboutMeCard";
import SectionFooter from "../section-footer/SectionFooter";
import Text from "../text/Text";

const FOOTER_LINKS = [{ url: "#", linkText: "Behance." }];
const ABOUT_US_CARDS = [
  {
    id: "About1",
    imageUrl: "src/assets/avatar2.png",
    text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium.",
  },
  {
    id: "About2",
    imageUrl: "src/assets/avatar2.png",
    text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium.",
  },
];

function AboutMe() {
  return (
    <div className="component-container about-me-container">
      <Text text="What they say about me"></Text>
      <div className="about-me-card">
        {ABOUT_US_CARDS.map((card: any) => {
          return (
            <AboutMeCard
              key={card.id}
              imageUrl={card.imageUrl}
              text={card.text}
            ></AboutMeCard>
          );
        })}
      </div>
      <SectionFooter
        text="view more works"
        links={FOOTER_LINKS}
      ></SectionFooter>
    </div>
  );
}

export default AboutMe;
