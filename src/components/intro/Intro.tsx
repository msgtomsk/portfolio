import "./Intro.less";

function Intro() {
  return (
    <div className="component-container fixed-width-container intro-container">
      <img src="src/assets/avatar.png" alt="arya" />
      <div className="text-container">
        <h1>ARYA SIVARAJ</h1>
        <div className="brand-name">Nirvannah</div>
        <div className="about-brand">
          Passionate, <span className="highlight-text">Visual Designer</span>{" "}
          with a strong design sense. Enjoys identifying gaps and creatively
          solving problems with expertise in UI/UX.
        </div>
      </div>
    </div>
  );
}

export default Intro;
