import "./SectionFooter.less";

import Text from "../text/Text";

interface SectionFooterProps {
  text: string;
  links: any;
}

function SectionFooter({ text, links }: SectionFooterProps) {
  return (
    <div className="section-footer">
      <Text text={text}></Text>
      <ul>
        {links.map((link: any) => {
          return (
            <li key={link.linkText}>
              <a href={link.url || "#"}>
                <img src="src/assets/link-arrow.svg" alt="arrow" />
                <span className="section-title">{link.linkText}</span>
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default SectionFooter;
