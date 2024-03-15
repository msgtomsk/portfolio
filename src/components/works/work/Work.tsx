import "./Work.less";

function Work({ workDetails, onClick }: { workDetails: any; onClick: any }) {
  const { workName, aboutWork, skills, thumbnail } = workDetails;
  return (
    <div className="work-container">
      <div className="work-container--left">
        <img src={thumbnail} alt="thumbnail" />
      </div>
      <div className="work-container--right">
        <div className="work-name">{workName}</div>
        <p className="desc-text">{aboutWork}</p>
        <ul>
          {skills.map((skill: string) => {
            return (
              <li key={workName + skill} className="desc-text">
                {skill}
              </li>
            );
          })}
        </ul>
        <button type="button" onClick={onClick}>
          View project
          <img src="/portfolio/assets/right-arrow-mobile.svg" alt="arrow" />
        </button>
      </div>
    </div>
  );
}

export default Work;
