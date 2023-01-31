const routes = {
  "/": home,
  "/about": about,
  "/resume": resume,
  "/projects": projects,
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
    ctx.arc(this.x, this.y, 0.1, 0, Math.PI * 2, true);
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
