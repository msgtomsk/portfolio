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

// const THINGS_I_LIKE = [
//   "Exploring places & food",
//   "Traditional painting",
//   "Wall painting (I do work as a wall painting artist ) - Here’s the work link",
//   "Singing",
//   "Doing exercises",
// ];

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
                I am a visual designer currently based in Birmingham, United
                Kingdom. My hometown is in the southern part of India, also
                known as "God’s Own Country," Kerala.
              </p>

              <p>
                I was always a quiet and shy girl who was very interested in
                drawing and crafting from a young age. After completing my
                schooling, I pursued a Bachelor's in Animation & Graphic
                Designing at St. Joseph's College of Communication. Following my
                college education, I landed a position at the globally renowned
                company Infosys as an Experience Designer, and within two years,
                I was promoted to Senior Experience Designer.
              </p>

              <p>
                I've always aspired to pursue higher education abroad, which led
                me to the United Kingdom for my Master's in UX Design. Finally,
                I have graduated. The transition from Kerala to Birmingham was
                indeed a journey filled with exciting and challenging
                experiences.
              </p>

              <p>
                I love working on identifying gaps and providing solutions. It
                is during this process that creative solutions emerge, and
                bringing these solutions to life in designs through iteration
                and reiteration makes me feel truly alive.
              </p>

              <p>
                Apart from designing, I enjoy making elements and designs
                interact, giving them life.
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
              <p>Apart from all these,</p>

              <p>
                Im a normal Ambiverted person, I like talking & making new
                friends, Im get hyper and extroverted among the most comfortable
                gang.
              </p>

              <p>Things i Like : </p>
              <ul className="things-i-like">
                {/* {THINGS_I_LIKE.map((val: string) => {
                  return <li key={val}>{val}</li>;
                })} */}
                <li>Exploring places & food</li>
                <li>Traditional painting</li>
                <li>
                  Wall painting (I do work as a wall painting artist ) -{" "}
                  <a
                    className="highlight"
                    target="_blank"
                    href="https://www.instagram.com/hobo_designs_/"
                  >
                    Here’s the work link
                  </a>
                </li>
                <li>Singing</li>
                <li>Doing exercises</li>
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
