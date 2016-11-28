/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/*!*******************!*\
  !*** ./index.tsx ***!
  \*******************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var React = __webpack_require__(/*! react */ 1);
	var ReactDOM = __webpack_require__(/*! react-dom */ 2);
	__webpack_require__(/*! ./index.html */ 3);
	__webpack_require__(/*! ./main.css */ 4);
	var App_1 = __webpack_require__(/*! ./App */ 8);
	console.log('index.tsx loaded.');
	ReactDOM.render(React.createElement(App_1.App, null), document.getElementById('app'));


/***/ },
/* 1 */
/*!************************!*\
  !*** external "React" ***!
  \************************/
/***/ function(module, exports) {

	module.exports = React;

/***/ },
/* 2 */
/*!***************************!*\
  !*** external "ReactDOM" ***!
  \***************************/
/***/ function(module, exports) {

	module.exports = ReactDOM;

/***/ },
/* 3 */
/*!********************!*\
  !*** ./index.html ***!
  \********************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "index.html";

/***/ },
/* 4 */
/*!******************!*\
  !*** ./main.css ***!
  \******************/
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(/*! !./../~/css-loader!./main.css */ 5);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(/*! ./../~/style-loader/addStyles.js */ 7)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../node_modules/css-loader/index.js!./main.css", function() {
				var newContent = require("!!./../node_modules/css-loader/index.js!./main.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 5 */
/*!**********************************!*\
  !*** ../~/css-loader!./main.css ***!
  \**********************************/
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(/*! ./../~/css-loader/lib/css-base.js */ 6)();
	// imports
	
	
	// module
	exports.push([module.id, "body {\n    background-color: #ffc;\n}\n\nheader {\n    margin-bottom: 20px;\n}\n\nfooter {\n    margin-top: 80px;\n}\n\n.clocks {\n    border: 1px solid pink;\n}\n\n.clock-number {\n    text-align: center;\n}", ""]);
	
	// exports


/***/ },
/* 6 */
/*!***************************************!*\
  !*** ../~/css-loader/lib/css-base.js ***!
  \***************************************/
/***/ function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function() {
		var list = [];
	
		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};
	
		// import a list of modules into the list
		list.i = function(modules, mediaQuery) {
			if(typeof modules === "string")
				modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for(var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if(typeof id === "number")
					alreadyImportedModules[id] = true;
			}
			for(i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if(mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if(mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};


/***/ },
/* 7 */
/*!**************************************!*\
  !*** ../~/style-loader/addStyles.js ***!
  \**************************************/
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0,
		styleElementsInsertedAtTop = [];
	
	module.exports = function(list, options) {
		if(true) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}
	
		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();
	
		// By default, add <style> tags to the bottom of <head>.
		if (typeof options.insertAt === "undefined") options.insertAt = "bottom";
	
		var styles = listToStyles(list);
		addStylesToDom(styles, options);
	
		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}
	
	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}
	
	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}
	
	function insertStyleElement(options, styleElement) {
		var head = getHeadElement();
		var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
		if (options.insertAt === "top") {
			if(!lastStyleElementInsertedAtTop) {
				head.insertBefore(styleElement, head.firstChild);
			} else if(lastStyleElementInsertedAtTop.nextSibling) {
				head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
			} else {
				head.appendChild(styleElement);
			}
			styleElementsInsertedAtTop.push(styleElement);
		} else if (options.insertAt === "bottom") {
			head.appendChild(styleElement);
		} else {
			throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
		}
	}
	
	function removeStyleElement(styleElement) {
		styleElement.parentNode.removeChild(styleElement);
		var idx = styleElementsInsertedAtTop.indexOf(styleElement);
		if(idx >= 0) {
			styleElementsInsertedAtTop.splice(idx, 1);
		}
	}
	
	function createStyleElement(options) {
		var styleElement = document.createElement("style");
		styleElement.type = "text/css";
		insertStyleElement(options, styleElement);
		return styleElement;
	}
	
	function createLinkElement(options) {
		var linkElement = document.createElement("link");
		linkElement.rel = "stylesheet";
		insertStyleElement(options, linkElement);
		return linkElement;
	}
	
	function addStyle(obj, options) {
		var styleElement, update, remove;
	
		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement(options));
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else if(obj.sourceMap &&
			typeof URL === "function" &&
			typeof URL.createObjectURL === "function" &&
			typeof URL.revokeObjectURL === "function" &&
			typeof Blob === "function" &&
			typeof btoa === "function") {
			styleElement = createLinkElement(options);
			update = updateLink.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
				if(styleElement.href)
					URL.revokeObjectURL(styleElement.href);
			};
		} else {
			styleElement = createStyleElement(options);
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
			};
		}
	
		update(obj);
	
		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}
	
	var replaceText = (function () {
		var textStore = [];
	
		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();
	
	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;
	
		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}
	
	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;
	
		if(media) {
			styleElement.setAttribute("media", media)
		}
	
		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}
	
	function updateLink(linkElement, obj) {
		var css = obj.css;
		var sourceMap = obj.sourceMap;
	
		if(sourceMap) {
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}
	
		var blob = new Blob([css], { type: "text/css" });
	
		var oldSrc = linkElement.href;
	
		linkElement.href = URL.createObjectURL(blob);
	
		if(oldSrc)
			URL.revokeObjectURL(oldSrc);
	}


/***/ },
/* 8 */
/*!*****************!*\
  !*** ./App.tsx ***!
  \*****************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var __assign = (this && this.__assign) || Object.assign || function(t) {
	    for (var s, i = 1, n = arguments.length; i < n; i++) {
	        s = arguments[i];
	        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
	            t[p] = s[p];
	    }
	    return t;
	};
	var React = __webpack_require__(/*! react */ 1);
	var PubSub = __webpack_require__(/*! pubsub-js */ 9);
	var PulseGenerator_1 = __webpack_require__(/*! ./PulseGenerator */ 10);
	var ClockStore_1 = __webpack_require__(/*! ./ClockStore */ 11);
	var Clock_1 = __webpack_require__(/*! ./Clock */ 12);
	var App = (function (_super) {
	    __extends(App, _super);
	    function App(props) {
	        _super.call(this, props);
	        this.pulseGenerator = new PulseGenerator_1.PulseGenerator(120);
	        this.state = { now: new Date() };
	    }
	    App.prototype.componentWillMount = function () {
	        var _this = this;
	        PubSub.subscribe('pulse', function (msg, data) {
	            var now = data;
	            _this.setState({ now: now });
	        });
	    };
	    App.prototype.render = function () {
	        var now = this.state.now;
	        var data = new ClockStore_1.ClockStore().getState();
	        var clocks = data.clocks.map(function (p, ix) {
	            return React.createElement(Clock_1.Clock, __assign({key: p.name}, p, {now: now}));
	        });
	        return (React.createElement("div", null, 
	            React.createElement("header", null, 
	                React.createElement("h1", null, "SVG Clock")
	            ), 
	            React.createElement("div", {className: "clocks"}, clocks), 
	            React.createElement("footer", null, "©2016 Companyname")));
	    };
	    return App;
	}(React.Component));
	exports.App = App;


/***/ },
/* 9 */
/*!*************************!*\
  !*** external "PubSub" ***!
  \*************************/
/***/ function(module, exports) {

	module.exports = PubSub;

/***/ },
/* 10 */
/*!****************************!*\
  !*** ./PulseGenerator.tsx ***!
  \****************************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var PubSub = __webpack_require__(/*! pubsub-js */ 9);
	var PulseGenerator = (function () {
	    function PulseGenerator(interval) {
	        this.timer = setInterval(function () {
	            var now = new Date();
	            PubSub.publish('pulse', now);
	        }, interval);
	    }
	    return PulseGenerator;
	}());
	exports.PulseGenerator = PulseGenerator;


/***/ },
/* 11 */
/*!***********************!*\
  !*** ./ClockStore.ts ***!
  \***********************/
/***/ function(module, exports) {

	"use strict";
	var ClockStore = (function () {
	    function ClockStore() {
	        this.clocks = [
	            { name: 'UTC', tz: 0 },
	            { name: 'JPN', tz: 9 },
	            { name: 'HWI', tz: -10 }
	        ];
	    }
	    ClockStore.prototype.getState = function () {
	        return { clocks: this.clocks };
	    };
	    return ClockStore;
	}());
	exports.ClockStore = ClockStore;


/***/ },
/* 12 */
/*!*******************!*\
  !*** ./Clock.tsx ***!
  \*******************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var moment = __webpack_require__(/*! moment */ 13);
	var React = __webpack_require__(/*! react */ 1);
	var ANGLE_OFFSET = (Math.PI / 2);
	var W = 640;
	var H = 640;
	var CX = W / 2;
	var CY = H / 2;
	var Clock = (function (_super) {
	    __extends(Clock, _super);
	    function Clock() {
	        _super.apply(this, arguments);
	    }
	    Clock.prototype.shouldComponentUpdate = function (nextProps, nextState) {
	        return moment(nextProps.now).second() !== moment(this.props.now).second();
	    };
	    Clock.prototype.render = function () {
	        var _a = this.props, _b = _a.name, name = _b === void 0 ? '???' : _b, _c = _a.tz, tz = _c === void 0 ? 0 : _c, _d = _a.now, now = _d === void 0 ? new Date() : _d;
	        var cur = moment(now).utc().add(tz, 'hours');
	        var nowStr = cur.format('YYYY-MM-DD HH:mm:ss');
	        return (React.createElement("div", null, 
	            React.createElement("div", null, 
	                name, 
	                ": ", 
	                nowStr), 
	            React.createElement("svg", {xmlns: "http://www.w3.org/2000/svg", width: "200", height: "200", viewBox: "0 0 640 640"}, 
	                this.renderBorder(), 
	                this.renderNumbers(), 
	                this.renderHands(cur))));
	    };
	    Clock.prototype.renderBorder = function () {
	        return (React.createElement("g", null, 
	            React.createElement("circle", {cx: CX, cy: CY, r: W * 30 / 64, stroke: "#666", strokeWidth: "4", fill: "#fcfcff"})
	        ));
	    };
	    Clock.prototype.renderNumbers = function () {
	        var numbers = [];
	        for (var i = 0; i < 12; i++) {
	            var numberStr = (i + 11) % 12 + 1 + '';
	            var a = (Math.PI * 2 / 12 * i) + ANGLE_OFFSET;
	            var x1 = Math.cos(a) * -290 + CX;
	            var y1 = Math.sin(a) * -290 + CY;
	            var x2 = Math.cos(a) * -270 + CX;
	            var y2 = Math.sin(a) * -270 + CY;
	            var tx = Math.cos(a) * -220 + CX - (numberStr.length * 20);
	            var ty = Math.sin(a) * -220 + CY + 20;
	            var n = React.createElement("g", {key: i, fontSize: "60"}, 
	                React.createElement("line", {x1: x1, y1: y1, x2: x2, y2: y2, strokeWidth: "8", stroke: "#444", fill: "#444"}), 
	                React.createElement("text", {x: tx, y: ty, className: "clock-number"}, numberStr));
	            numbers.push(n);
	        }
	        return numbers;
	    };
	    Clock.prototype.renderHands = function (cur) {
	        var h = cur.hour();
	        var m = cur.minute();
	        var s = cur.second();
	        //Hour hand
	        var ha = (Math.PI * 2 / 12 * h) + (Math.PI * 2 / 60 / 60 * m) + (Math.PI * 2 / 60 / 60 / 60 * s) + ANGLE_OFFSET;
	        var hx = Math.cos(ha) * -180 + CX;
	        var hy = Math.sin(ha) * -180 + CY;
	        //Minute hand
	        var ma = (Math.PI * 2 / 60 * m) + (Math.PI * 2 / 60 / 60 * s) + ANGLE_OFFSET;
	        var mx = Math.cos(ma) * -260 + CX;
	        var my = Math.sin(ma) * -260 + CY;
	        //Second hand
	        var sa = (Math.PI * 2 / 60 * s) + ANGLE_OFFSET;
	        var sx = Math.cos(sa) * -240 + CX;
	        var sy = Math.sin(sa) * -240 + CY;
	        return (React.createElement("g", null, 
	            React.createElement("line", {x1: CX, y1: CY, x2: hx, y2: hy, stroke: "#00C", strokeWidth: "20"}), 
	            React.createElement("line", {x1: CX, y1: CY, x2: mx, y2: my, stroke: "#44F", strokeWidth: "10"}), 
	            React.createElement("line", {x1: CX, y1: CY, x2: sx, y2: sy, stroke: "#E00", strokeWidth: "3"}), 
	            React.createElement("circle", {cx: CX, cy: CY, r: "12", stroke: "#888", strokeWidth: "5", fill: "#000"})));
	    };
	    return Clock;
	}(React.Component));
	exports.Clock = Clock;


/***/ },
/* 13 */
/*!*************************!*\
  !*** external "moment" ***!
  \*************************/
/***/ function(module, exports) {

	module.exports = moment;

/***/ }
/******/ ]);
//# sourceMappingURL=bundle.js.map