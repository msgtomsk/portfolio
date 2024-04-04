// import SectionFooter from "../section-footer/SectionFooter";
import Header from "../header/Header";
import SectionFooter from "../section-footer/SectionFooter";
import "./AboutMe.less";

const CABABILITIES = [
  "UI/UX Design",
  "Interaction Design",
  "Website Design",
  "Product Design",
  "Brand Idenity",
  "Motion Design",
];

const THINGS_I_LIKE = [
  "Exploring places & food",
  "Traditional painting ( i do digital as well )",
  "Wall painting (I do work as a wall painting artist )  - Here’s the work link",
  "Singing",
  "Doing exercises",
];

const IMAGES = [
  { src: "/portfolio/assets/arya1.png", alt: "" },
  { src: "/portfolio/assets/arya2.png", alt: "" },
  { src: "/portfolio/assets/arya3.png", alt: "" },
  { src: "/portfolio/assets/arya4.png", alt: "" },
];

function AboutMe() {
  return (
    <>
      <Header activeSlide={6} logoOnly></Header>
      <div className="component-container about-me-container">
        <section>
          <div className="about-me-wrapper">
            <div className="about-me-img-grp">
              {IMAGES.map((img: any) => {
                return (
                  <img key={img.src} src={img.src} alt={img.alt || "arya"} />
                );
              })}
            </div>
            <div>
              <div>Hello, My name is</div>
              <h2>ARYA SIVARAJ</h2>
              <p>
                Im a Visual designer currently based in birmingham, United
                Kingdom. My hometown is in the southern part of India, also
                known as God’s on country, Kerala.
              </p>

              <p>
                I was always a quite and shy girl, who was very interested in
                drawing & crafting from a young age itself, after my schooling I
                joined for Bachelors in Animation & Graphic Designing in St.
                Josephs College of Communication. After my college, I was placed
                at the Globally renowned company Infosys as an Experience
                Designer, also promoted as Senior Experience Designer in 2
                years.
              </p>

              <p>
                I’ve always manifested to do my higher education abroad, hence i
                reached United Kingdom to my Masters in UX design, and finally
                i’ve graduated. The transition from kerala to birmingham was
                indeed a journey with a lot of exciting and challenging
                experiences.
              </p>

              <p>
                I love to work on finding gaps and providing solutions, thats
                when we actually think of creative solutions, and bringing the
                solutions to the designs, iterating and reiterating. It feels
                like im alive, when i design.
              </p>

              <p>
                Apart from designing, I enjoy making them interact and give life
                to the elements and designs that i created,
              </p>

              <p className="highlight">
                For me Designing + Interaction = Nirvanna.
              </p>
            </div>
          </div>
        </section>
        <section>
          <div className="about-me-wrapper">
            <div>
              <img src="/portfolio/assets/arya5.png" alt="arya" />
            </div>
            <div className="mt-2">
              <div>Skills and Roles im capable of</div>
              <ul className="capabilities">
                {CABABILITIES.map((capability: string) => {
                  return <li key={capability}>{capability}</li>;
                })}
              </ul>
              <div className="separator"></div>
              <p>Apart from all these, </p>

              <p>
                Im a normal Ambiverted person, I like talking & making new
                friends, Im get hyper and extroverted among the most comfortable
                gang.
              </p>

              <p>Things i Like : </p>
              <ul className="things-i-like">
                {THINGS_I_LIKE.map((val: string) => {
                  return <li key={val}>{val}</li>;
                })}
              </ul>
            </div>
          </div>
        </section>
      </div>
      <footer className="about-me-footer">
        <SectionFooter activeSlide={4} hidePage></SectionFooter>
      </footer>
    </>
  );
}

export default AboutMe;
