import "./AboutMe.less";

import AboutMeCard from "./about-me-card/AboutMeCard";

const ABOUT_US_CARDS = [
  {
    id: "About1",
    imageUrl: "/portfolio/assets/person1.png",
    text: "I am delighted to wholeheartedly recommend Arya for any UI design position. As a colleague at Wongdoody Agency, working together for the client Telenet, Arya has consistently impressed me with her exceptional skills, dedication, and collaborative approach.\n Throughout our time working on Telenet's projects, Arya has been an invaluable member of our UI design team. Her keen eye for aesthetics and user-centric design principles have significantly contributed to the success of our projects. Arya's ability to transform complex ideas into visually stunning and intuitive interfaces has always exceeded expectations.\n Beyond her technical expertise, Arya's positive attitude and open communication have made her an excellent team player.\n Arya's dedication to her craft is truly inspiring. She continuously seeks opportunities to learn and grow in her role, staying updated with the latest UI design trends and tools. Her commitment to delivering high-quality work on time has been instrumental in meeting client expectations and project deadlines.\n I have no doubt that Arya's exceptional talent, collaborative spirit, and unwavering work ethic will make her a valuable asset to any UI design team. I highly recommend her for any UI design position without reservation.",
  },
  {
    id: "About2",
    imageUrl: "/portfolio/assets/person2.png",
    text: "A great ui ux designer with lot of creativity and potential, Arya is brilliant so no hustle communication. I would like to recommend her and thank her here in this platform",
  },
  {
    id: "About3",
    imageUrl: "/portfolio/assets/person3.png",
    text: "I am pleased to write this LinkedIn recommendation for Arya, who has been an invaluable member of my UX/UI design team at Infosys. Throughout our collaboration on several projects, Arya consistently demonstrated exceptional skills in visual design and proved to be a key contributor to our success. \n Arya's ownership of visual design is truly remarkable. What truly sets Arya apart is her enthusiasm and passion for her work. She approaches every project with infectious energy and a positive mindset, inspiring those around her to strive for excellence. Arya's willingness to learn new things is another quality that makes her an outstanding team member. She consistently seeks opportunities to expand her skill set and stay up to date with the latest design trends and tools. \n In summary, Arya is an exceptionally talented UI designer with remarkable skills. Her ownership in visual design, expertise in motion design, enthusiasm, and willingness to learn new things makes her a valuable asset to any organization. Working alongside Arya has been a pleasure, and I have no doubt that she will continue to excel in her future endeavours. I highly recommend Arya for any UX design role and believe she will make a significant impact wherever she goes.",
  },
];

function AboutMe() {
  return (
    <div className="component-container about-me-container">
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
    </div>
  );
}

export default AboutMe;
