// // import Typed from "typed.js";
// // not going to use this
// // // ---------- HEADER ----------
// // let headText = ["Web Dev", "Hot Dogs"];

// // const options = {
// //   strings: [headText[0]],
// //   typeSpeed: 100,
// //   loop: "true"
// // };

// // const options1 = {
// //   strings: [headText[1]],
// //   typeSpeed: 100,
// //   loop: "true"
// // };

// // const typedHeader = new Typed(".header-text", options);
// // const typedHeader1 = new Typed(".ht1", options1);

// // ---------- END HEADER ----------
// console.log("GOJIRAA TESTING");
// // ---------- SET AVATAR DATA ----------
// const uname = "Omar Rosado Ramirez";
// const sm_uname = "O. Rosado Ramirez";
// const handle = "afrotonder";
// const slogan = "Full-time problem solver";
// const job1 = "TuChequera.com";
// const job2 = "APS Health";

// document.getElementById("uname").innerText = uname + "!";
// document
//   .getElementById("avatar")
//   .setAttribute(
//     "src",
//     "https://pbs.twimg.com/profile_images/1087372828473733120/eJJHI1Su_400x400.jpg"
//   );

// document.getElementsByClassName("header-text")[0].innerHTML = uname;

// document.getElementsByClassName("header-text ht1")[0].innerHTML = slogan;

// document.getElementById(
//   "meet"
// ).innerHTML = ` I'm a software developer with 6+ years of experience
//                                               creating apps and sites in a wide variety of stacks. 
//                                               I'm currently a software developer @<a href="https://tuchequera.com" target="_blank">${job1}</a> 
//                                               and a Business Intelligence Analyst @<a href="https://apshealth.com/" taget="_blank">
//                                               ${job2}</a>.`;
// // ---------- END SET AVATAR DATA ----------

// // ---------- ICON DATA----------
// let imgs = [
//   // {
//   //   name: "ig",
//   //   url: "https://www.instagram.com/afrotonder/?hl=es-la",
//   //   title: "afrotonders Instagram",
//   //   alt: "Instagram Icon",
//   //   source: "assets/instagram-icon.png"
//   // },
//   {
//     name: "lin",
//     url: "linkedin.com/in/afrotonder/",
//     title: "afrotonder@LinkedIn",
//     alt: "LinkedIn Icon",
//     source: "assets/linkedin-icon.png"
//   },
//   {
//     name: "grm",
//     url: "https://angular-g2qjyv.stackblitz.io/",
//     title: "TheGripRepo",
//     alt: "Rob Zombies Halloween 2018 Pumpkin Icon",
//     source: "assets/halloween2018.png"
//   },
//   {
//     name: "github",
//     url: "https://github.com/afrotonder",
//     title: "afrotonder@GitHub",
//     alt: "Github Octocat Logo",
//     source: "assets/Octocat.png"
//   },
//   {
//     name: "chess",
//     url: "https://www.chess.com/member/afrotonder",
//     title: "afrotonder@Chess.com",
//     alt: "Chess.com Icon",
//     source: "assets/chesscomicon.png"
//   },
//   {
//     name: "twt",
//     url: "https://twitter.com/afrotonder",
//     title: "afrotonder@Twitter",
//     alt: "Twitter Icon",
//     source: "assets/twittericon.png"
//   }
// ];

// let tools = [
//   { name: "JS (ES6+)", source: "assets/js-icon.png" },
//   { name: "HTML", source: "assets/html-icon.png" },
//   { name: "CSS/SCSS", source: "assets/css-icon.png" },
//   { name: "TypeScript", source: "assets/tys-icon.png" },
//   { name: "Angular", source: "assets/angular-icon.png" },
//   { name: "Ionic", source: "assets/ionic-icon.png" },
//   { name: "iOS", source: "assets/xcode-icon.png" },
//   { name: "Android", source: "assets/android.png" },
//   { name: "Capacitor", source: "assets/capacitor-icon.png" },
//   { name: "Python", source: "assets/py-icon.png" },
//   { name: "PHP", source: "assets/php-icon.png" },
//   { name: "Bootstrap", source: "assets/bootstrap-icon.png" },
//   { name: "SQL", source: "assets/sql-icon.png" },
//   { name: "WordPress", source: "assets/wordpress-icon.png" }
// ];

// // set/ renderfooter
// for (let img of imgs) {
//   let elem = document.createElement("a");

//   elem.setAttribute("href", img.url);
//   elem.setAttribute("target", "_blank");

//   elem.innerHTML =
//     `<img src=` +
//     img.source +
//     `  title=` +
//     img.title +
//     ` alt=` +
//     img.alt +
//     `/>`;

//   document.getElementById("social-icons").appendChild(elem);
// }

// // set/render tools
// for (let tool of tools) {
//   let elem = document.createElement("div");

//   elem.setAttribute("class", "tool-icons");
//   // elem.setAttribute("target", "_blank");

//   elem.innerHTML =
//     `<img src=` +
//     tool.source +
//     `  title=` +
//     tool.name +
//     ` alt=` +
//     tool.name +
//     `/>`;

//   document.getElementById("tools").appendChild(elem);
// }

// // const rightButton = document.getElementById("scroll-right");

// document.getElementById("scroll-right").onclick = function () {
//   document.getElementById("tools").scrollLeft += 500;
// };

// // const leftButton = document.getElementById("scroll-left");

// document.getElementById("scroll-left").onclick = function () {
//   document.getElementById("tools").scrollLeft += -500;
// };
// // --------------- set Description --------------- //

// // set normal desc

// // set mobile desc

// // --------------- set Description --------------- //

// // --------------- set footer data --------------- //
// const footer = "afrotonder © ";
// let year = new Date().getFullYear();

// document.getElementsByClassName("footer-text")[0].innerHTML =
//   footer + year.toString();
// // --------------- set footer data --------------- //
