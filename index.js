// import Typed from "typed.js";
// not going to use this
// // ---------- HEADER ----------
// let headText = ["Web Dev", "Hot Dogs"];

// const options = {
//   strings: [headText[0]],
//   typeSpeed: 100,
//   loop: "true"
// };

// const options1 = {
//   strings: [headText[1]],
//   typeSpeed: 100,
//   loop: "true"
// };
import './src/styles.css';
import linkedin_icon from './images/in-icon.png' ;
import halloween2018 from './images/halloween-2018.png' ;
import js_icon from './images/js-icon.png' ;
import css_icon from './images/css-icon.png' ;
import html_icon from './images/html-icon.png' ;
import ts_icon from './images/tys-icon.png' ;
import sql_icon from './images/sql-icon.png' ;
import xcode_icon from './images/xcode-icon.png' ;
import android_icon from './images/android.png' ;
import chess_icon from './images/chesscomicon.png' ;
import twitter_icon from './images/twittericon.png' ;
import python_icon from './images/py-icon.png' ;
import wordpress_icon from './images/wordpress-icon.png' ;
import octocat_icon from './images/octocat.png' ;
import php_icon from './images/php-icon.png' ;
import angular_icon from './images/angular-icon.png' ;
import ionic_icon from './images/ionic-icon.png' ;
import capacitor_icon from './images/capacitor-icon.png' ;
import bootstrap_icon from './images/bootstrap-icon.png' ;
// import  from './images/.png' ;




const icons = require('./icons.json');

console.log('icons ', icons)
// import * as './assets' ;
// const typedHeader = new Typed(".header-text", options);
// const typedHeader1 = new Typed(".ht1", options1);

// ---------- END HEADER ----------
console.log("GOJIRAA TESTING");
// ---------- SET AVATAR DATA ----------
const uname = "Omar Rosado Ramirez";
const sm_uname = "O. Rosado Ramirez";
const handle = "afrotonder";
const slogan = "Full-time problem solver";
const job1 = "TuChequera.com";
const job2 = "APS Health";

document.getElementById("uname").innerText = uname + "!";
document
  .getElementById("avatar")
  .setAttribute(
    "src",
    "https://pbs.twimg.com/profile_images/1087372828473733120/eJJHI1Su_400x400.jpg"
  );

document.getElementsByClassName("header-text")[0].innerHTML = uname;

document.getElementsByClassName("header-text ht1")[0].innerHTML = slogan;

document.getElementById("meet").innerHTML = ` I'm a software developer with 6+ years of experience
                                              creating apps and sites in a wide variety of stacks. 
                                              I'm currently a software developer @<a href="https://tuchequera.com" target="_blank">${job1}</a> 
                                              and a Business Intelligence Analyst @<a href="https://apshealth.com/" taget="_blank">
                                              ${job2}</a>.`;
// ---------- END SET AVATAR DATA ----------
console.log('');

// ---------- ICON DATA----------
let imgs = [
  // {
  //   name: "ig",
  //   url: "https://www.instagram.com/afrotonder/?hl=es-la",
  //   title: "afrotonders Instagram",
  //   alt: "Instagram Icon",
  //   source: "assets/instagram-icon.png"
  // },
  {
    name: "lin",
    url: "linkedin.com/in/afrotonder/",
    title: "afrotonder@LinkedIn",
    alt: "LinkedIn Icon",
    source: linkedin_icon 
  },
  {
    name: "grm",
    url: "https://angular-g2qjyv.stackblitz.io/",
    title: "TheGripRepo",
    alt: "Rob Zombies Halloween 2018 Pumpkin Icon",
    source:  halloween2018 
  },
  {
    name: "github",
    url: "https://github.com/afrotonder",
    title: "afrotonder@GitHub",
    alt: "Github Octocat Logo",
    source: octocat_icon 
  },
  {
    name: "chess",
    url: "https://www.chess.com/member/afrotonder",
    title: "afrotonder@Chess.com",
    alt: "Chess.com Icon",
    source: chess_icon 
  },
  {
    name: "twt",
    url: "https://twitter.com/afrotonder",
    title: "afrotonder@Twitter",
    alt: "Twitter Icon",
    source: twitter_icon 
  }
];

let tools = [
  { name: "JS (ES6+)", source: js_icon},
  { name: "HTML", source: html_icon},
  { name: "CSS/SCSS", source: css_icon },
  { name: "TypeScript", source: ts_icon },
  { name: "Angular", source: angular_icon },
  { name: "Ionic", source: ionic_icon },
  { name: "iOS", source: xcode_icon },
  { name: "Android", source: android_icon },
  { name: "Capacitor", source: capacitor_icon },
  { name: "Python", source: python_icon },
  { name: "PHP", source: php_icon },
  { name: "Bootstrap", source: bootstrap_icon },
  { name: "SQL", source: sql_icon },
  { name: "WordPress", source: wordpress_icon }
];

// set/ renderfooter
for (let img of imgs) {
  let elem = document.createElement("a");
    console.log('o,g ', img);
  elem.setAttribute("href", img.url);
  elem.setAttribute("target", "_blank");

  elem.innerHTML =
    `<img src=` +
    img.source +
    `  title=` +
    img.title +
    ` alt=` +
    img.alt +
    `/>`;

  document.getElementById("social-icons").appendChild(elem);
}

// set/render tools
for (let tool of tools) {
    console.log('what what')
  let elem = document.createElement("div");

  elem.setAttribute("class", "tool-icons");
  // elem.setAttribute("target", "_blank");

  elem.innerHTML =
    `<img src=` +
    tool.source +
    `  title=` +
    tool.name +
    ` alt=` +
    tool.name +
    `/>`;

  document.getElementById("tools").appendChild(elem);
}

// const rightButton = document.getElementById("scroll-right");

document.getElementById("scroll-right").onclick = function () {
  document.getElementById("tools").scrollLeft += 500;
};

// const leftButton = document.getElementById("scroll-left");

document.getElementById("scroll-left").onclick = function () {
  document.getElementById("tools").scrollLeft += -500;
};
// --------------- set Description --------------- //

// set normal desc

// set mobile desc

// --------------- set Description --------------- //

// --------------- set footer data --------------- //
const footer = "afrotonder © ";
let year = new Date().getFullYear();

document.getElementsByClassName("footer-text")[0].innerHTML =
  footer + year.toString();
// --------------- set footer data --------------- //
