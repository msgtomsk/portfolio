import "./SectionFooter.less";
import FOOTER_LINKS from "../../data/footer-links.json";

import Text from "../text/Text";

interface FooterContent {
  text: string;
  links: any;
}

function SectionFooter({
  activeSlide = 1,
  hidePage = false,
}: {
  activeSlide: number;
  hidePage: boolean;
}) {
  const footerContent: FooterContent = (FOOTER_LINKS as any)[activeSlide];
  const footerText: string = footerContent.text;
  return (
    <div className="section-footer">
      <div className="footer-left">
        <Text text={footerText}></Text>
        <ul>
          {footerContent.links?.map((link: any) => {
            return (
              <li key={link.linkText}>
                <a href={link.url || "#"} target="_blank">
                  <img src="/portfolio/assets/link-arrow.svg" alt="arrow" />
                  <span className="section-title">{link.linkText}</span>
                </a>
              </li>
            );
          })}
        </ul>
      </div>
      {!hidePage && (
        <div className="footer-right">
          <span>0{activeSlide}//05- Scroll</span>
          <img src="/portfolio/assets/arrow-down.svg" alt="down arrow" />
        </div>
      )}
    </div>
  );
}

export default SectionFooter;
