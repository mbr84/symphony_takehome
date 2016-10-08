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
	  return (time < 10 ? "0" + time : time)
	};
	
	const timerHTML = (time, unit) => {
	  const html = document.createElement('div');
	  html.innerHTML = `
	  <div class='${unit}'>
	    <div class='time'>${formatTime(time)}</div>
	    <div class='unit'>${unit.toUpperCase()}</div>
	  </div>
	  `;
	  if (unit === "seconds") { html.class = "unit-wrapper seconds"; }
	  return html;
	};
	
	const countdown = () => {
	  const interval = setInterval(function () {
	    const timerWrapper = document.createElement('div');
	    const timer = document.getElementById('timer');
	    const timeLeft = Date.parse('2017-1-1') - Date.parse(new Date);
	
	    if (timeLeft > 0) {
	      const hours = Math.floor(timeLeft / (1000 * 60 * 60));
	      timerWrapper.appendChild(timerHTML(hours, 'hours'));
	      timerWrapper.innerHTML += "<div class='colon'> : </div>";
	
	      const minutes = Math.floor((timeLeft / 1000 / 60) % 60);
	      timerWrapper.appendChild(timerHTML(minutes, 'minutes'));
	      timerWrapper.innerHTML += "<div class='colon'> : </div>";
	
	      const seconds = Math.floor((timeLeft / 1000) % 60);
	      seconds.className = "seconds"
	      timerWrapper.appendChild(timerHTML(seconds, 'seconds'));
	
	      timer.innerHTML = timerWrapper.innerHTML
	    } else {
	      timer.text = "HAPPY NEW YEAR"
	      window.clearInterval(interval)
	    }
	  }, 1000);
	};
	
	module.exports = countdown;


/***/ }
/******/ ]);
//# sourceMappingURL=bundle.js.map