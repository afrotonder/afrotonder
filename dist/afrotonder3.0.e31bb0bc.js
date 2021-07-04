// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"../../.nvm/versions/node/v14.13.0/lib/node_modules/parcel-bundler/src/builtins/bundle-url.js":[function(require,module,exports) {
var bundleURL = null;

function getBundleURLCached() {
  if (!bundleURL) {
    bundleURL = getBundleURL();
  }

  return bundleURL;
}

function getBundleURL() {
  // Attempt to find the URL of the current script and use that as the base URL
  try {
    throw new Error();
  } catch (err) {
    var matches = ('' + err.stack).match(/(https?|file|ftp|chrome-extension|moz-extension):\/\/[^)\n]+/g);

    if (matches) {
      return getBaseURL(matches[0]);
    }
  }

  return '/';
}

function getBaseURL(url) {
  return ('' + url).replace(/^((?:https?|file|ftp|chrome-extension|moz-extension):\/\/.+)?\/[^/]+(?:\?.*)?$/, '$1') + '/';
}

exports.getBundleURL = getBundleURLCached;
exports.getBaseURL = getBaseURL;
},{}],"../../.nvm/versions/node/v14.13.0/lib/node_modules/parcel-bundler/src/builtins/css-loader.js":[function(require,module,exports) {
var bundle = require('./bundle-url');

function updateLink(link) {
  var newLink = link.cloneNode();

  newLink.onload = function () {
    link.remove();
  };

  newLink.href = link.href.split('?')[0] + '?' + Date.now();
  link.parentNode.insertBefore(newLink, link.nextSibling);
}

var cssTimeout = null;

function reloadCSS() {
  if (cssTimeout) {
    return;
  }

  cssTimeout = setTimeout(function () {
    var links = document.querySelectorAll('link[rel="stylesheet"]');

    for (var i = 0; i < links.length; i++) {
      if (bundle.getBaseURL(links[i].href) === bundle.getBundleURL()) {
        updateLink(links[i]);
      }
    }

    cssTimeout = null;
  }, 50);
}

module.exports = reloadCSS;
},{"./bundle-url":"../../.nvm/versions/node/v14.13.0/lib/node_modules/parcel-bundler/src/builtins/bundle-url.js"}],"src/styles.css":[function(require,module,exports) {
var reloadCSS = require('_css_loader');

module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"./../assets/queen.png":[["queen.1e0be124.png","assets/queen.png"],"assets/queen.png"],"./../assets/Rex-Light.ttf":[["Rex-Light.b9d20e51.ttf","assets/Rex-Light.ttf"],"assets/Rex-Light.ttf"],"./../assets/Rex-Bold.ttf":[["Rex-Bold.1b471abc.ttf","assets/Rex-Bold.ttf"],"assets/Rex-Bold.ttf"],"./../assets/Creepster-Regular.ttf":[["Creepster-Regular.40d185fe.ttf","assets/Creepster-Regular.ttf"],"assets/Creepster-Regular.ttf"],"./../assets/Monoton-Regular.ttf":[["Monoton-Regular.35e30865.ttf","assets/Monoton-Regular.ttf"],"assets/Monoton-Regular.ttf"],"_css_loader":"../../.nvm/versions/node/v14.13.0/lib/node_modules/parcel-bundler/src/builtins/css-loader.js"}],"images/in-icon.png":[function(require,module,exports) {
module.exports = "/in-icon.ceee1916.png";
},{}],"images/halloween-2018.png":[function(require,module,exports) {
module.exports = "/halloween-2018.cc2597d1.png";
},{}],"images/js-icon.png":[function(require,module,exports) {
module.exports = "/js-icon.6f14132b.png";
},{}],"images/css-icon.png":[function(require,module,exports) {
module.exports = "/css-icon.8a488b96.png";
},{}],"images/html-icon.png":[function(require,module,exports) {
module.exports = "/html-icon.bb67fb5f.png";
},{}],"images/tys-icon.png":[function(require,module,exports) {
module.exports = "/tys-icon.cef6abd6.png";
},{}],"images/sql-icon.png":[function(require,module,exports) {
module.exports = "/sql-icon.b0b568a8.png";
},{}],"images/xcode-icon.png":[function(require,module,exports) {
module.exports = "/xcode-icon.13ecb15b.png";
},{}],"images/android.png":[function(require,module,exports) {
module.exports = "/android.294d663d.png";
},{}],"images/chesscomicon.png":[function(require,module,exports) {
module.exports = "/chesscomicon.8ccc9d75.png";
},{}],"images/twittericon.png":[function(require,module,exports) {
module.exports = "/twittericon.b9bcd04c.png";
},{}],"images/py-icon.png":[function(require,module,exports) {
module.exports = "/py-icon.165d04fa.png";
},{}],"images/wordpress-icon.png":[function(require,module,exports) {
module.exports = "/wordpress-icon.76b7e9f2.png";
},{}],"images/octocat.png":[function(require,module,exports) {
module.exports = "/octocat.8506edf7.png";
},{}],"images/php-icon.png":[function(require,module,exports) {
module.exports = "/php-icon.309bdb8a.png";
},{}],"images/angular-icon.png":[function(require,module,exports) {
module.exports = "/angular-icon.a776cb66.png";
},{}],"images/ionic-icon.png":[function(require,module,exports) {
module.exports = "/ionic-icon.feb7a244.png";
},{}],"images/capacitor-icon.png":[function(require,module,exports) {
module.exports = "/capacitor-icon.4c979d7c.png";
},{}],"images/bootstrap-icon.png":[function(require,module,exports) {
module.exports = "/bootstrap-icon.0dd6f9ed.png";
},{}],"icons.json":[function(require,module,exports) {
module.exports = [{
  "name": "lin",
  "url": "linkedin.com/in/afrotonder/",
  "title": "afrotonder@LinkedIn",
  "alt": "LinkedIn Icon",
  "source": "images/in-icon.png"
}, {
  "name": "grm",
  "url": "https://angular-g2qjyv.stackblitz.io/",
  "title": "TheGripRepo",
  "alt": "Rob Zombies Halloween 2018 Pumpkin Icon",
  "source": "images/halloween2018.png"
}, {
  "name": "github",
  "url": "https://github.com/afrotonder",
  "title": "afrotonder@GitHub",
  "alt": "Github Octocat Logo",
  "source": "images/Octocat.png"
}, {
  "name": "chess",
  "url": "https://www.chess.com/member/afrotonder",
  "title": "afrotonder@Chess.com",
  "alt": "Chess.com Icon",
  "source": "images/chesscomicon.png"
}, {
  "name": "twt",
  "url": "https://twitter.com/afrotonder",
  "title": "afrotonder@Twitter",
  "alt": "Twitter Icon",
  "source": "images/twittericon.png"
}];
},{}],"index.js":[function(require,module,exports) {
"use strict";

require("./src/styles.css");

var _inIcon = _interopRequireDefault(require("./images/in-icon.png"));

var _halloween = _interopRequireDefault(require("./images/halloween-2018.png"));

var _jsIcon = _interopRequireDefault(require("./images/js-icon.png"));

var _cssIcon = _interopRequireDefault(require("./images/css-icon.png"));

var _htmlIcon = _interopRequireDefault(require("./images/html-icon.png"));

var _tysIcon = _interopRequireDefault(require("./images/tys-icon.png"));

var _sqlIcon = _interopRequireDefault(require("./images/sql-icon.png"));

var _xcodeIcon = _interopRequireDefault(require("./images/xcode-icon.png"));

var _android = _interopRequireDefault(require("./images/android.png"));

var _chesscomicon = _interopRequireDefault(require("./images/chesscomicon.png"));

var _twittericon = _interopRequireDefault(require("./images/twittericon.png"));

var _pyIcon = _interopRequireDefault(require("./images/py-icon.png"));

var _wordpressIcon = _interopRequireDefault(require("./images/wordpress-icon.png"));

var _octocat = _interopRequireDefault(require("./images/octocat.png"));

var _phpIcon = _interopRequireDefault(require("./images/php-icon.png"));

var _angularIcon = _interopRequireDefault(require("./images/angular-icon.png"));

var _ionicIcon = _interopRequireDefault(require("./images/ionic-icon.png"));

var _capacitorIcon = _interopRequireDefault(require("./images/capacitor-icon.png"));

var _bootstrapIcon = _interopRequireDefault(require("./images/bootstrap-icon.png"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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
// import  from './images/.png' ;
var icons = require('./icons.json');

console.log('icons ', icons); // import * as './assets' ;
// const typedHeader = new Typed(".header-text", options);
// const typedHeader1 = new Typed(".ht1", options1);
// ---------- END HEADER ----------

console.log("GOJIRAA TESTING"); // ---------- SET AVATAR DATA ----------

var uname = "Omar Rosado Ramirez";
var sm_uname = "O. Rosado Ramirez";
var handle = "afrotonder";
var slogan = "Full-time problem solver";
var job1 = "TuChequera.com";
var job2 = "APS Health";
document.getElementById("uname").innerText = uname + "!";
document.getElementById("avatar").setAttribute("src", "https://pbs.twimg.com/profile_images/1087372828473733120/eJJHI1Su_400x400.jpg");
document.getElementsByClassName("header-text")[0].innerHTML = uname;
document.getElementsByClassName("header-text ht1")[0].innerHTML = slogan;
document.getElementById("meet").innerHTML = " I'm a software developer with 6+ years of experience\n                                              creating apps and sites in a wide variety of stacks. \n                                              I'm currently a software developer @<a href=\"https://tuchequera.com\" target=\"_blank\">".concat(job1, "</a> \n                                              and a Business Intelligence Analyst @<a href=\"https://apshealth.com/\" taget=\"_blank\">\n                                              ").concat(job2, "</a>."); // ---------- END SET AVATAR DATA ----------

console.log(''); // ---------- ICON DATA----------

var imgs = [// {
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
  source: _inIcon.default
}, {
  name: "grm",
  url: "https://angular-g2qjyv.stackblitz.io/",
  title: "TheGripRepo",
  alt: "Rob Zombies Halloween 2018 Pumpkin Icon",
  source: _halloween.default
}, {
  name: "github",
  url: "https://github.com/afrotonder",
  title: "afrotonder@GitHub",
  alt: "Github Octocat Logo",
  source: _octocat.default
}, {
  name: "chess",
  url: "https://www.chess.com/member/afrotonder",
  title: "afrotonder@Chess.com",
  alt: "Chess.com Icon",
  source: _chesscomicon.default
}, {
  name: "twt",
  url: "https://twitter.com/afrotonder",
  title: "afrotonder@Twitter",
  alt: "Twitter Icon",
  source: _twittericon.default
}];
var tools = [{
  name: "JS (ES6+)",
  source: _jsIcon.default
}, {
  name: "HTML",
  source: _htmlIcon.default
}, {
  name: "CSS/SCSS",
  source: _cssIcon.default
}, {
  name: "TypeScript",
  source: _tysIcon.default
}, {
  name: "Angular",
  source: _angularIcon.default
}, {
  name: "Ionic",
  source: _ionicIcon.default
}, {
  name: "iOS",
  source: _xcodeIcon.default
}, {
  name: "Android",
  source: _android.default
}, {
  name: "Capacitor",
  source: _capacitorIcon.default
}, {
  name: "Python",
  source: _pyIcon.default
}, {
  name: "PHP",
  source: _phpIcon.default
}, {
  name: "Bootstrap",
  source: _bootstrapIcon.default
}, {
  name: "SQL",
  source: _sqlIcon.default
}, {
  name: "WordPress",
  source: _wordpressIcon.default
}]; // set/ renderfooter

for (var _i = 0, _imgs = imgs; _i < _imgs.length; _i++) {
  var img = _imgs[_i];
  var elem = document.createElement("a");
  console.log('o,g ', img);
  elem.setAttribute("href", img.url);
  elem.setAttribute("target", "_blank");
  elem.innerHTML = "<img src=" + img.source + "  title=" + img.title + " alt=" + img.alt + "/>";
  document.getElementById("social-icons").appendChild(elem);
} // set/render tools


for (var _i2 = 0, _tools = tools; _i2 < _tools.length; _i2++) {
  var tool = _tools[_i2];
  console.log('what what');

  var _elem = document.createElement("div");

  _elem.setAttribute("class", "tool-icons"); // elem.setAttribute("target", "_blank");


  _elem.innerHTML = "<img src=" + tool.source + "  title=" + tool.name + " alt=" + tool.name + "/>";
  document.getElementById("tools").appendChild(_elem);
} // const rightButton = document.getElementById("scroll-right");


document.getElementById("scroll-right").onclick = function () {
  document.getElementById("tools").scrollLeft += 500;
}; // const leftButton = document.getElementById("scroll-left");


document.getElementById("scroll-left").onclick = function () {
  document.getElementById("tools").scrollLeft += -500;
}; // --------------- set Description --------------- //
// set normal desc
// set mobile desc
// --------------- set Description --------------- //
// --------------- set footer data --------------- //


var footer = "afrotonder © ";
var year = new Date().getFullYear();
document.getElementsByClassName("footer-text")[0].innerHTML = footer + year.toString(); // --------------- set footer data --------------- //
},{"./src/styles.css":"src/styles.css","./images/in-icon.png":"images/in-icon.png","./images/halloween-2018.png":"images/halloween-2018.png","./images/js-icon.png":"images/js-icon.png","./images/css-icon.png":"images/css-icon.png","./images/html-icon.png":"images/html-icon.png","./images/tys-icon.png":"images/tys-icon.png","./images/sql-icon.png":"images/sql-icon.png","./images/xcode-icon.png":"images/xcode-icon.png","./images/android.png":"images/android.png","./images/chesscomicon.png":"images/chesscomicon.png","./images/twittericon.png":"images/twittericon.png","./images/py-icon.png":"images/py-icon.png","./images/wordpress-icon.png":"images/wordpress-icon.png","./images/octocat.png":"images/octocat.png","./images/php-icon.png":"images/php-icon.png","./images/angular-icon.png":"images/angular-icon.png","./images/ionic-icon.png":"images/ionic-icon.png","./images/capacitor-icon.png":"images/capacitor-icon.png","./images/bootstrap-icon.png":"images/bootstrap-icon.png","./icons.json":"icons.json"}],"../../.nvm/versions/node/v14.13.0/lib/node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "57300" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}],"../../.nvm/versions/node/v14.13.0/lib/node_modules/parcel-bundler/src/builtins/bundle-loader.js":[function(require,module,exports) {
var getBundleURL = require('./bundle-url').getBundleURL;

function loadBundlesLazy(bundles) {
  if (!Array.isArray(bundles)) {
    bundles = [bundles];
  }

  var id = bundles[bundles.length - 1];

  try {
    return Promise.resolve(require(id));
  } catch (err) {
    if (err.code === 'MODULE_NOT_FOUND') {
      return new LazyPromise(function (resolve, reject) {
        loadBundles(bundles.slice(0, -1)).then(function () {
          return require(id);
        }).then(resolve, reject);
      });
    }

    throw err;
  }
}

function loadBundles(bundles) {
  return Promise.all(bundles.map(loadBundle));
}

var bundleLoaders = {};

function registerBundleLoader(type, loader) {
  bundleLoaders[type] = loader;
}

module.exports = exports = loadBundlesLazy;
exports.load = loadBundles;
exports.register = registerBundleLoader;
var bundles = {};

function loadBundle(bundle) {
  var id;

  if (Array.isArray(bundle)) {
    id = bundle[1];
    bundle = bundle[0];
  }

  if (bundles[bundle]) {
    return bundles[bundle];
  }

  var type = (bundle.substring(bundle.lastIndexOf('.') + 1, bundle.length) || bundle).toLowerCase();
  var bundleLoader = bundleLoaders[type];

  if (bundleLoader) {
    return bundles[bundle] = bundleLoader(getBundleURL() + bundle).then(function (resolved) {
      if (resolved) {
        module.bundle.register(id, resolved);
      }

      return resolved;
    }).catch(function (e) {
      delete bundles[bundle];
      throw e;
    });
  }
}

function LazyPromise(executor) {
  this.executor = executor;
  this.promise = null;
}

LazyPromise.prototype.then = function (onSuccess, onError) {
  if (this.promise === null) this.promise = new Promise(this.executor);
  return this.promise.then(onSuccess, onError);
};

LazyPromise.prototype.catch = function (onError) {
  if (this.promise === null) this.promise = new Promise(this.executor);
  return this.promise.catch(onError);
};
},{"./bundle-url":"../../.nvm/versions/node/v14.13.0/lib/node_modules/parcel-bundler/src/builtins/bundle-url.js"}],0:[function(require,module,exports) {
var b=require("../../.nvm/versions/node/v14.13.0/lib/node_modules/parcel-bundler/src/builtins/bundle-loader.js");
},{}]},{},["../../.nvm/versions/node/v14.13.0/lib/node_modules/parcel-bundler/src/builtins/hmr-runtime.js",0,"index.js"], null)
//# sourceMappingURL=/afrotonder3.0.e31bb0bc.js.map