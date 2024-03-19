// import gsap from "gsap";
import { useEffect } from "react";
import $ from "jquery";

import "./OtherCapabilities.less";
import SOFTWARES from "../../data/known-softwares.json";

const CAPABILITIES = [
  "Motion Graphics",
  "2D Animation",
  "Illustrations",
  "Video editing",
];

function OtherCapabilities() {
  function initCanvas() {
    // Thanks to https://codepen.io/wikyware-net/pen/qBRbOYZ

    // Thanks to https://codepen.io/asha23/pen/NWoZVL
    // Thanks to https://codepen.io/MightyPenn/pen/PoQQYOB

    var SCREEN_WIDTH = window.innerWidth;
    var SCREEN_HEIGHT = window.innerHeight;
    var canvas: any = document.getElementById("balls");
    var context = canvas.getContext("2d");
    const isMobile = SCREEN_WIDTH < 769;
    const isLargeDesktop = SCREEN_WIDTH >= 1400;
    const textSize = isMobile ? "12px" : isLargeDesktop ? "18px" : "16px";

    window.addEventListener("resize", windowResizeHandler, false);
    setTimeout(windowResizeHandler, 1);

    function windowResizeHandler() {
      var $canvasDiv = $(".canvas-holder");
      SCREEN_WIDTH = $canvasDiv.innerWidth()!;
      SCREEN_HEIGHT = $canvasDiv.innerHeight()!;

      canvas.width = SCREEN_WIDTH;
      canvas.height = SCREEN_HEIGHT;
    }

    var balls: any = [];
    var NUM_BALLS = CAPABILITIES.length;
    var bounce = isMobile ? -0.8 : -1;

    bounce2();

    function bounce2() {
      createBalls();
      b2_loop();
    }

    function createBalls() {
      balls = [];
      const r = isMobile ? 80 : isLargeDesktop ? 130 : 90;
      for (var i = 0; i < NUM_BALLS; i++) {
        var c = parseInt((Math.random() * 55 + 200) as any);
        if (Math.abs(c - 238) < 5) {
          c = c > 238 ? 243 : 233;
        }
        var ball = {
          radius: r,
          fillColor: c,
          vx: Math.random() * 10 - 5,
          vy: Math.random() * 10 - 5,
          mass: r,
          x: Math.random() * SCREEN_WIDTH,
          y: Math.random() * SCREEN_HEIGHT,
          update: function () {
            this.x += this.vx;
            this.y += this.vy;
            if (this.x + this.radius > SCREEN_WIDTH) {
              this.x = SCREEN_WIDTH - this.radius;
              this.vx *= bounce;
            } else if (this.x - this.radius < 0) {
              this.x = this.radius;
              this.vx *= bounce;
            }
            if (this.y + this.radius > SCREEN_HEIGHT) {
              this.y = SCREEN_HEIGHT - this.radius;
              this.vy *= bounce;
            } else if (this.y - this.radius < 0) {
              this.y = this.radius;
              this.vy *= bounce;
            }
          },
          draw: function (i: number) {
            context.beginPath();
            context.arc(this.x, this.y, this.radius, 0, Math.PI * 2, true);
            context.font = textSize + " Poppins";
            context.textAlign = "center";
            context.fillStyle = "#fff";
            context.fillText(CAPABILITIES[i], this.x, this.y + 5);
            context.strokeStyle = "#fff";
            context.stroke();
          },
        };
        balls.push(ball);
      }
    }

    function b2_loop() {
      context.clearRect(0, 0, canvas.width, canvas.height);
      for (var i = 0; i < NUM_BALLS; i++) {
        balls[i].update();
      }
      for (i = 0; i < NUM_BALLS - 1; i++) {
        var ball1 = balls[i];
        for (var j = i + 1; j < NUM_BALLS; j++) {
          var ball2 = balls[j];
          checkCollision(ball1, ball2);
        }
      }
      for (var i = 0; i < NUM_BALLS; i++) {
        balls[i].draw(i);
      }
      // recursively calling this function
      window.requestAnimationFrame(b2_loop);
    }

    function checkCollision(ball0: any, ball1: any) {
      var dx = ball1.x - ball0.x;
      var dy = ball1.y - ball0.y;
      var dist = Math.sqrt(dx * dx + dy * dy);
      if (dist < ball0.radius + ball1.radius) {
        var angle = Math.atan2(dy, dx);
        var sin = Math.sin(angle);
        var cos = Math.cos(angle);
        var pos0: any = new (Point as any)(0, 0);
        var pos1 = rotate(dx, dy, sin, cos, true);
        var vel0 = rotate(ball0.vx, ball0.vy, sin, cos, true);
        var vel1 = rotate(ball1.vx, ball1.vy, sin, cos, true);
        var vxTotal = vel0.x - vel1.x;
        vel0.x =
          ((ball0.mass - ball1.mass) * vel0.x + 2 * ball1.mass * vel1.x) /
          (ball0.mass + ball1.mass);
        vel1.x = vxTotal + vel0.x;
        var absV = Math.abs(vel0.x) + Math.abs(vel1.x);
        var overlap = ball0.radius + ball1.radius - Math.abs(pos0.x - pos1.x);
        pos0.x += (vel0.x / absV) * overlap;
        pos1.x += (vel1.x / absV) * overlap;
        var pos0F = rotate(pos0.x, pos0.y, sin, cos, false);
        var pos1F = rotate(pos1.x, pos1.y, sin, cos, false);
        ball1.x = ball0.x + pos1F.x;
        ball1.y = ball0.y + pos1F.y;
        ball0.x = ball0.x + pos0F.x;
        ball0.y = ball0.y + pos0F.y;
        var vel0F = rotate(vel0.x, vel0.y, sin, cos, false);
        var vel1F = rotate(vel1.x, vel1.y, sin, cos, false);
        ball0.vx = vel0F.x;
        ball0.vy = vel0F.y;
        ball1.vx = vel1F.x;
        ball1.vy = vel1F.y;
      }
    }

    function Point(this: any, x?: any, y?: any) {
      this.x = x;
      this.y = y;
    }

    function rotate(x: any, y: any, si: any, co: any, rev: any) {
      var result = new (Point as any)();
      if (rev) {
        result.x = x * co + y * si;
        result.y = y * co - x * si;
      } else {
        result.x = x * co - y * si;
        result.y = y * co + x * si;
      }
      return result;
    }
  }
  useEffect(() => {
    // gsap.to(".capability", {
    //   y: 0,
    //   duration: 1.5,
    //   ease: "bounce.out",
    //   scale: 1
    // });

    initCanvas();
  }, []);
  return (
    <div className="component-container other-capabilities-container">
      <div>
        <div className="phone"></div>
        <div className="tablet"></div>
        <div className="small-desktop"></div>
        <div className="large-desktop"></div>
        <section className="canvas-holder">
          <canvas id="balls"></canvas>
        </section>
      </div>
      {/* <ul>
        {CAPABILITIES.map((capability: string) => {
          return (
            <li className="capability" key={capability}>              
              <img src="" alt="" />
            </li>
          );
        })}
      </ul> */}
      <div className="softwares">
        {SOFTWARES.map((software: any) => {
          return (
            <img
              key={software.altText}
              src={software.imgURL}
              alt={software.altText}
            />
          );
        })}
      </div>
    </div>
  );
}

export default OtherCapabilities;
