const rootDiv = document.getElementById("root");

let historyIndex = 0;

let ballsMapDiv;
let dateDiv;
let roleDiv;
let companyDiv;
let baseDiv;
let descriptionDiv;
let accomplishmentsDiv;

const history = [
  {
    title: "Frontend UI/UX Developer",
    type: "Remote",
    company: "101 GenAI",
    base: "San Jose, CA",
    date: "October 2023 - Present",
    description:
      "Played a pivotal role in shaping the trajectory of this innovative startup. Focused on revolutionizing healthcare, I spearheaded the design and development of an application enabling users to seamlessly create AI Copilots.",
    details: [
      "Demonstrated proficiency in Vue.js and REST APIs, employing these technologies to build the application architecture from the ground up.",
      "Conducted research to stay abreast of the most recent trends in AI applications, ensuring our product was at the forefront of technological advancements.",
      "Contributed to the enhancement of application features through active involvement in customer meetings, wherein I presented new functionalities.",
      "Successfully orchestrated the development timeline to introduce the new version of the product in January 2024, meeting both internal and market expectations.",
      "Integrated myself into the Product Management realm by engaging in User Experience Research (UXR) interviews and crafting a comprehensive roadmap for our existing product.",
    ],
    accomplishments: [
      "New platform launched in January 2024, in less that 1 month of development.",
      "Build standalone AI bot chat-alike website to be tested by client's customers.",
    ],
  },
  {
    title: "Jeweler and Shopify Manager",
    type: "Self employee",
    company: "Idyllika Store",
    base: "San Jose, CA",
    date: "March 2023 - Present",
    description: "Launched my Shopify store to sell Jewelry I create",
    details: [
      "Spearheade the launch and operations of my own business, focusing on the meticulous crafting and sale of handmade jewelry.",
      "Utilize online platforms such as Shopify and Instagram to establish digital footprint. ",
      "Engage in organizing and participating in physical art fairs, broadening the exposure of my distinctive creations while also providing a platform for fellow local artisans to showcase their work.",
    ],
    accomplishments: [
      "Become a Shopify expert, build up my store and my Jewelry brand.",
      "Provide artisans women a place to sell their products (popups and online).",
    ],
  },
  {
    title: "Fullstack Developer",
    type: "Remote",
    company: "MikMak",
    base: "New York, NY",
    date: "June 2021 - January 2023",
    description: "Worked with Vue.js, REST APIs, Postgres, and Big Query.",
    details: [
      "Implement dashboards with d3.js to help users understand their brands performance in social media campaigns.",
      "Contribute to MikMak’s internal components library. Replace standard components with Vuetify components.",
      "Lead frontend implementation of the Shopper Intelligence feature that displays demographic information associated with the customers’ brands and their campaigns.",
      "Develop a simulator for MikMak’s Benchmarks feature, to help Product Managers to understand how the different restrictions and thresholds impact data displayed to customers and discover improvement opportunities for the user experience.",
      "Unit test every feature being added in order to ensure there is no negative impact to the user experience.",
      "Dispatch and analyze logs on Amplitude and Datadog to understand product performance and user experience.",
    ],
    accomplishments: [
      "Tutor my colleagues in Big Query and SQL.",
      "Be part of DE&I committee to improve company culture.",
    ],
  },
  {
    title: "Frontend Developer",
    type: "In office",
    company: "Lore IO",
    base: "Sunnyvale, CA",
    date: "January 2019 - June 2021",
    description:
      "Only Frontend Engineer. Worked with Ember.js framework and the Semantic-ui library",
    details: [
      "Propose and implement different user experience workflows.",
      "Collect colleagues and customers feedback to improve our product.",
      "Improve frontend application loading performance by 50%.",
    ],
    accomplishments: [
      "Implement and lead code review sessions",
      "Mentor new hires in Ember.js and Semantic-ui.",
    ],
  },
  {
    title: "Marketing Engineer",
    type: "Remote",
    company: "SimpleRoute",
    base: "Santiago, Chile",
    date: "January 2017 - May 2018",
    description:
      "Analyzed market-based keywords to manage their Adwords Campaigns and apply SEO techniques to generate more leads",
    details: [
      "Created Tableau dashboards to keep the company informed about marketing action results.",
      "Increased by 100% demo requests within the first three months and got more than 300 new users on a monthly basis.",
    ],
    accomplishments: [
      "Support chilean startup to get more leads and users.",
      "Get familiar with web development technologies (webflow, html, and css).",
    ],
  },
  {
    title: "Marketing Project Manager",
    type: "In office",
    company: "Movistar",
    base: "Santiago, Chile",
    date: "July 2015 - September 2016",
    description:
      "Led five partner integration projects as a stakeholder for technical teams from Movistar and partner companies. Mentored the team in database skills and tools to extract useful information about their projects and products.",
    details: [
      "Managed Push Notification Advertisement Campaigns, increasing related revenue by 500%.",
    ],
    accomplishments: ["Mentor my colleagues in database skills and tools."],
  },
  {
    title: "Marketing Data Analyst",
    type: "In office",
    company: "Movistar",
    base: "Santiago, Chile",
    date: "October 2013 - July 2015",
    description:
      "Part of a multi-disciplinary team of data analysts and software developers identifying the key areas to bootstrap the company’s Big Data department through data analysis of real-time marketing campaigns.",
    details: [
      "Collaborated directly with Project and Product Managers to obtain key data and extract the necessary information to make impact-based decisions about their projects.",
      "Led Roaming campaigns using airport telecommunication antennas to prove the power of Geolocation and Real time campaigns. Roaming sales increased by 5%.",
    ],
    accomplishments: [
      "Prove the power of Geolocation and Real time campaigns via Big Data.",
      "Get company-sponsored Master's scholarship to advance my studies in Marketing Management",
    ],
  },
];

async function addHtml() {
  try {
    const home = await fetch("./app/views/home.html");
    const about = await fetch("./app/views/about.html");
    const resume = await fetch("./app/views/resume.html");
    const homeHtml = await home.text();
    const aboutHtml = await about.text();
    const resumeHtml = await resume.text();
    rootDiv.innerHTML = homeHtml + aboutHtml + resumeHtml;

    ballsMapDiv = document.getElementById("balls-map");

    history.forEach((_, i) => {
      const ball = document.createElement("div");
      ball.classList.add("ball");
      ball.addEventListener("click", () => {
        goTo(i);
      });
      ballsMapDiv.appendChild(ball);
    });

    dateDiv = document.getElementById("date");
    roleDiv = document.getElementById("role");
    companyDiv = document.getElementById("company");
    baseDiv = document.getElementById("base");
    descriptionDiv = document.getElementById("description");
    accomplishmentsDiv = document.getElementById("accomplishments");

    showDetails();
  } catch (e) {
    console.log("Loading page error:", e);
  }
}

addHtml();

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

const showDetails = () => {
  document.querySelectorAll(".ball").forEach((b, i) => {
    b.classList.remove("selected");
    if (historyIndex === i) {
      b.classList.add("selected");
    }
  });
  dateDiv.innerHTML = history[historyIndex].date;
  roleDiv.innerHTML = history[historyIndex].title;
  companyDiv.innerHTML = "@" + history[historyIndex].company;
  baseDiv.innerHTML = history[historyIndex].base;
  descriptionDiv.innerHTML = history[historyIndex].description;

  const type = document.createElement("span");
  type.classList.add("small-text");
  type.classList.add("text-white");
  type.innerHTML = "  ." + history[historyIndex].type;
  roleDiv.appendChild(type);

  const list = document.createElement("ul");
  descriptionDiv.appendChild(list);

  history[historyIndex].details.forEach((d) => {
    const item = document.createElement("li");
    item.innerHTML = d;
    list.appendChild(item);
  });

  accomplishmentsDiv.innerHTML = "";

  history[historyIndex].accomplishments.forEach((a) => {
    const accomplishment = document.createElement("div");
    accomplishment.innerHTML = a;
    accomplishmentsDiv.appendChild(accomplishment);
  });
};

const goBack = () => {
  if (historyIndex === 0) {
    historyIndex = history.length - 1;
  } else {
    historyIndex--;
  }
  showDetails();
};

const goNext = () => {
  if (historyIndex === history.length - 1) {
    historyIndex = 0;
  } else {
    historyIndex++;
  }
  showDetails();
};

const goTo = (index) => {
  historyIndex = index;
  showDetails();
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
