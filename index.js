// ---------- SET AVATAR DATA ----------
const uname = "Omar Rosado Ramirez";
const sm_uname = "O. Rosado Ramirez";
const handle = "afrotonder";
const slogan = "Full-time problem solver";
const job1 = "TuChequera.com";
const job2 = "APS Health";
const mobileHMU = `Check out my personal code repos, my portfolio and/or my work experiences to see
                   if we can conjure up something together!`

// set mobile HMU message
document.getElementById("mobile-hmu").innerText = mobileHMU

// set user name
document.getElementById("uname").innerText = uname + "!";
document
  .getElementById("avatar")
  .setAttribute(
    "src",
    // "https://lh3.googleusercontent.com/9hiYqr55ErGU1iRyohl_WjQkUXYSVUOI85dSwjyEdkXAUcQEO8YAMguW_RQN6EP3tSJ8ttPejK-u9h2NZzM5ItGcfoStfkmykrdegg=s100"
    // "./images/avatar-work.png"
    "./images/tonder1.jpg"

    );


document.getElementById("meet").innerHTML = `🍕 I'm currently working as a: 
                                              <ul class="jobList">
                                                <li class="job">Full Stack Developer @<a href="https://tuchequera.com" target="_blank">${job1}</a> </li>
                                                <li class="job">Business Intelligence Analyst @<a href="https://apshealth.com/" taget="_blank">${job2}</a> </li>
                                              </ul>`
                                               
                                               ;
// ---------- END SET AVATAR DATA ----------

// ---------- ICON DATA----------
let imgs = [
  {
    name: "lin",
    url: "https://www.linkedin.com/in/afrotonder/",
    title: "afrotonder@LinkedIn",
    alt: "LinkedIn Icon",
    source: "https://brandlogos.net/wp-content/uploads/2016/06/linkedin-logo-512x512.png" 
  },
  // {
  //   name: "grm",
  //   url: "https://angular-g2qjyv.stackblitz.io/",
  //   title: "TheGripRepo",
  //   alt: "Rob Zombies Halloween 2018 Pumpkin Icon",
  //   source:  "https://trickortreatstudios.com/media/catalog/product/cache/1da4909b8e3ea5eea17a9fb4c6e4a516/h/a/halloween2018-enamelpin_1.png" 
  // },
  {
    name: "github",
    url: "https://github.com/afrotonder",
    title: "afrotonder@GitHub",
    alt: "Github Octocat Logo",
    source: "https://github.githubassets.com/images/modules/logos_page/Octocat.png" 
  },
  {
    name: "portfolio",
    url: "https://tonder1.web.app",
    title: "Portfolio",
    alt: "Developer Portfolio",
    source: "./images/2286.png"
    // source: "./images/tonder1.png" 
  },
  // {
  //   name: "chess",
  //   url: "https://www.chess.com/member/afrotonder",
  //   title: "afrotonder@Chess.com",
  //   alt: "Chess.com Icon",
  //   source: "https://images.chesscomfiles.com/uploads/v1/images_users/tiny_mce/SamCopeland/phpmeXx6V.png" 
  // },
  {
    name: "os",
    url: "https://opensea.io/afrotonder",
    title: "afrotonder@OpenSea.io",
    alt: "OpenSea Icon",
    source: "https://opensea.io/static/images/logos/opensea.svg" 
  },
  {
    name: "twt",
    url: "https://twitter.com/afrotonder",
    title: "afrotonder@Twitter",
    alt: "Twitter Icon",
    source: "https://icons-for-free.com/iconfiles/png/512/identity+logo+new+twitter+icon-1320161424699291885.png" 
  }
];

let tools = [
  { id: 'ionic', name: "Ionic", source: "./images/ionic-icon.png" },
  { id: 'angular', name: "Angular", source: "./images/angular-icon.png" },
  { id: 'js', name: "JS(ES6+)", source: "./images/js-icon.png"},
  { id: 'ts', name: "TypeScript", source: "./images/ts-icon.png"},
  { id: 'htmlIcon', name: "HTML", source: "./images/html-icon.png"},
  { id: 'cssIcon', name: "CSS/SCSS", source: "./images/css-icon.png" },
  // { name: "Ionic", source: "./images/ionic.jpg" },
  // { name: "iOS", source: xcode_icon },
  // { name: "Android", source: android_icon },
  // { name: "Capacitor", source: "./images/capacitor-icon.png" },
  { id: 'capacitor', name: "Capacitor", source: "./images/capacitor-icon.png" },
];


// set/render tools
for (let tool of tools) {

  let elem = document.createElement("div");

  elem.setAttribute("class", "tool-icons");
  // elem.setAttribute("target", "_blank");

  elem.innerHTML =
    `<img id=${tool.id} 
          class="toolImg"
          src=${tool.source}  
          title=${tool.name}
          alt=${tool.name}
    />`;

  document.getElementById("tools").appendChild(elem);
}




// set/ renderfooter
for (let img of imgs) {
  let elem = document.createElement("a");

  elem.setAttribute("href", img.url);
  elem.setAttribute("target", "_blank");
  elem.setAttribute("class", "toolIcon");

  elem.innerHTML =
  `<img src=${img.source}  
        title=${img.title}
        alt=${img.alt}
  />`;
 

  document.getElementById("social-icons").appendChild(elem);
}




// --------------- set footer data --------------- //
const footer = "afrotonder © ";
let year = new Date().getFullYear();

document.getElementsByClassName("footer-text")[0].innerHTML =
  footer + year.toString();
// --------------- set footer data --------------- //
