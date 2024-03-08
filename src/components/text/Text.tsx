import "./Text.less";

function Text({ text }: { text: string }) {
  return <div className="section-title text-center">{text}</div>;
}

export default Text;
