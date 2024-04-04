import "./WhatTheySayAboutMeCard.less";

interface AboutMeCardProps {
  imageUrl: string;
  text: string;
  name: string;
  designation: string;
}

function WhatTheySayAboutMeCard({
  imageUrl,
  name,
  designation,
  text,
}: AboutMeCardProps) {
  return (
    // <div className="about-me-card-container">
    //   <div className="avatar-container">
    //     <img src={imageUrl} alt="avatar" />
    //   </div>
    //   <div className="about-me">
    //     {text.split("\n").map((i, key) => {
    //       return <p key={key}>{i}</p>;
    //     })}
    //   </div>
    // </div>
    <div className="what-they-say-about-me-card-container">
      <div className="what-they-say-about-me-card_title">
        <div className="avatar-container">
          <img src={imageUrl} alt={name} />
        </div>
        <div className="about-them">
          <div className="name">{name}</div>
          <div className="designation">{designation}</div>
        </div>
      </div>
      <div className="what-they-say-about-me-card_body">
        {text.split("\n").map((i, key) => {
          return <p key={key}>{i}</p>;
        })}
      </div>
    </div>
  );
}

export default WhatTheySayAboutMeCard;
