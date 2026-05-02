// Loading
// Load Lottie animation
var animation = bodymovin.loadAnimation({
  container: document.getElementById("bm"),
  renderer: "svg",
  loop: true,
  autoplay: true,
  path: "data.json",
});
let progressFill = 0;
let isLoaded = false;
let time = 0;
let loadingTime = setInterval(() => {
  document.querySelector(".fill").style.width = `${progressFill}%`;
  progressFill++;
  if (progressFill == 95) {
    clearInterval(loadingTime);
  }
}, 50);
window.addEventListener("load", () => {
  console.log("Loading Compleate...");
  isLoaded = true;
});
//Keeping loading screen even if loading compleate to finish the LOGO animation atleast at once
setInterval(() => {
  time += 1;
  console.log(time);
  if (isLoaded && time > 6) {
    clearInterval(loadingTime);
    console.log("Passed 01");
    document.querySelector(".fill").style.width = "100%";
    document.querySelector(".loadingScreen").style.opacity = 0;
    document.querySelector("body").style.overflowY = "scroll";
    document.querySelector("body").style.overflowX = "hidden";
    setTimeout(() => {
      document.querySelector(".loadingScreen").style.display = "none";
    }, 2000);
  }
}, 1000);
// Loading

//Section-1
//Nav-line-animation
$(document).ready(function () {
  $(".ni-1").hover(function () {
    $(".linerunner").stop().animate({ left: "3.5%" });
  });
  $(".ni-2").hover(function () {
    $(".linerunner").stop().animate({ left: "28.5%" });
  });
  $(".ni-3").hover(function () {
    $(".linerunner").stop().animate({ left: "53.5%" });
  });
  $(".ni-4").hover(function () {
    $(".linerunner").stop().animate({ left: "78.5%" });
  });

  $(".ni-1,.ni-2").mouseleave(function () {
    $(".linerunner").stop().animate({ left: "-18%" });
  });
  $(".ni-3,.ni-4").mouseleave(function () {
    $(".linerunner").stop().animate({ left: "99.99%" });
  });
});
//offcanvas
$(document).ready(function () {
  $(".off-canvas-start").click(function () {
    $(".off-canvas").animate({ left: "0px" });
  });
  $(".off-canvas-end").click(function () {
    $(".off-canvas").animate({ left: "-300px" });
  });
});

const roles = ["Computer Science Student", "Aspiring AI Engineer", "UI/UX Designer", "Developer"];
let i = 0;
let ratio = getComputedStyle(document.documentElement).getPropertyValue("--Ratio") || 10;

setInterval(() => {
  // 1. Shrink/Hide current text
  const roleDisplay = document.querySelector(".myRoles");
  roleDisplay.style.width = "0px";

  setTimeout(() => {
    // 2. Change the role and calculate new random color
    i = (i + 1) % roles.length;
    let n = Math.floor(Math.random() * 360) + 5;
    let newColor = `hsl(${n}, 100%, 60%)`;
    let newGlow = `oklch(80% 0.3 ${n})`;

    // 3. Update the Text
    roleDisplay.innerHTML = roles[i];
    roleDisplay.style.width = `${roles[i].length * ratio}px`;
    roleDisplay.style.color = newColor;

    // 4. Update the CSS VARIABLES (This is the missing link!)
    document.documentElement.style.setProperty("--whiteSqareColor", newColor);
    document.documentElement.style.setProperty("--whiteSqareGlow", newGlow);
  }, 1000); // Wait 1s for the "shrink" animation to finish before swapping text
}, 3000);

const popup = document.querySelector(".popup");
const certs = document.querySelectorAll(".certify");
let url = "";

function certOverview(certClass) {
  // Prevent the click from reaching the 'body' listener
  event.stopPropagation();
  popup.style.scale = "1";
  popup.style.opacity = "1";
  popup.style.backgroundImage = `url(${certClass.dataset.imgurl})`;
  console.log(certClass.dataset.imgurl);
  url = certClass.dataset.imgurl;
}

document.querySelector("body").addEventListener("click", () => {
  popup.style.scale = "0";
  popup.style.opacity = "0";
  popup.style.backgroundImage = `url(${url})`;
});

// Section 02 Scroll Animation
let mainTimeline = gsap.timeline({
  scrollTrigger: {
    trigger: ".sec2", // selector or element
    scrub: 1, // or time (in seconds) to catch up
    start: "top",
    end: "+=10000",
    pin: true, // or selector or element to pin
    toggleActions: "play pause resume reset",
  },
});
mainTimeline.to(".qaline-1", { left: "0%" }, "<").to(".qal-1", { top: "0px" }).to(".about-para", { top: "0px", opacity: 1 });
mainTimeline
  .to(".slideCont", { x: "-100vw" })
  .to(".qaline-2", { left: "0%" })
  .to(".qal-2", { top: "0px" })
  .to(".eduCont", { transform: "scale(1)", opacity: 1, stagger: 0.2 });
mainTimeline.to(".slideCont", { x: "-200vw" }).to(".qaline-3", { left: "0%" }).to(".qal-3", { top: "0px" });
const cert = document.querySelectorAll(".certify");
cert.forEach((node) => {
  mainTimeline
    .to(node, {
      flexGrow: "3",
    })
    .to(node, {
      flexGrow: "1",
    });
});
mainTimeline
  .to(".slideCont", { x: "-300vw" })
  .to(".qaline-4", { left: "0%" })
  .to(".qal-4", { top: "0px" })
  .to(".skLabel", { transform: "translateX(0vw)", stagger: 0.1 });

const line = document.querySelectorAll(".upModul");
const softTools = ["photoshop", "access", "illustrator", "exel", "aftereffect", "powebi"];
const techStack = [
  "html",
  "css",
  "bootstrap",
  "js",
  "jquery",
  "python",
  "flask",
  "pandas",
  "numpy",
  "matplotlib",
  "php",
  "mysql",
  "c",
  "csharp",
  "java",
  //wanna add new skill?add class name here
];
mainTimeline.to(line[0], { width: "100%" });
techStack.forEach((item, index) => {
  let Module = document.querySelector(`.${item}`);
  mainTimeline.to(
    Module,
    {
      transform: "translateY(0vh)",
      duration: 1,
    },
    index === 0 ? "<" : "<0.1",
  );
});
mainTimeline.to(line[1], { width: "100%" });
softTools.forEach((item, index) => {
  let Module = document.querySelector(`.${item}`);
  mainTimeline.to(
    Module,
    {
      transform: "translateY(0vh)",
    },
    index === 0 ? "<" : "<0.1",
  );
});
// Section 02 Scroll Animation
// Section 03 Scroll Animation
const projectCard = document.querySelectorAll(".projCard");
projectCard.forEach((node) => {
  gsap.to(node, {
    scrollTrigger: {
      trigger: node, // selector or element
      start: "top bottom",
      end: "bottom top",
      toggleActions: "play pause resume reverse",
    },
    transform: "scale(1)",
    opacity: "1",
    ease: "power3",
  });
});
// Section 03 Scroll Animation
// Section 04 Scroll Animation
gsap.from(".headCont>.headtype-D", {
  scrollTrigger: {
    trigger: ".headCont>.headtype-D", // selector or element
    start: "bottom bottom",
    end: "bottom top",
    toggleActions: "play pause resume reverse",
  },
  transform: " translateY(20vh)",
  stagger: 0.2,
  ease: "power1.Out",
});
const showCases = document.querySelectorAll(".showcase");
showCases.forEach((node) => {
  gsap.from(node, {
    scrollTrigger: {
      trigger: node, // selector or element
      start: "center bottom",
      end: "center top",
      toggleActions: "play pause resume reverse",
    },
    transform: "rotateY(90deg)",
  });
});
// Section 04 Scroll Animation
// Section 05 Scroll Animation
let contactBoxTl = gsap.timeline({
  scrollTrigger: {
    trigger: ".sec5", // selector or element
    start: "top bottom",
    end: "bottom top",
    toggleActions: "play pause resume reverse",
  },
});
contactBoxTl
  .from(".contactBox>.imageLogo", { transform: "scale(0)" })
  .from(".contact-name", { width: "0px" })
  .from(".det:nth-of-type(odd)", { transform: "translateX(-40vw)", stagger: 0.2 })
  .from(".det:nth-of-type(even)", { transform: "translateX(50vw)", stagger: 0.2 }, "<")
  .to(".btn-type-2", { scale: 1, stagger: 0.2 });
// Section 05 Scroll Animation
