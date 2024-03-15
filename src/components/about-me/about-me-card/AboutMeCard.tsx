import "./AboutMeCard.less";

interface AboutMeCardProps {
  imageUrl: string;
  text: string;
}

function AboutMeCard({ imageUrl, text }: AboutMeCardProps) {
  return (
    <div className="about-me-card-container">
      <div className="avatar-container">
        <img src={imageUrl} alt="avatar" />
      </div>
      <div className="about-me">
        {text.split("\n").map((i, key) => {
          return <p key={key}>{i}</p>;
        })}
      </div>
    </div>
  );
}

export default AboutMeCard;
