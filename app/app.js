const rootDiv = document.getElementById("root");

fetch("./app/views/home.html")
  .then(function (response) {
    return response.text();
  })
  .then(function (html) {
    rootDiv.innerHTML = html;
    console.log(html);
  })
  .catch(function (err) {
    console.warn("Something went wrong.", err);
  });

fetch("./app/views/about.html")
  .then(function (response) {
    return response.text();
  })
  .then(function (html) {
    rootDiv.innerHTML += html;
    console.log(html);
  })
  .catch(function (err) {
    console.warn("Something went wrong.", err);
  });

fetch("./app/views/resume.html")
  .then(function (response) {
    return response.text();
  })
  .then(function (html) {
    rootDiv.innerHTML += html;
    console.log(html);
  })
  .catch(function (err) {
    console.warn("Something went wrong.", err);
  });

const goTop = () => {
  window.scrollTo(0, 0);
};

window.onbeforeunload = goTop;

const global = document.getElementsByClassName("global")[0];

// basic page interaction
const display = () => {
  const pages = document.querySelectorAll(".display");

  for (let i = 0; i < pages.length; i++) {
    const windowHeight = window.innerHeight;
    const elementTop = pages[i].getBoundingClientRect().top;
    const elementVisible = 100;

    if (elementTop < windowHeight - elementVisible) {
      pages[i].classList.add("active");
    } else {
      pages[i].classList.remove("active");
    }
  }
};

window.addEventListener("scroll", display);

//resume interaction
const showDetails = (index) => {
  const resumeBrief = document.getElementsByClassName("resume-brief");
  const resumeDetails = document.getElementsByClassName("resume-details");
  Array.prototype.forEach.call(resumeBrief, (element, i) => {
    resumeDetails[i].classList.add("hide");
    element.classList.remove("selected");
    if (index === i) {
      resumeDetails[i].classList.remove("hide");
      element.classList.add("selected");
    }
  });
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
    canvas.height = global.offsetHeight;
    canvas.width = global.offsetWidth;

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
