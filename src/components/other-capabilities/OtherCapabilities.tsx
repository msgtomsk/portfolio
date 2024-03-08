// import gsap from "gsap";
import { useEffect } from "react";
import $ from "jquery";

import "./OtherCapabilities.less";

import SectionFooter from "../section-footer/SectionFooter";
import Text from "../text/Text";

const FOOTER_LINKS = [{ url: "#", linkText: "Instagram" }];
const CAPABILITIES = [
  "Motion Graphics",
  "2D Animation",
  "2D Animation 1",
  "2D Animation 2",
  "2D Animation 3",
  "2D Animation 4",
];

function OtherCapabilities() {
  const initCanvas = () => {
    // Thanks to https://codepen.io/asha23/pen/NWoZVL

    //---------------------------------------
    // Set up ball options
    //---------------------------------------

    var ballCount = CAPABILITIES.length, // How many balls
      DAMPING = 0.4, // Damping
      GRAVITY = 0.01, // Gravity strength
      SPEED = 1, // Ball speed
      ballAdditionTime = 100, // How fast are balls added
      topOffset = 800, // Adjust this for initial ball spawn point
      ballDensity = 20, // How dense are the balls
      ball_1_size = 120, // Ball 1 size
      ball_2_size = 150, // Ball 2 size
      stackBall = true, // Stack the balls (or false is overlap)
      textFontSize = "0.65794rem";

    //---------------------------------------
    //---------------------------------------
    //---------------------------------------

    // Canvas sizes for different breakpoints

    function doQueryCheck() {
      if ($(".phone").css("float") === "none") {
        ball_1_size = 120;
        ball_2_size = 120;
      }
      if ($(".tablet").css("float") === "none") {
        ball_1_size = 150;
        ball_2_size = 150;
      }
      if ($(".small-desktop").css("float") === "none") {
        ball_1_size = 250;
        ball_2_size = 250;
      }

      if ($(".large-desktop").css("float") === "none") {
        ball_1_size = 325;
        ball_2_size = 325;
        textFontSize = "1.42831rem";
      }
    }

    //---------------------------------------
    // Canvas globals
    //---------------------------------------

    var canvas: any,
      ctx: any,
      TWO_PI = Math.PI * 2,
      balls: Array<any> = [],
      clientX = 0,
      clientY = 0,
      s: boolean,
      i: number;

    //---------------------------------------
    // do the animation
    //---------------------------------------

    (window as any).requestAnimFrame =
      window.requestAnimationFrame ||
      (window as any).webkitRequestAnimationFrame ||
      (window as any).mozRequestAnimationFrame ||
      (window as any).oRequestAnimationFrame ||
      (window as any).msRequestAnimationFrame ||
      function (callback: TimerHandler) {
        window.setTimeout(callback, ballAdditionTime);
      };

    //---------------------------------------
    // set up the ball
    //---------------------------------------

    var Ball = function (this: any, x: any, y: any, radius: any) {
      this.x = x;
      this.y = y;
      this.px = x;
      this.py = y;
      this.fx = 0;
      this.fy = 0;
      this.radius = radius;

      // 2 Different ball sizes

      if (Math.round(Math.random()) === 0) {
        this.width = ball_1_size;
        this.height = ball_1_size;
        if (stackBall) {
          this.radius = ball_1_size / 2;
        }
      } else {
        this.width = ball_2_size;
        this.height = ball_2_size;
        if (stackBall) {
          this.radius = ball_2_size / 2;
        }
      }
    };

    //---------------------------------------
    // Apply the physics
    //---------------------------------------

    Ball.prototype.apply_force = function (delta: any) {
      delta *= delta;
      this.fy += GRAVITY;
      this.x += this.fx * delta;
      this.y += this.fy * delta;
      this.fx = this.fy = 0;
    };

    //---------------------------------------
    // Newtonian motion algorithm
    //---------------------------------------

    Ball.prototype.velocity = function () {
      var nx = this.x * 2 - this.px;
      var ny = this.y * 2 - this.py;
      this.px = this.x;
      this.py = this.y;
      this.x = nx;
      this.y = ny;
    };

    //---------------------------------------
    // Ball prototype
    //---------------------------------------

    Ball.prototype.draw = function (ctx: any, text: string) {
      // Wireframe ball
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.radius, 0, TWO_PI);
      ctx.font = textFontSize + " Poppins";
      ctx.textAlign = "center";
      ctx.fillStyle = "#fff";
      ctx.fillText(text, this.x, this.y + 5);
      //   ctx.fill();
      ctx.strokeStyle = "#fff";
      ctx.stroke();

      // To add hover state
      if (ctx.isPointInPath(clientX, clientY)) {
      } else {
      }
    };

    //---------------------------------------
    // resolve collisions (ball on ball)
    //---------------------------------------

    var resolve_collisions = function (ip?: any) {
      var i = balls.length;
      while (i--) {
        var ball_1 = balls[i];
        var n = balls.length;
        while (n--) {
          if (n == i) continue;
          var ball_2 = balls[n];
          var diff_x = ball_1.x - ball_2.x;
          var diff_y = ball_1.y - ball_2.y;
          var length = diff_x * diff_x + diff_y * diff_y;
          var dist = Math.sqrt(length);
          var real_dist = dist - (ball_1.radius + ball_2.radius);

          if (real_dist < 0) {
            var vel_x1 = ball_1.x - ball_1.px;
            var vel_y1 = ball_1.y - ball_1.py;
            var vel_x2 = ball_2.x - ball_2.px;
            var vel_y2 = ball_2.y - ball_2.py;
            var depth_x = diff_x * (real_dist / dist);
            var depth_y = diff_y * (real_dist / dist);
            ball_1.x -= depth_x * 0.5;
            ball_1.y -= depth_y * 0.5;
            ball_2.x += depth_x * 0.5;
            ball_2.y += depth_y * 0.5;

            if (ip) {
              var pr1 =
                  (DAMPING * (diff_x * vel_x1 + diff_y * vel_y1)) / length,
                pr2 = (DAMPING * (diff_x * vel_x2 + diff_y * vel_y2)) / length;

              vel_x1 += pr2 * diff_x - pr1 * diff_x;
              vel_x2 += pr1 * diff_x - pr2 * diff_x;
              vel_y1 += pr2 * diff_y - pr1 * diff_y;
              vel_y2 += pr1 * diff_y - pr2 * diff_y;
              ball_1.px = ball_1.x - vel_x1;
              ball_1.py = ball_1.y - vel_y1;
              ball_2.px = ball_2.x - vel_x2;
              ball_2.py = ball_2.y - vel_y2;
            }
          }
        }
      }
    };

    //---------------------------------------
    // Bounce off the walls
    //---------------------------------------

    var check_walls = function () {
      var i = balls.length;
      while (i--) {
        var ball = balls[i];

        if (ball.x < ball.radius) {
          var vel_x = ball.px - ball.x;
          ball.x = ball.radius;
          ball.px = ball.x - vel_x * DAMPING;
        } else if (ball.x + ball.radius > canvas.width) {
          vel_x = ball.px - ball.x;
          ball.x = canvas.width - ball.radius;
          ball.px = ball.x - vel_x * DAMPING;
        }

        // Ball is new. So don't do collision detection until it hits the canvas. (with an offset to stop it snapping)
        if (ball.y > 100) {
          if (ball.y < ball.radius) {
            var vel_y = ball.py - ball.y;
            ball.y = ball.radius;
            ball.py = ball.y - vel_y * DAMPING;
          } else if (ball.y + ball.radius > canvas.height) {
            vel_y = ball.py - ball.y;
            ball.y = canvas.height - ball.radius;
            ball.py = ball.y - vel_y * DAMPING;
          }
        }
      }
    };

    //---------------------------------------
    // Add a ball to the canvas
    //---------------------------------------

    var add_ball = function (x?: any, y?: any, r?: any) {
      (x = x || Math.random() * canvas.width),
        (y = -topOffset),
        (r = r || 30 + Math.random() * ballDensity),
        (s = true),
        (i = balls.length);

      while (i--) {
        var ball = balls[i];
        var diff_x = ball.x - x;
        var diff_y = ball.y - y;
        var dist = Math.sqrt(diff_x * diff_x + diff_y * diff_y);

        if (dist < ball.radius + r) {
          s = false;
          break;
        }
      }
      i = balls.length;

      if (s) {
        balls.push(new (Ball as any)(x, y, r));
      }
    };

    //---------------------------------------
    // iterate balls
    //---------------------------------------

    var update = function () {
      var iter = 1;
      var delta = SPEED / iter;

      while (iter--) {
        var i = balls.length;
        while (i--) {
          balls[i].apply_force(delta);
          balls[i].velocity();
        }

        resolve_collisions();
        check_walls();

        i = balls.length;
        while (i--) {
          balls[i].velocity();
        }

        resolve_collisions();
        check_walls();
      }

      ctx.clearRect(0, 0, canvas.width, canvas.height);
      i = balls.length;
      while (i--) {
        balls[i].draw(ctx, CAPABILITIES[i]);
      }

      (window as any).requestAnimFrame(update);
    };

    //---------------------------------------
    // Set up the canvas object
    //---------------------------------------

    function doBalls() {
      canvas = document.getElementById("balls");
      ctx = canvas.getContext("2d");
      var $canvasDiv = $(".canvas-holder");

      function respondCanvas() {
        canvas.height = $canvasDiv.innerHeight()! - 64;
        canvas.width = $canvasDiv.innerWidth()! - 64;
        ctx.clearRect(0, 0, canvas.width, canvas.height);
      }
      respondCanvas();

      // Android friendly window resize

      var doit: any;
      function resizedw(appwidth: any) {
        if ($(window).width() != appwidth) {
          // Reset everything on screen resize
          //this.location.reload(false);
          respondCanvas();
        }
        past_width = $(window).width();
      }

      var past_width = $(window).width();

      window.onresize = function () {
        clearTimeout(doit);
        doit = setTimeout(function () {
          resizedw(past_width);
        }, 100);
      };

      ballAdd();
    }

    function ballAdd() {
      var count = 1;
      var timer = setInterval(function () {
        addBallTimer();
      }, 100);

      var addBallTimer = function () {
        count++;
        add_ball();

        if (balls.length == ballCount) {
          stopTimer();
        }
      };

      var stopTimer = function () {
        clearInterval(timer);
      };

      update();
    }

    function addHoverEffect() {
      canvas.onmousemove = function (e: MouseEvent) {
        var rect = this.getBoundingClientRect();
        clientX = e.clientX - rect.left;
        clientY = e.clientY - rect.top;
      };
    }
    // Inject the canvas into the dom.

    doQueryCheck();
    doBalls();

    addHoverEffect();
  };
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
      <Text text="Other Capabilities"></Text>
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
              {capability}
            </li>
          );
        })}
      </ul> */}
      <SectionFooter
        text="Checkout some of my interests in"
        links={FOOTER_LINKS}
      ></SectionFooter>
    </div>
  );
}

export default OtherCapabilities;
