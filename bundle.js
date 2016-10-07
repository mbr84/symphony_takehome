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
/***/ function(module, exports, __webpack_require__) {

	const countdown = __webpack_require__(1);
	
	document.addEventListener('DOMContentLoaded', countdown);


/***/ },
/* 1 */
/***/ function(module, exports) {

	const formatTime = (time) => {
	  return time > 9 || time !== 0 ? time : '0' + time;
	};
	
	const timerHTML = (time, unit) => {
	  const html = document.createElement('div');
	  html.innerHTML = `
	  <div class='unit-wrapper'>
	    <div class='time'>${time}</div>
	    <div class='unit'>${unit}</div>
	  </div>
	  `;
	
	  return html
	};
	
	const countdown = () => {
	  const interval = setInterval(function () {
	    const timerWrapper = document.createElement('div');
	    const timer = document.getElementById('timer');
	    const colon = document.createElement('div')
	
	    const time = Date.parse('2017-1-1') - Date.parse(new Date);
	    const hours = formatTime(Math.floor(time / (1000 * 60 * 60)));
	    timerWrapper.appendChild(timerHTML(formatTime(hours), 'hours'));
	    timerWrapper.innerHTML += "<div class='colon'> : </div>";
	
	    const minutes = formatTime(Math.floor((time / 1000 / 60) % 60));
	    timerWrapper.appendChild(timerHTML(formatTime(minutes), 'minutes'));
	    timerWrapper.innerHTML += "<div class='colon'> : </div>";
	
	    const seconds = formatTime(Math.floor((time / 1000) % 60));
	    timerWrapper.appendChild(timerHTML(formatTime(seconds), 'seconds'));
	
	    timer.innerHTML = timerWrapper.innerHTML
	  }, 1000);
	};
	
	module.exports = countdown;


/***/ }
/******/ ]);
//# sourceMappingURL=bundle.js.map