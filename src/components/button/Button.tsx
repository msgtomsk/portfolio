import { useEffect } from "react";
import gsap from "gsap";

import "./Button.less";

function Button({
  onClick,
  isGetInTouch,
}: {
  onClick: any;
  isGetInTouch?: boolean;
}) {
  function initAnimation() {
    var mWrap = document.querySelectorAll(".magnetic-wrap");

    function parallaxIt(e: any, wrap: any, movement = 1) {
      var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      var boundingRect = wrap.mArea.getBoundingClientRect();
      var halfDiff = Math.abs(boundingRect.width - boundingRect.height) / 2;
      var relX = e.pageX - boundingRect.left - halfDiff;
      var relY = e.pageY - boundingRect.top;

      gsap.to(wrap.mContent, {
        x: (relX - boundingRect.width / 2) * movement,
        y: (relY - boundingRect.height / 2 - scrollTop) * movement,
        // ease: "power3",
        ease: "power2.out",
        duration: 0.9,
        scale: 1.1
      });
    }

    mWrap.forEach(function (wrap: any) {
      wrap.mContent = wrap.querySelector(".js-magnetic-content");
      wrap.mArea = wrap.querySelector(".js-magnetic-area");

      wrap.mArea.addEventListener("mousemove", function (e: MouseEvent) {
        parallaxIt(e, wrap);
      });

      wrap.mArea.addEventListener("mouseleave", function () {
        gsap.to(wrap.mContent, {
          scale: 1,
          x: 0,
          y: 0,
          // ease: "power3",
          ease: 'elastic.out(1.2, 0.4)',
          duration: 0.9,
        });
      });
    });
  }
  useEffect(() => {
    if (window.innerWidth > 767) {
      initAnimation();
    }
  }, []);

  return (
    <div className="magnetic-wrap">
      <div onClick={onClick} className="js-magnetic-area"></div>
      <div className="js-magnetic-content">
        {isGetInTouch ? (
          <button className="get-in-touch-button">
            <img src="/assets/hand.svg" alt="hand" />
            <p>Lets get in touch</p>
          </button>
        ) : (
          <button type="button" className="button">
            Btn
          </button>
        )}
      </div>
    </div>
  );
}

export default Button;
