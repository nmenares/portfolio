const routes = {
  "/": home,
  "/about": about,
};

const rootDiv = document.getElementById("root");
rootDiv.innerHTML = routes[window.location.pathname] || home;

const onNavigate = (pathname) => {
  closeMenu();
  window.history.pushState({}, pathname, window.location.origin + pathname);
  rootDiv.innerHTML = routes[pathname];
};

window.onpopstate = () => {
  rootDiv.innerHTML = routes[window.location.pathname];
};

// burguer behavior: Click opens/closes menu
const global = document.getElementsByClassName("global")[0];
const burguer = document.getElementsByClassName("burguer")[0];
const close = document.getElementsByClassName("close")[0];
const menu = document.getElementsByClassName("menu")[0];

function openMenu() {
  menu.style.display = "flex";
  rootDiv.classList.add("hide");
  burguer.classList.remove("show");
  burguer.classList.add("hide");
  close.classList.remove("hide");
  close.classList.add("show");
  global.classList.add("pink");
  global.classList.remove("dark");
}

function closeMenu() {
  menu.style.display = "none";
  rootDiv.classList.remove("hide");
  burguer.classList.remove("hide");
  burguer.classList.add("show");
  close.classList.remove("show");
  close.classList.add("hide");
  global.classList.add("dark");
  global.classList.remove("pink");
}

burguer.onclick = (e) => {
  e.preventDefault();
  openMenu();
};

close.onclick = (e) => {
  e.preventDefault();
  closeMenu();
};

// canvas
let dotsArray = [];
const initialPosition = {
  x: window.innerWidth,
  y: window.innerHeight,
};

const draw = () => {
  const canvas = document.getElementById("canvasId");
  if (canvas.getContext) {
    const ctx = canvas.getContext("2d");
    console.log("window", window);
    canvas.height = window.innerHeight;
    canvas.width = window.innerWidth;

    for (let i = 0; i < 100; i++) {
      dotsArray[i] = new Dot(
        initialPosition.x * Math.random(),
        initialPosition.y * Math.random(),
        0.005,
        ctx
      );
    }

    anim();
  }
};

function Dot(x, y, rotateSpeed, ctx) {
  this.x = x;
  this.y = y;
  this.strokeColor = "#E8C4C4";
  this.theta = Math.random() * Math.PI * 2;
  this.rotateSpeed = rotateSpeed;
  this.t = Math.random() * initialPosition.x;

  this.rotate = () => {
    this.theta += this.rotateSpeed;
    this.x = initialPosition.x + Math.cos(this.theta) * this.t;
    this.y = initialPosition.y + Math.sin(this.theta) * this.t;
    ctx.beginPath();
    ctx.arc(this.x, this.y, 0.08, 0, Math.PI * 2, true);
    ctx.fillStyle = this.strokeColor;
    ctx.fill();
  };
}

const anim = () => {
  requestAnimationFrame(anim);

  dotsArray.forEach((dot) => dot.rotate());
};

document.body.onload = (e) => {
  e.preventDefault();
  draw();
};
// const navbar = document.getElementById("navBar");
// const myName = document.getElementById("name");

// const menuList = document.getElementById("menu");
// const content = document.getElementById("content");

// //mobilemenu
// myName.addEventListener("touchstart", openMenu_1, false);
// let counter = 0;

// function openMenu_1(e) {
//   e.preventDefault();
//   myName.addEventListener("touchmove", (e) => e.preventDefault(), false);
//   myName.addEventListener("touchend", openMenu_2, false);
//   const touchObj1 = e.changedTouches[0];
//   const startMenuX = touchObj1.pageX;
//   const startMenuY = touchObj1.pageY;

//   function openMenu_2(ev) {
//     ev.preventDefault();
//     const touchObj2 = ev.changedTouches[0];
//     const endMenuX = touchObj2.pageX;
//     const endMenuY = touchObj2.pageY;
//     const distMenuX = Math.abs(startMenuX - endMenuX);
//     const distMenuY = Math.abs(startMenuY - endMenuY);

//     if (distMenuX < 2 && distMenuY < 2) {
//       window.scrollTo(0, 0);
//       closeMenu();
//       counter = 0;
//     }
//   }
// }

// canvas

// ctx.beginPath();
// ctx.fillStyle = "#ffffff";
// ctx.rect(0, 0, 800, 500);
// ctx.fill();
// ctx.font = "100px Megrim";

// setTimeout(write, 1);

// function write() {
//   ctx.fillStyle = "#252839";
//   ctx.textBaseline = "top";
//   ctx.fillText("Think Out", 180, 40);
//   ctx.fillText("Develop", 200, 140);
//   ctx.fillText("Test", 290, 240);
//   ctx.fillText("Optimize", 200, 340);
// }

// function makeTransparent(e) {
//   e.preventDefault();
//   let pos_x = e.screenX;
//   let pos_y = e.screenY;
//   ctx.globalCompositeOperation = "destination-out";
//   ctx.fillStyle = "#0066FF";
//   ctx.beginPath();
//   ctx.arc(pos_x - 200, pos_y - 200, 300, 0, 2 * Math.PI, true);
//   ctx.fill();
// }

// // timeline
// const timeline = document.getElementById("timeLine");
// timeline.addEventListener("click", openYear, false);
// let id, contentTimeLine;

// const tl_content = document.getElementById("timeline-content");

// function openYear(e) {
//   e.preventDefault();
//   id = e.target.id;
//   year = document.getElementById(`${id}`);
//   contentTimeLine = document.getElementById(`tl-${id}`);

//   Array.from(timeline.children).forEach((el) => {
//     if (el === year) {
//       el.classList.add("selected");
//     } else {
//       el.classList.remove("selected");
//     }
//   });

//   Array.from(tl_content.children).forEach((el) => {
//     if (el === contentTimeLine) {
//       el.classList.remove("hidden");
//     } else {
//       el.classList.add("hidden");
//     }
//   });
// }

// //swipe timeline on mobile
// tl_content.addEventListener("touchstart", handleStartTouching, false);

// let startX, startY, distX, distY, elapsedTime, startTime;

// const threshold = 50,
//   allowedTime = 200;

// function handleStartTouching(e) {
//   tl_content.addEventListener("touchmove", (e) => e.preventDefault(), false);
//   tl_content.addEventListener("touchend", handleEndTouching, false);
//   e.preventDefault();
//   const touchObj = e.changedTouches[0];
//   distX = 0;
//   startX = touchObj.pageX;
//   startY = touchObj.pageY;
//   startTime = new Date().getTime();
// }

// function handleEndTouching(e) {
//   e.preventDefault();
//   const touchObj = e.changedTouches[0];
//   distX = touchObj.pageX - startX;
//   distY = touchObj.pageY - startY;
//   elapsedTime = new Date().getTime() - startTime;
//   const rightSwipeBol =
//     elapsedTime <= allowedTime && Math.abs(distX) >= threshold;
//   if (rightSwipeBol) {
//     handleSwipe();
//   } else if (Math.abs(distY) > 5) {
//     activeScroll();
//   }
// }

// function handleSwipe() {
//   if (year) {
//     if (distX > 0 && year.id !== "2012") {
//       changeYear(-1);
//     } else if (distX < 0 && year.id !== "2018") {
//       changeYear(1);
//     }
//   }
// }

// function changeYear(x) {
//   year.classList.remove("selected");
//   contentTimeLine.classList.add("hidden");
//   id = (parseInt(year.id, 10) + x).toString();
//   year = document.getElementById(`${id}`);
//   contentTimeLine = document.getElementById(`tl-${id}`);
//   year.classList.add("selected");
//   contentTimeLine = document.getElementById(`tl-${id}`);
//   contentTimeLine.classList.remove("hidden");
// }

// function activeScroll(e) {
//   window.scrollBy({ left: 0, top: -2 * distY, behavior: "smooth" });
// }

// //quote
// document.addEventListener("DOMContentLoaded", getAPI, true);
// const default_content = document.getElementById("quote");
// const quote = document.createElement("p");

// function getAPI(e) {
//   fetch("https://quotes.rest/qod")
//     .then((response) => response.json())
//     .then(
//       (data) =>
//         (default_content.appendChild(
//           quote
//         ).innerHTML = `"${data.contents.quotes[0].quote}" - ${data.contents.quotes[0].author}`)
//     );
// }
