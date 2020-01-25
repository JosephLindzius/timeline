(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app"],{

/***/ "./assets/js/app.js":
/*!**************************!*\
  !*** ./assets/js/app.js ***!
  \**************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _scss_app_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../scss/app.scss */ "./assets/scss/app.scss");
/* harmony import */ var _scss_app_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_scss_app_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_timeline_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/timeline.js */ "./assets/js/components/timeline.js");
/* harmony import */ var bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! bootstrap */ "./node_modules/bootstrap/dist/js/bootstrap.js");
/* harmony import */ var bootstrap__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(bootstrap__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_bottombox__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/_bottombox */ "./assets/js/components/_bottombox.js");
/* harmony import */ var _components_bottombox__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_components_bottombox__WEBPACK_IMPORTED_MODULE_3__);
/*
 * Welcome to your app's main JavaScript file!
 *
 * We recommend including the built version of this JavaScript file
 * (and its CSS file) in your base layout (base.html.twig).
 */
// any CSS you import will output into a single scss file (app.scss in this case)



 // Need jQuery? Install it with "yarn add jquery", then uncomment to import it.
// import $ from 'jquery';

console.log('Hello Webpack Encore! Edit me in assets/js/app.js');

/***/ }),

/***/ "./assets/js/components/_bottombox.js":
/*!********************************************!*\
  !*** ./assets/js/components/_bottombox.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./assets/js/components/timeline.js":
/*!******************************************!*\
  !*** ./assets/js/components/timeline.js ***!
  \******************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.for-each */ "./node_modules/core-js/modules/es.array.for-each.js");
/* harmony import */ var core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_date_to_string__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.date.to-string */ "./node_modules/core-js/modules/es.date.to-string.js");
/* harmony import */ var core_js_modules_es_date_to_string__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_string__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.object.to-string */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_parse_int__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.parse-int */ "./node_modules/core-js/modules/es.parse-int.js");
/* harmony import */ var core_js_modules_es_parse_int__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_parse_int__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string */ "./node_modules/core-js/modules/es.regexp.to-string.js");
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_web_timers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/web.timers */ "./node_modules/core-js/modules/web.timers.js");
/* harmony import */ var core_js_modules_web_timers__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_timers__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! chart.js */ "./node_modules/chart.js/dist/Chart.js");
/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(chart_js__WEBPACK_IMPORTED_MODULE_7__);








var dayCounter = 0;
var checker = false;
var currentDates = [];
var totalMinuteData = {
  "sleep": 0,
  "work": 0,
  "travel": 0,
  "study": 0,
  "eat": 0,
  "hobby": 0,
  "wash": 0,
  "rest": 0
};
var dates = document.querySelectorAll(".dateBox");
var arrows = document.querySelectorAll(".arrows");
var today = document.querySelectorAll(".today");
var eventsButton = document.getElementById('showNextEvents');
var eventAdd = document.getElementById('eventAdd');
var dataMaker = document.getElementById('showChart');
setDate(dayCounter);
today[0].addEventListener('click', function (e) {
  document.getElementById('dataTarget').innerText = "";
  clearDates(currentDates);
  dayCounter = 0;
  checker = false;
  setDate(dayCounter);
});
arrows.forEach(function (element, i) {
  element.addEventListener('click', function (e) {
    clearDates(currentDates);

    switch (i) {
      case 0:
        dayCounter--;
        checker = true;
        setDate(dayCounter);
        showMinutesGraphic();
        break;

      case 1:
        dayCounter++;
        checker = true;
        setDate(dayCounter);
        showMinutesGraphic();
        break;

      default:
        break;
    }

    e.target.style.textShadow = "0 0 20px orange"; // reset the color after a short delay

    setTimeout(function () {
      e.target.style.textShadow = "";
    }, 500);
  }, false);
});
dates.forEach(function (element, i) {
  element.addEventListener('click', function (e) {
    showMinutesGraphic();
  });
});
eventsButton.addEventListener('click', function (e) {
  if (document.getElementById('eventMaker')) {
    document.getElementById('showEvents').innerHTML = "";
  }

  if (document.getElementById('eventAddTarget')) {
    document.getElementById('eventAddTarget').innerHTML = "";
  }

  if (document.getElementById('dataTarget')) {
    document.getElementById('dataTarget').innerHTML = "";
  }

  var template = document.getElementById('eventMaker');
  var clone = template.content.cloneNode(true);
  document.getElementById('showEvents').appendChild(clone);
});
eventAdd.addEventListener('click', function () {
  if (document.getElementById('eventMaker')) {
    document.getElementById('showEvents').innerHTML = "";
  }

  if (document.getElementById('eventAddTarget')) {
    document.getElementById('eventAddTarget').innerHTML = "";
  }

  if (document.getElementById('dataTarget')) {
    document.getElementById('dataTarget').innerHTML = "";
  }

  if (document.getElementById('eventForm')) {
    document.getElementById('eventAddTarget').innerHTML = "";
  }

  var temp = document.getElementById('eventForm');
  var clone = temp.content.cloneNode(true);
  document.getElementById('eventAddTarget').appendChild(clone);
});
dataMaker.addEventListener('click', function () {
  if (document.getElementById('eventMaker')) {
    document.getElementById('showEvents').innerHTML = "";
  }

  if (document.getElementById('eventAddTarget')) {
    document.getElementById('eventAddTarget').innerHTML = "";
  }

  if (document.getElementById('dataTarget')) {
    document.getElementById('dataTarget').innerHTML = "";
  }

  if (document.getElementById('pieChart')) {
    document.getElementById('dateTarget').innerHTML = "";
  }

  var temp = document.getElementById('data');
  var clone = temp.content.cloneNode(true);
  document.getElementById('dataTarget').appendChild(clone);
  var canvas = document.getElementById('pieChart');
  makeChart(canvas, totalMinuteData);
});

function setDate() {
  var temp = [];
  var homemadeDateObject = {
    'date': 0,
    'month': 0,
    'year': 0
  };
  var numberMonth = 0;
  dates.forEach(function (element, index) {
    var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    var date = new Date();
    var year = date.getFullYear();
    date.setDate(date.getDate() + dayCounter);

    switch (index) {
      case 0:
        date.setDate(date.getDate() - 3);
        document.querySelectorAll('.dateNumber')[index].innerText = date.getDate();
        document.querySelectorAll('.dateNumber')[index].setAttribute('data-day', date.getDate().toString());
        document.querySelectorAll('.dateNumber')[index].setAttribute('data-month', date.getMonth().toString());
        document.querySelectorAll('.dateNumber')[index].setAttribute('data-year', date.getFullYear().toString());
        break;

      case 1:
        date.setDate(date.getDate() - 2);
        document.querySelectorAll('.dateNumber')[index].innerText = date.getDate();
        document.querySelectorAll('.dateNumber')[index].setAttribute('data-day', date.getDate().toString());
        document.querySelectorAll('.dateNumber')[index].setAttribute('data-month', date.getMonth().toString());
        document.querySelectorAll('.dateNumber')[index].setAttribute('data-year', date.getFullYear().toString());
        break;

      case 2:
        date.setDate(date.getDate() - 1);
        document.querySelectorAll('.dateNumber')[index].innerText = date.getDate();
        document.querySelectorAll('.dateNumber')[index].setAttribute('data-day', date.getDate().toString());
        document.querySelectorAll('.dateNumber')[index].setAttribute('data-month', date.getMonth().toString());
        document.querySelectorAll('.dateNumber')[index].setAttribute('data-year', date.getFullYear().toString());
        break;

      case 3:
        date.setDate(date.getDate());
        document.querySelectorAll('.dateNumber')[index].innerText = date.getDate();
        document.querySelectorAll('.dateNumber')[index].setAttribute('data-day', date.getDate().toString());
        document.querySelectorAll('.dateNumber')[index].setAttribute('data-month', date.getMonth().toString());
        document.querySelectorAll('.dateNumber')[index].setAttribute('data-year', date.getFullYear().toString());
        document.getElementById('month').innerText = months[date.getMonth()];
        document.getElementById('year').innerText = date.getFullYear().toString();
        break;

      case 4:
        date.setDate(date.getDate() + 1);
        document.querySelectorAll('.dateNumber')[index].innerText = date.getDate();
        document.querySelectorAll('.dateNumber')[index].setAttribute('data-day', date.getDate().toString());
        document.querySelectorAll('.dateNumber')[index].setAttribute('data-month', date.getMonth().toString());
        document.querySelectorAll('.dateNumber')[index].setAttribute('data-year', date.getFullYear().toString());
        break;

      case 5:
        date.setDate(date.getDate() + 2);
        document.querySelectorAll('.dateNumber')[index].innerText = date.getDate();
        document.querySelectorAll('.dateNumber')[index].setAttribute('data-day', date.getDate().toString());
        document.querySelectorAll('.dateNumber')[index].setAttribute('data-month', date.getMonth().toString());
        document.querySelectorAll('.dateNumber')[index].setAttribute('data-year', date.getFullYear().toString());
        break;

      case 6:
        date.setDate(date.getDate() + 3);
        document.querySelectorAll('.dateNumber')[index].innerText = date.getDate();
        document.querySelectorAll('.dateNumber')[index].setAttribute('data-day', date.getDate().toString());
        document.querySelectorAll('.dateNumber')[index].setAttribute('data-month', date.getMonth().toString());
        document.querySelectorAll('.dateNumber')[index].setAttribute('data-year', date.getFullYear().toString());
        break;

      default:
        break;
    }

    currentDates[index] = parseInt(element.innerText);
    temp[index] = homemadeDateObject = {
      'date': parseInt(element.innerText),
      'month': numberMonth,
      'year': year
    };
  });
}

function clearDates(_currentDates) {
  _currentDates = [];
  document.querySelectorAll('.targetGraph').forEach(function (element) {
    element.innerText = "";
  });
}

function setDates(dateNumber) {
  var minuteBoxes = document.querySelectorAll('.minuteBox');
  var currentIndex = 0;
  var minuteCounter = 0;
  minuteBoxes.forEach(function (element, index) {
    if (minuteCounter > 1439) {
      minuteCounter = 0;
      currentIndex++;
    }

    element.id = currentDates[currentIndex] + minuteCounter.toString();
    minuteCounter++;
  });
}

function showMinutesGraphic() {
  document.getElementById('showChart').style.visibility = "visible";
  clearDates(currentDates);
  dates.forEach(function (element) {
    currentDates.push(element.innerText);
    var template = document.querySelector('#expandedDates');
    var clone = template.content.cloneNode(true);
    element.appendChild(clone);
  });
  setDates(currentDates);
  checker = true;
  setBoxes(motherfile);

  if (document.getElementById('pieChart')) {
    makeChart(document.getElementById('pieChart'), totalMinuteData);
  }
}

function setBoxes(motherfile) {
  var currentSelectedDates = document.querySelectorAll('.dateNumber');
  totalMinuteData = {
    "sleep": 0,
    "work": 0,
    "travel": 0,
    "study": 0,
    "eat": 0,
    "hobby": 0,
    "wash": 0,
    "rest": 0
  };
  motherfile.forEach(function (userDateEvents) {
    currentSelectedDates.forEach(function (dateNumbersDisplayed) {
      if (userDateEvents.date === parseInt(dateNumbersDisplayed.getAttribute('data-day')) && userDateEvents.month === parseInt(dateNumbersDisplayed.getAttribute('data-month')) && userDateEvents.year === parseInt(dateNumbersDisplayed.getAttribute('data-year'))) {
        totalMinuteData[userDateEvents.activity] += userDateEvents.totalMinutes;
        var box = userDateEvents.startRelative;

        while (box >= userDateEvents.startRelative && box < userDateEvents.endRelative) {
          var banana = userDateEvents['date'];
          var muffin = box.toString();
          var bananaMuffin = banana + muffin;
          document.getElementById(bananaMuffin).classList.add(userDateEvents.activity);
          box++;
        }
      }
    });
  });
}

function makeChart(canvas, totalMinuteData) {
  document.getElementById('studyTotal').innerText = totalMinuteData['study'] + ' minutes';
  document.getElementById('sleepTotal').innerText = totalMinuteData['sleep'] + ' minutes';
  document.getElementById('washTotal').innerText = totalMinuteData['wash'] + ' minutes';
  document.getElementById('travelTotal').innerText = totalMinuteData['travel'] + ' minutes';
  document.getElementById('hobbyTotal').innerText = totalMinuteData['hobby'] + ' minutes';
  document.getElementById('workTotal').innerText = totalMinuteData['work'] + ' minutes';
  document.getElementById('eatTotal').innerText = totalMinuteData['eat'] + ' minutes';
  document.getElementById('restTotal').innerText = totalMinuteData['rest'] + ' minutes';
  var ctx = canvas.getContext('2d');
  var myChart = new chart_js__WEBPACK_IMPORTED_MODULE_7___default.a(ctx, {
    type: 'pie',
    data: {
      labels: ['Study', 'Sleep', 'Wash', 'Travel', 'Hobby', 'Work', 'Eat', 'Rest'],
      datasets: [{
        label: '7 Day Activity Totals',
        data: [totalMinuteData['study'], totalMinuteData['sleep'], totalMinuteData['wash'], totalMinuteData['travel'], totalMinuteData['hobby'], totalMinuteData['work'], totalMinuteData['eat'], totalMinuteData['rest']],
        backgroundColor: ['hsla(245, 100%, 50%, 1)', 'hsla(0, 100%, 50%, 1)', 'rgba(83, 105, 43, 1)', 'hsla(300, 100%, 50%, 1)', 'hsla(50, 100%, 50%, 1)', 'hsla(180, 100%, 50%, 1)', 'hsla(125, 100%, 50%, 1)', 'rgba(128, 128, 128, 1)'],
        borderColor: ['hsla(245, 100%, 50%, 1)', 'hsla(0, 100%, 50%, 1)', 'rgba(83, 105, 43, 1)', 'hsla(300, 100%, 50%, 1)', 'hsla(50, 100%, 50%, 1)', 'hsla(180, 100%, 50%, 1)', 'hsla(125, 100%, 50%, 1)', 'rgba(128, 128, 128, 1)'],
        borderWidth: 2
      }]
    }
  });
}

/***/ }),

/***/ "./assets/scss/app.scss":
/*!******************************!*\
  !*** ./assets/scss/app.scss ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./node_modules/moment/locale sync recursive ^\\.\\/.*$":
/*!**************************************************!*\
  !*** ./node_modules/moment/locale sync ^\.\/.*$ ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": "./node_modules/moment/locale/af.js",
	"./af.js": "./node_modules/moment/locale/af.js",
	"./ar": "./node_modules/moment/locale/ar.js",
	"./ar-dz": "./node_modules/moment/locale/ar-dz.js",
	"./ar-dz.js": "./node_modules/moment/locale/ar-dz.js",
	"./ar-kw": "./node_modules/moment/locale/ar-kw.js",
	"./ar-kw.js": "./node_modules/moment/locale/ar-kw.js",
	"./ar-ly": "./node_modules/moment/locale/ar-ly.js",
	"./ar-ly.js": "./node_modules/moment/locale/ar-ly.js",
	"./ar-ma": "./node_modules/moment/locale/ar-ma.js",
	"./ar-ma.js": "./node_modules/moment/locale/ar-ma.js",
	"./ar-sa": "./node_modules/moment/locale/ar-sa.js",
	"./ar-sa.js": "./node_modules/moment/locale/ar-sa.js",
	"./ar-tn": "./node_modules/moment/locale/ar-tn.js",
	"./ar-tn.js": "./node_modules/moment/locale/ar-tn.js",
	"./ar.js": "./node_modules/moment/locale/ar.js",
	"./az": "./node_modules/moment/locale/az.js",
	"./az.js": "./node_modules/moment/locale/az.js",
	"./be": "./node_modules/moment/locale/be.js",
	"./be.js": "./node_modules/moment/locale/be.js",
	"./bg": "./node_modules/moment/locale/bg.js",
	"./bg.js": "./node_modules/moment/locale/bg.js",
	"./bm": "./node_modules/moment/locale/bm.js",
	"./bm.js": "./node_modules/moment/locale/bm.js",
	"./bn": "./node_modules/moment/locale/bn.js",
	"./bn.js": "./node_modules/moment/locale/bn.js",
	"./bo": "./node_modules/moment/locale/bo.js",
	"./bo.js": "./node_modules/moment/locale/bo.js",
	"./br": "./node_modules/moment/locale/br.js",
	"./br.js": "./node_modules/moment/locale/br.js",
	"./bs": "./node_modules/moment/locale/bs.js",
	"./bs.js": "./node_modules/moment/locale/bs.js",
	"./ca": "./node_modules/moment/locale/ca.js",
	"./ca.js": "./node_modules/moment/locale/ca.js",
	"./cs": "./node_modules/moment/locale/cs.js",
	"./cs.js": "./node_modules/moment/locale/cs.js",
	"./cv": "./node_modules/moment/locale/cv.js",
	"./cv.js": "./node_modules/moment/locale/cv.js",
	"./cy": "./node_modules/moment/locale/cy.js",
	"./cy.js": "./node_modules/moment/locale/cy.js",
	"./da": "./node_modules/moment/locale/da.js",
	"./da.js": "./node_modules/moment/locale/da.js",
	"./de": "./node_modules/moment/locale/de.js",
	"./de-at": "./node_modules/moment/locale/de-at.js",
	"./de-at.js": "./node_modules/moment/locale/de-at.js",
	"./de-ch": "./node_modules/moment/locale/de-ch.js",
	"./de-ch.js": "./node_modules/moment/locale/de-ch.js",
	"./de.js": "./node_modules/moment/locale/de.js",
	"./dv": "./node_modules/moment/locale/dv.js",
	"./dv.js": "./node_modules/moment/locale/dv.js",
	"./el": "./node_modules/moment/locale/el.js",
	"./el.js": "./node_modules/moment/locale/el.js",
	"./en-SG": "./node_modules/moment/locale/en-SG.js",
	"./en-SG.js": "./node_modules/moment/locale/en-SG.js",
	"./en-au": "./node_modules/moment/locale/en-au.js",
	"./en-au.js": "./node_modules/moment/locale/en-au.js",
	"./en-ca": "./node_modules/moment/locale/en-ca.js",
	"./en-ca.js": "./node_modules/moment/locale/en-ca.js",
	"./en-gb": "./node_modules/moment/locale/en-gb.js",
	"./en-gb.js": "./node_modules/moment/locale/en-gb.js",
	"./en-ie": "./node_modules/moment/locale/en-ie.js",
	"./en-ie.js": "./node_modules/moment/locale/en-ie.js",
	"./en-il": "./node_modules/moment/locale/en-il.js",
	"./en-il.js": "./node_modules/moment/locale/en-il.js",
	"./en-nz": "./node_modules/moment/locale/en-nz.js",
	"./en-nz.js": "./node_modules/moment/locale/en-nz.js",
	"./eo": "./node_modules/moment/locale/eo.js",
	"./eo.js": "./node_modules/moment/locale/eo.js",
	"./es": "./node_modules/moment/locale/es.js",
	"./es-do": "./node_modules/moment/locale/es-do.js",
	"./es-do.js": "./node_modules/moment/locale/es-do.js",
	"./es-us": "./node_modules/moment/locale/es-us.js",
	"./es-us.js": "./node_modules/moment/locale/es-us.js",
	"./es.js": "./node_modules/moment/locale/es.js",
	"./et": "./node_modules/moment/locale/et.js",
	"./et.js": "./node_modules/moment/locale/et.js",
	"./eu": "./node_modules/moment/locale/eu.js",
	"./eu.js": "./node_modules/moment/locale/eu.js",
	"./fa": "./node_modules/moment/locale/fa.js",
	"./fa.js": "./node_modules/moment/locale/fa.js",
	"./fi": "./node_modules/moment/locale/fi.js",
	"./fi.js": "./node_modules/moment/locale/fi.js",
	"./fo": "./node_modules/moment/locale/fo.js",
	"./fo.js": "./node_modules/moment/locale/fo.js",
	"./fr": "./node_modules/moment/locale/fr.js",
	"./fr-ca": "./node_modules/moment/locale/fr-ca.js",
	"./fr-ca.js": "./node_modules/moment/locale/fr-ca.js",
	"./fr-ch": "./node_modules/moment/locale/fr-ch.js",
	"./fr-ch.js": "./node_modules/moment/locale/fr-ch.js",
	"./fr.js": "./node_modules/moment/locale/fr.js",
	"./fy": "./node_modules/moment/locale/fy.js",
	"./fy.js": "./node_modules/moment/locale/fy.js",
	"./ga": "./node_modules/moment/locale/ga.js",
	"./ga.js": "./node_modules/moment/locale/ga.js",
	"./gd": "./node_modules/moment/locale/gd.js",
	"./gd.js": "./node_modules/moment/locale/gd.js",
	"./gl": "./node_modules/moment/locale/gl.js",
	"./gl.js": "./node_modules/moment/locale/gl.js",
	"./gom-latn": "./node_modules/moment/locale/gom-latn.js",
	"./gom-latn.js": "./node_modules/moment/locale/gom-latn.js",
	"./gu": "./node_modules/moment/locale/gu.js",
	"./gu.js": "./node_modules/moment/locale/gu.js",
	"./he": "./node_modules/moment/locale/he.js",
	"./he.js": "./node_modules/moment/locale/he.js",
	"./hi": "./node_modules/moment/locale/hi.js",
	"./hi.js": "./node_modules/moment/locale/hi.js",
	"./hr": "./node_modules/moment/locale/hr.js",
	"./hr.js": "./node_modules/moment/locale/hr.js",
	"./hu": "./node_modules/moment/locale/hu.js",
	"./hu.js": "./node_modules/moment/locale/hu.js",
	"./hy-am": "./node_modules/moment/locale/hy-am.js",
	"./hy-am.js": "./node_modules/moment/locale/hy-am.js",
	"./id": "./node_modules/moment/locale/id.js",
	"./id.js": "./node_modules/moment/locale/id.js",
	"./is": "./node_modules/moment/locale/is.js",
	"./is.js": "./node_modules/moment/locale/is.js",
	"./it": "./node_modules/moment/locale/it.js",
	"./it-ch": "./node_modules/moment/locale/it-ch.js",
	"./it-ch.js": "./node_modules/moment/locale/it-ch.js",
	"./it.js": "./node_modules/moment/locale/it.js",
	"./ja": "./node_modules/moment/locale/ja.js",
	"./ja.js": "./node_modules/moment/locale/ja.js",
	"./jv": "./node_modules/moment/locale/jv.js",
	"./jv.js": "./node_modules/moment/locale/jv.js",
	"./ka": "./node_modules/moment/locale/ka.js",
	"./ka.js": "./node_modules/moment/locale/ka.js",
	"./kk": "./node_modules/moment/locale/kk.js",
	"./kk.js": "./node_modules/moment/locale/kk.js",
	"./km": "./node_modules/moment/locale/km.js",
	"./km.js": "./node_modules/moment/locale/km.js",
	"./kn": "./node_modules/moment/locale/kn.js",
	"./kn.js": "./node_modules/moment/locale/kn.js",
	"./ko": "./node_modules/moment/locale/ko.js",
	"./ko.js": "./node_modules/moment/locale/ko.js",
	"./ku": "./node_modules/moment/locale/ku.js",
	"./ku.js": "./node_modules/moment/locale/ku.js",
	"./ky": "./node_modules/moment/locale/ky.js",
	"./ky.js": "./node_modules/moment/locale/ky.js",
	"./lb": "./node_modules/moment/locale/lb.js",
	"./lb.js": "./node_modules/moment/locale/lb.js",
	"./lo": "./node_modules/moment/locale/lo.js",
	"./lo.js": "./node_modules/moment/locale/lo.js",
	"./lt": "./node_modules/moment/locale/lt.js",
	"./lt.js": "./node_modules/moment/locale/lt.js",
	"./lv": "./node_modules/moment/locale/lv.js",
	"./lv.js": "./node_modules/moment/locale/lv.js",
	"./me": "./node_modules/moment/locale/me.js",
	"./me.js": "./node_modules/moment/locale/me.js",
	"./mi": "./node_modules/moment/locale/mi.js",
	"./mi.js": "./node_modules/moment/locale/mi.js",
	"./mk": "./node_modules/moment/locale/mk.js",
	"./mk.js": "./node_modules/moment/locale/mk.js",
	"./ml": "./node_modules/moment/locale/ml.js",
	"./ml.js": "./node_modules/moment/locale/ml.js",
	"./mn": "./node_modules/moment/locale/mn.js",
	"./mn.js": "./node_modules/moment/locale/mn.js",
	"./mr": "./node_modules/moment/locale/mr.js",
	"./mr.js": "./node_modules/moment/locale/mr.js",
	"./ms": "./node_modules/moment/locale/ms.js",
	"./ms-my": "./node_modules/moment/locale/ms-my.js",
	"./ms-my.js": "./node_modules/moment/locale/ms-my.js",
	"./ms.js": "./node_modules/moment/locale/ms.js",
	"./mt": "./node_modules/moment/locale/mt.js",
	"./mt.js": "./node_modules/moment/locale/mt.js",
	"./my": "./node_modules/moment/locale/my.js",
	"./my.js": "./node_modules/moment/locale/my.js",
	"./nb": "./node_modules/moment/locale/nb.js",
	"./nb.js": "./node_modules/moment/locale/nb.js",
	"./ne": "./node_modules/moment/locale/ne.js",
	"./ne.js": "./node_modules/moment/locale/ne.js",
	"./nl": "./node_modules/moment/locale/nl.js",
	"./nl-be": "./node_modules/moment/locale/nl-be.js",
	"./nl-be.js": "./node_modules/moment/locale/nl-be.js",
	"./nl.js": "./node_modules/moment/locale/nl.js",
	"./nn": "./node_modules/moment/locale/nn.js",
	"./nn.js": "./node_modules/moment/locale/nn.js",
	"./pa-in": "./node_modules/moment/locale/pa-in.js",
	"./pa-in.js": "./node_modules/moment/locale/pa-in.js",
	"./pl": "./node_modules/moment/locale/pl.js",
	"./pl.js": "./node_modules/moment/locale/pl.js",
	"./pt": "./node_modules/moment/locale/pt.js",
	"./pt-br": "./node_modules/moment/locale/pt-br.js",
	"./pt-br.js": "./node_modules/moment/locale/pt-br.js",
	"./pt.js": "./node_modules/moment/locale/pt.js",
	"./ro": "./node_modules/moment/locale/ro.js",
	"./ro.js": "./node_modules/moment/locale/ro.js",
	"./ru": "./node_modules/moment/locale/ru.js",
	"./ru.js": "./node_modules/moment/locale/ru.js",
	"./sd": "./node_modules/moment/locale/sd.js",
	"./sd.js": "./node_modules/moment/locale/sd.js",
	"./se": "./node_modules/moment/locale/se.js",
	"./se.js": "./node_modules/moment/locale/se.js",
	"./si": "./node_modules/moment/locale/si.js",
	"./si.js": "./node_modules/moment/locale/si.js",
	"./sk": "./node_modules/moment/locale/sk.js",
	"./sk.js": "./node_modules/moment/locale/sk.js",
	"./sl": "./node_modules/moment/locale/sl.js",
	"./sl.js": "./node_modules/moment/locale/sl.js",
	"./sq": "./node_modules/moment/locale/sq.js",
	"./sq.js": "./node_modules/moment/locale/sq.js",
	"./sr": "./node_modules/moment/locale/sr.js",
	"./sr-cyrl": "./node_modules/moment/locale/sr-cyrl.js",
	"./sr-cyrl.js": "./node_modules/moment/locale/sr-cyrl.js",
	"./sr.js": "./node_modules/moment/locale/sr.js",
	"./ss": "./node_modules/moment/locale/ss.js",
	"./ss.js": "./node_modules/moment/locale/ss.js",
	"./sv": "./node_modules/moment/locale/sv.js",
	"./sv.js": "./node_modules/moment/locale/sv.js",
	"./sw": "./node_modules/moment/locale/sw.js",
	"./sw.js": "./node_modules/moment/locale/sw.js",
	"./ta": "./node_modules/moment/locale/ta.js",
	"./ta.js": "./node_modules/moment/locale/ta.js",
	"./te": "./node_modules/moment/locale/te.js",
	"./te.js": "./node_modules/moment/locale/te.js",
	"./tet": "./node_modules/moment/locale/tet.js",
	"./tet.js": "./node_modules/moment/locale/tet.js",
	"./tg": "./node_modules/moment/locale/tg.js",
	"./tg.js": "./node_modules/moment/locale/tg.js",
	"./th": "./node_modules/moment/locale/th.js",
	"./th.js": "./node_modules/moment/locale/th.js",
	"./tl-ph": "./node_modules/moment/locale/tl-ph.js",
	"./tl-ph.js": "./node_modules/moment/locale/tl-ph.js",
	"./tlh": "./node_modules/moment/locale/tlh.js",
	"./tlh.js": "./node_modules/moment/locale/tlh.js",
	"./tr": "./node_modules/moment/locale/tr.js",
	"./tr.js": "./node_modules/moment/locale/tr.js",
	"./tzl": "./node_modules/moment/locale/tzl.js",
	"./tzl.js": "./node_modules/moment/locale/tzl.js",
	"./tzm": "./node_modules/moment/locale/tzm.js",
	"./tzm-latn": "./node_modules/moment/locale/tzm-latn.js",
	"./tzm-latn.js": "./node_modules/moment/locale/tzm-latn.js",
	"./tzm.js": "./node_modules/moment/locale/tzm.js",
	"./ug-cn": "./node_modules/moment/locale/ug-cn.js",
	"./ug-cn.js": "./node_modules/moment/locale/ug-cn.js",
	"./uk": "./node_modules/moment/locale/uk.js",
	"./uk.js": "./node_modules/moment/locale/uk.js",
	"./ur": "./node_modules/moment/locale/ur.js",
	"./ur.js": "./node_modules/moment/locale/ur.js",
	"./uz": "./node_modules/moment/locale/uz.js",
	"./uz-latn": "./node_modules/moment/locale/uz-latn.js",
	"./uz-latn.js": "./node_modules/moment/locale/uz-latn.js",
	"./uz.js": "./node_modules/moment/locale/uz.js",
	"./vi": "./node_modules/moment/locale/vi.js",
	"./vi.js": "./node_modules/moment/locale/vi.js",
	"./x-pseudo": "./node_modules/moment/locale/x-pseudo.js",
	"./x-pseudo.js": "./node_modules/moment/locale/x-pseudo.js",
	"./yo": "./node_modules/moment/locale/yo.js",
	"./yo.js": "./node_modules/moment/locale/yo.js",
	"./zh-cn": "./node_modules/moment/locale/zh-cn.js",
	"./zh-cn.js": "./node_modules/moment/locale/zh-cn.js",
	"./zh-hk": "./node_modules/moment/locale/zh-hk.js",
	"./zh-hk.js": "./node_modules/moment/locale/zh-hk.js",
	"./zh-tw": "./node_modules/moment/locale/zh-tw.js",
	"./zh-tw.js": "./node_modules/moment/locale/zh-tw.js"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./node_modules/moment/locale sync recursive ^\\.\\/.*$";

/***/ })

},[["./assets/js/app.js","runtime","vendors~app"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvYXBwLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9jb21wb25lbnRzL3RpbWVsaW5lLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9zY3NzL2FwcC5zY3NzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlIHN5bmMgXlxcLlxcLy4qJCJdLCJuYW1lcyI6WyJjb25zb2xlIiwibG9nIiwiZGF5Q291bnRlciIsImNoZWNrZXIiLCJjdXJyZW50RGF0ZXMiLCJ0b3RhbE1pbnV0ZURhdGEiLCJkYXRlcyIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvckFsbCIsImFycm93cyIsInRvZGF5IiwiZXZlbnRzQnV0dG9uIiwiZ2V0RWxlbWVudEJ5SWQiLCJldmVudEFkZCIsImRhdGFNYWtlciIsInNldERhdGUiLCJhZGRFdmVudExpc3RlbmVyIiwiZSIsImlubmVyVGV4dCIsImNsZWFyRGF0ZXMiLCJmb3JFYWNoIiwiZWxlbWVudCIsImkiLCJzaG93TWludXRlc0dyYXBoaWMiLCJ0YXJnZXQiLCJzdHlsZSIsInRleHRTaGFkb3ciLCJzZXRUaW1lb3V0IiwiaW5uZXJIVE1MIiwidGVtcGxhdGUiLCJjbG9uZSIsImNvbnRlbnQiLCJjbG9uZU5vZGUiLCJhcHBlbmRDaGlsZCIsInRlbXAiLCJjYW52YXMiLCJtYWtlQ2hhcnQiLCJob21lbWFkZURhdGVPYmplY3QiLCJudW1iZXJNb250aCIsImluZGV4IiwibW9udGhzIiwiZGF0ZSIsIkRhdGUiLCJ5ZWFyIiwiZ2V0RnVsbFllYXIiLCJnZXREYXRlIiwic2V0QXR0cmlidXRlIiwidG9TdHJpbmciLCJnZXRNb250aCIsInBhcnNlSW50IiwiX2N1cnJlbnREYXRlcyIsInNldERhdGVzIiwiZGF0ZU51bWJlciIsIm1pbnV0ZUJveGVzIiwiY3VycmVudEluZGV4IiwibWludXRlQ291bnRlciIsImlkIiwidmlzaWJpbGl0eSIsInB1c2giLCJxdWVyeVNlbGVjdG9yIiwic2V0Qm94ZXMiLCJtb3RoZXJmaWxlIiwiY3VycmVudFNlbGVjdGVkRGF0ZXMiLCJ1c2VyRGF0ZUV2ZW50cyIsImRhdGVOdW1iZXJzRGlzcGxheWVkIiwiZ2V0QXR0cmlidXRlIiwibW9udGgiLCJhY3Rpdml0eSIsInRvdGFsTWludXRlcyIsImJveCIsInN0YXJ0UmVsYXRpdmUiLCJlbmRSZWxhdGl2ZSIsImJhbmFuYSIsIm11ZmZpbiIsImJhbmFuYU11ZmZpbiIsImNsYXNzTGlzdCIsImFkZCIsImN0eCIsImdldENvbnRleHQiLCJteUNoYXJ0IiwiQ2hhcnQiLCJ0eXBlIiwiZGF0YSIsImxhYmVscyIsImRhdGFzZXRzIiwibGFiZWwiLCJiYWNrZ3JvdW5kQ29sb3IiLCJib3JkZXJDb2xvciIsImJvcmRlcldpZHRoIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOzs7Ozs7QUFPQTtBQUNBO0FBRUE7QUFDQTtDQUVBO0FBQ0E7O0FBRUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLG1EQUFaLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDaEJBO0FBRUEsSUFBSUMsVUFBVSxHQUFHLENBQWpCO0FBQ0EsSUFBSUMsT0FBTyxHQUFHLEtBQWQ7QUFDQSxJQUFJQyxZQUFZLEdBQUcsRUFBbkI7QUFDQSxJQUFJQyxlQUFlLEdBQUc7QUFDbEIsV0FBUyxDQURTO0FBRWxCLFVBQVEsQ0FGVTtBQUdsQixZQUFVLENBSFE7QUFJbEIsV0FBUyxDQUpTO0FBS2xCLFNBQU8sQ0FMVztBQU1sQixXQUFTLENBTlM7QUFPbEIsVUFBUSxDQVBVO0FBUWxCLFVBQVE7QUFSVSxDQUF0QjtBQVdBLElBQU1DLEtBQUssR0FBR0MsUUFBUSxDQUFDQyxnQkFBVCxDQUEwQixVQUExQixDQUFkO0FBQ0EsSUFBTUMsTUFBTSxHQUFHRixRQUFRLENBQUNDLGdCQUFULENBQTBCLFNBQTFCLENBQWY7QUFDQSxJQUFNRSxL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QUtULHdCQUxTLEVBTVQseUJBTlMsRUFPVCx5QkFQUyxFQVFULHdCQVJTLENBYk47QUF1QlBDLG1CQUFXLEVBQUU7QUF2Qk4sT0FBRDtBQUZSO0FBRm1CLEdBQWYsQ0FBZDtBQWdDSCxDOzs7Ozs7Ozs7OztBQ2xWRCx1Qzs7Ozs7Ozs7Ozs7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZFIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qXG4gKiBXZWxjb21lIHRvIHlvdXIgYXBwJ3MgbWFpbiBKYXZhU2NyaXB0IGZpbGUhXG4gKlxuICogV2UgcmVjb21tZW5kIGluY2x1ZGluZyB0aGUgYnVpbHQgdmVyc2lvbiBvZiB0aGlzIEphdmFTY3JpcHQgZmlsZVxuICogKGFuZCBpdHMgQ1NTIGZpbGUpIGluIHlvdXIgYmFzZSBsYXlvdXQgKGJhc2UuaHRtbC50d2lnKS5cbiAqL1xuXG4vLyBhbnkgQ1NTIHlvdSBpbXBvcnQgd2lsbCBvdXRwdXQgaW50byBhIHNpbmdsZSBzY3NzIGZpbGUgKGFwcC5zY3NzIGluIHRoaXMgY2FzZSlcbmltcG9ydCAnLi4vc2Nzcy9hcHAuc2Nzcyc7XG5cbmltcG9ydCAnLi9jb21wb25lbnRzL3RpbWVsaW5lLmpzJ1xuaW1wb3J0ICdib290c3RyYXAnXG5pbXBvcnQgJy4vY29tcG9uZW50cy9fYm90dG9tYm94J1xuLy8gTmVlZCBqUXVlcnk/IEluc3RhbGwgaXQgd2l0aCBcInlhcm4gYWRkIGpxdWVyeVwiLCB0aGVuIHVuY29tbWVudCB0byBpbXBvcnQgaXQuXG4vLyBpbXBvcnQgJCBmcm9tICdqcXVlcnknO1xuXG5jb25zb2xlLmxvZygnSGVsbG8gV2VicGFjayBFbmNvcmUhIEVkaXQgbWUgaW4gYXNzZXRzL2pzL2FwcC5qcycpO1xuIiwiaW1wb3J0IENoYXJ0IGZyb20gJ2NoYXJ0LmpzJ1xuXG5sZXQgZGF5Q291bnRlciA9IDA7XG5sZXQgY2hlY2tlciA9IGZhbHNlO1xubGV0IGN1cnJlbnREYXRlcyA9IFtdO1xubGV0IHRvdGFsTWludXRlRGF0YSA9IHtcbiAgICBcInNsZWVwXCI6IDAsXG4gICAgXCJ3b3JrXCI6IDAsXG4gICAgXCJ0cmF2ZWxcIjogMCxcbiAgICBcInN0dWR5XCI6IDAsXG4gICAgXCJlYXRcIjogMCxcbiAgICBcImhvYmJ5XCI6IDAsXG4gICAgXCJ3YXNoXCI6IDAsXG4gICAgXCJyZXN0XCI6IDAsXG59O1xuXG5jb25zdCBkYXRlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuZGF0ZUJveFwiKTtcbmNvbnN0IGFycm93cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuYXJyb3dzXCIpO1xuY29uc3QgdG9kYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnRvZGF5XCIpO1xuY29uc3QgZXZlbnRzQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Nob3dOZXh0RXZlbnRzJyk7XG5jb25zdCBldmVudEFkZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdldmVudEFkZCcpO1xuY29uc3QgZGF0YU1ha2VyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Nob3dDaGFydCcpO1xuXG5zZXREYXRlKGRheUNvdW50ZXIpO1xuXG5cbnRvZGF5WzBdLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKGUpIHtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGF0YVRhcmdldCcpLmlubmVyVGV4dCA9IFwiXCI7XG4gICAgY2xlYXJEYXRlcyhjdXJyZW50RGF0ZXMpO1xuXG4gICAgZGF5Q291bnRlciA9IDA7XG4gICAgY2hlY2tlciA9IGZhbHNlO1xuICAgIHNldERhdGUoZGF5Q291bnRlcik7XG59KTtcblxuYXJyb3dzLmZvckVhY2goZnVuY3Rpb24gKGVsZW1lbnQsIGkpIHtcbiAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKGUpIHtcblxuICAgICAgICBjbGVhckRhdGVzKGN1cnJlbnREYXRlcyk7XG5cbiAgICAgICAgc3dpdGNoIChpKSB7XG4gICAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICAgICAgZGF5Q291bnRlci0tO1xuICAgICAgICAgICAgICAgIGNoZWNrZXIgPSB0cnVlO1xuICAgICAgICAgICAgICAgIHNldERhdGUoZGF5Q291bnRlcik7XG4gICAgICAgICAgICAgICAgc2hvd01pbnV0ZXNHcmFwaGljKCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICBkYXlDb3VudGVyKys7XG4gICAgICAgICAgICAgICAgY2hlY2tlciA9IHRydWU7XG4gICAgICAgICAgICAgICAgc2V0RGF0ZShkYXlDb3VudGVyKTtcbiAgICAgICAgICAgICAgICBzaG93TWludXRlc0dyYXBoaWMoKTtcbiAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuXG4gICAgICAgIGUudGFyZ2V0LnN0eWxlLnRleHRTaGFkb3cgPSBcIjAgMCAyMHB4IG9yYW5nZVwiO1xuXG4gICAgICAgIC8vIHJlc2V0IHRoZSBjb2xvciBhZnRlciBhIHNob3J0IGRlbGF5XG4gICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBlLnRhcmdldC5zdHlsZS50ZXh0U2hhZG93ID0gXCJcIjtcbiAgICAgICAgfSwgNTAwKTtcbiAgICB9LCBmYWxzZSk7XG5cbn0pO1xuXG5kYXRlcy5mb3JFYWNoKGZ1bmN0aW9uIChlbGVtZW50LCBpKSB7XG4gICAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uIChlKSB7XG5cbiAgICAgICAgc2hvd01pbnV0ZXNHcmFwaGljKCk7XG5cbiAgICB9KVxufSk7XG5cblxuZXZlbnRzQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKGUpIHtcbiAgICBpZiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2V2ZW50TWFrZXInKSkge1xuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2hvd0V2ZW50cycpLmlubmVySFRNTCA9IFwiXCI7XG4gICAgfVxuICAgIGlmIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZXZlbnRBZGRUYXJnZXQnKSkge1xuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZXZlbnRBZGRUYXJnZXQnKS5pbm5lckhUTUwgPSBcIlwiO1xuICAgIH1cbiAgICBpZiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2RhdGFUYXJnZXQnKSkge1xuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGF0YVRhcmdldCcpLmlubmVySFRNTCA9IFwiXCI7XG4gICAgfVxuICAgIGxldCB0ZW1wbGF0ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdldmVudE1ha2VyJyk7XG4gICAgbGV0IGNsb25lID0gdGVtcGxhdGUuY29udGVudC5jbG9uZU5vZGUodHJ1ZSk7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Nob3dFdmVudHMnKS5hcHBlbmRDaGlsZChjbG9uZSk7XG5cblxufSk7XG5cblxuZXZlbnRBZGQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdldmVudE1ha2VyJykpIHtcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Nob3dFdmVudHMnKS5pbm5lckhUTUwgPSBcIlwiO1xuICAgIH1cbiAgICBpZiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2V2ZW50QWRkVGFyZ2V0JykpIHtcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2V2ZW50QWRkVGFyZ2V0JykuaW5uZXJIVE1MID0gXCJcIjtcbiAgICB9XG4gICAgaWYgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkYXRhVGFyZ2V0JykpIHtcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2RhdGFUYXJnZXQnKS5pbm5lckhUTUwgPSBcIlwiO1xuICAgIH1cbiAgICBpZiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2V2ZW50Rm9ybScpKSB7XG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdldmVudEFkZFRhcmdldCcpLmlubmVySFRNTCA9IFwiXCI7XG4gICAgfVxuICAgIGNvbnN0IHRlbXAgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZXZlbnRGb3JtJyk7XG4gICAgbGV0IGNsb25lID0gdGVtcC5jb250ZW50LmNsb25lTm9kZSh0cnVlKTtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZXZlbnRBZGRUYXJnZXQnKS5hcHBlbmRDaGlsZChjbG9uZSk7XG59KTtcblxuXG5kYXRhTWFrZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpe1xuICAgIGlmIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZXZlbnRNYWtlcicpKSB7XG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzaG93RXZlbnRzJykuaW5uZXJIVE1MID0gXCJcIjtcbiAgICB9XG4gICAgaWYgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdldmVudEFkZFRhcmdldCcpKSB7XG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdldmVudEFkZFRhcmdldCcpLmlubmVySFRNTCA9IFwiXCI7XG4gICAgfVxuICAgIGlmIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGF0YVRhcmdldCcpKSB7XG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkYXRhVGFyZ2V0JykuaW5uZXJIVE1MID0gXCJcIjtcbiAgICB9XG4gICAgaWYgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwaWVDaGFydCcpKSB7XG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkYXRlVGFyZ2V0JykuaW5uZXJIVE1MID0gXCJcIjtcbiAgICB9XG4gICAgY29uc3QgdGVtcCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkYXRhJyk7XG4gICAgbGV0IGNsb25lID0gdGVtcC5jb250ZW50LmNsb25lTm9kZSh0cnVlKTtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGF0YVRhcmdldCcpLmFwcGVuZENoaWxkKGNsb25lKTtcbiAgICBsZXQgY2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BpZUNoYXJ0Jyk7XG4gICAgbWFrZUNoYXJ0KGNhbnZhcywgdG90YWxNaW51dGVEYXRhKTtcblxufSk7XG5cbmZ1bmN0aW9uIHNldERhdGUoKSB7XG5sZXQgdGVtcCA9IFtdO1xubGV0IGhvbWVtYWRlRGF0ZU9iamVjdCA9IHsnZGF0ZSc6IDAsICdtb250aCc6IDAsICd5ZWFyJzogMH07XG5sZXQgbnVtYmVyTW9udGggPSAwO1xuICAgIGRhdGVzLmZvckVhY2goZnVuY3Rpb24gKGVsZW1lbnQsIGluZGV4KSB7XG4gICAgICAgIGNvbnN0IG1vbnRocyA9IFsnSmFudWFyeScsICdGZWJydWFyeScsICdNYXJjaCcsICdBcHJpbCcsICdNYXknLCAnSnVuZScsICdKdWx5JywgJ0F1Z3VzdCcsICdTZXB0ZW1iZXInLCAnT2N0b2JlcicsICdOb3ZlbWJlcicsICdEZWNlbWJlciddO1xuXG4gICAgICAgIGxldCBkYXRlID0gbmV3IERhdGUoKTtcbiAgICAgICAgbGV0IHllYXIgPSBkYXRlLmdldEZ1bGxZZWFyKCk7XG4gICAgICAgIGRhdGUuc2V0RGF0ZShkYXRlLmdldERhdGUoKSArIGRheUNvdW50ZXIpO1xuXG4gICAgICAgIHN3aXRjaCAoaW5kZXgpIHtcbiAgICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgICAgICBkYXRlLnNldERhdGUoZGF0ZS5nZXREYXRlKCkgLSAzKTtcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZGF0ZU51bWJlcicpW2luZGV4XS5pbm5lclRleHQgPSBkYXRlLmdldERhdGUoKTtcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZGF0ZU51bWJlcicpW2luZGV4XS5zZXRBdHRyaWJ1dGUoJ2RhdGEtZGF5JywgZGF0ZS5nZXREYXRlKCkudG9TdHJpbmcoKSk7XG4gICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmRhdGVOdW1iZXInKVtpbmRleF0uc2V0QXR0cmlidXRlKCdkYXRhLW1vbnRoJywgZGF0ZS5nZXRNb250aCgpLnRvU3RyaW5nKCkpO1xuICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5kYXRlTnVtYmVyJylbaW5kZXhdLnNldEF0dHJpYnV0ZSgnZGF0YS15ZWFyJywgZGF0ZS5nZXRGdWxsWWVhcigpLnRvU3RyaW5nKCkpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgZGF0ZS5zZXREYXRlKGRhdGUuZ2V0RGF0ZSgpIC0gMik7XG4gICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmRhdGVOdW1iZXInKVtpbmRleF0uaW5uZXJUZXh0ID0gZGF0ZS5nZXREYXRlKCk7XG4gICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmRhdGVOdW1iZXInKVtpbmRleF0uc2V0QXR0cmlidXRlKCdkYXRhLWRheScsIGRhdGUuZ2V0RGF0ZSgpLnRvU3RyaW5nKCkpO1xuICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5kYXRlTnVtYmVyJylbaW5kZXhdLnNldEF0dHJpYnV0ZSgnZGF0YS1tb250aCcsIGRhdGUuZ2V0TW9udGgoKS50b1N0cmluZygpKTtcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZGF0ZU51bWJlcicpW2luZGV4XS5zZXRBdHRyaWJ1dGUoJ2RhdGEteWVhcicsIGRhdGUuZ2V0RnVsbFllYXIoKS50b1N0cmluZygpKTtcbiAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgICAgIGRhdGUuc2V0RGF0ZShkYXRlLmdldERhdGUoKSAtIDEpO1xuICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5kYXRlTnVtYmVyJylbaW5kZXhdLmlubmVyVGV4dCA9IGRhdGUuZ2V0RGF0ZSgpO1xuICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5kYXRlTnVtYmVyJylbaW5kZXhdLnNldEF0dHJpYnV0ZSgnZGF0YS1kYXknLCBkYXRlLmdldERhdGUoKS50b1N0cmluZygpKTtcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZGF0ZU51bWJlcicpW2luZGV4XS5zZXRBdHRyaWJ1dGUoJ2RhdGEtbW9udGgnLCBkYXRlLmdldE1vbnRoKCkudG9TdHJpbmcoKSk7XG4gICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmRhdGVOdW1iZXInKVtpbmRleF0uc2V0QXR0cmlidXRlKCdkYXRhLXllYXInLCBkYXRlLmdldEZ1bGxZZWFyKCkudG9TdHJpbmcoKSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGNhc2UgMzpcbiAgICAgICAgICAgICAgICBkYXRlLnNldERhdGUoZGF0ZS5nZXREYXRlKCkpO1xuICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5kYXRlTnVtYmVyJylbaW5kZXhdLmlubmVyVGV4dCA9IGRhdGUuZ2V0RGF0ZSgpO1xuICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5kYXRlTnVtYmVyJylbaW5kZXhdLnNldEF0dHJpYnV0ZSgnZGF0YS1kYXknLCBkYXRlLmdldERhdGUoKS50b1N0cmluZygpKTtcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZGF0ZU51bWJlcicpW2luZGV4XS5zZXRBdHRyaWJ1dGUoJ2RhdGEtbW9udGgnLCBkYXRlLmdldE1vbnRoKCkudG9TdHJpbmcoKSk7XG4gICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmRhdGVOdW1iZXInKVtpbmRleF0uc2V0QXR0cmlidXRlKCdkYXRhLXllYXInLCBkYXRlLmdldEZ1bGxZZWFyKCkudG9TdHJpbmcoKSk7XG5cbiAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbW9udGgnKS5pbm5lclRleHQgPSBtb250aHNbZGF0ZS5nZXRNb250aCgpXTtcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgneWVhcicpLmlubmVyVGV4dCA9IGRhdGUuZ2V0RnVsbFllYXIoKS50b1N0cmluZygpO1xuXG4gICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGNhc2UgNDpcbiAgICAgICAgICAgICAgICBkYXRlLnNldERhdGUoZGF0ZS5nZXREYXRlKCkgKyAxKTtcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZGF0ZU51bWJlcicpW2luZGV4XS5pbm5lclRleHQgPSBkYXRlLmdldERhdGUoKTtcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZGF0ZU51bWJlcicpW2luZGV4XS5zZXRBdHRyaWJ1dGUoJ2RhdGEtZGF5JywgZGF0ZS5nZXREYXRlKCkudG9TdHJpbmcoKSk7XG4gICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmRhdGVOdW1iZXInKVtpbmRleF0uc2V0QXR0cmlidXRlKCdkYXRhLW1vbnRoJywgZGF0ZS5nZXRNb250aCgpLnRvU3RyaW5nKCkpO1xuICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5kYXRlTnVtYmVyJylbaW5kZXhdLnNldEF0dHJpYnV0ZSgnZGF0YS15ZWFyJywgZGF0ZS5nZXRGdWxsWWVhcigpLnRvU3RyaW5nKCkpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBjYXNlIDU6XG4gICAgICAgICAgICAgICAgZGF0ZS5zZXREYXRlKGRhdGUuZ2V0RGF0ZSgpICsgMik7XG4gICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmRhdGVOdW1iZXInKVtpbmRleF0uaW5uZXJUZXh0ID0gZGF0ZS5nZXREYXRlKCk7XG4gICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmRhdGVOdW1iZXInKVtpbmRleF0uc2V0QXR0cmlidXRlKCdkYXRhLWRheScsIGRhdGUuZ2V0RGF0ZSgpLnRvU3RyaW5nKCkpO1xuICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5kYXRlTnVtYmVyJylbaW5kZXhdLnNldEF0dHJpYnV0ZSgnZGF0YS1tb250aCcsIGRhdGUuZ2V0TW9udGgoKS50b1N0cmluZygpKTtcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZGF0ZU51bWJlcicpW2luZGV4XS5zZXRBdHRyaWJ1dGUoJ2RhdGEteWVhcicsIGRhdGUuZ2V0RnVsbFllYXIoKS50b1N0cmluZygpKTtcbiAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgY2FzZSA2OlxuICAgICAgICAgICAgICAgIGRhdGUuc2V0RGF0ZShkYXRlLmdldERhdGUoKSArIDMpO1xuICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5kYXRlTnVtYmVyJylbaW5kZXhdLmlubmVyVGV4dCA9IGRhdGUuZ2V0RGF0ZSgpO1xuICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5kYXRlTnVtYmVyJylbaW5kZXhdLnNldEF0dHJpYnV0ZSgnZGF0YS1kYXknLCBkYXRlLmdldERhdGUoKS50b1N0cmluZygpKTtcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZGF0ZU51bWJlcicpW2luZGV4XS5zZXRBdHRyaWJ1dGUoJ2RhdGEtbW9udGgnLCBkYXRlLmdldE1vbnRoKCkudG9TdHJpbmcoKSk7XG4gICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmRhdGVOdW1iZXInKVtpbmRleF0uc2V0QXR0cmlidXRlKCdkYXRhLXllYXInLCBkYXRlLmdldEZ1bGxZZWFyKCkudG9TdHJpbmcoKSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cblxuICAgICAgICBjdXJyZW50RGF0ZXNbaW5kZXhdID0gcGFyc2VJbnQoZWxlbWVudC5pbm5lclRleHQpO1xuICAgICAgICB0ZW1wW2luZGV4XSA9IGhvbWVtYWRlRGF0ZU9iamVjdCA9IHsnZGF0ZSc6IHBhcnNlSW50KGVsZW1lbnQuaW5uZXJUZXh0KSwgJ21vbnRoJzogbnVtYmVyTW9udGgsICd5ZWFyJzogeWVhcn07XG5cblxuICAgIH0pO1xuXG59XG5cbmZ1bmN0aW9uIGNsZWFyRGF0ZXMoX2N1cnJlbnREYXRlcyl7XG4gICAgX2N1cnJlbnREYXRlcyA9IFtdO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy50YXJnZXRHcmFwaCcpLmZvckVhY2goZnVuY3Rpb24gKGVsZW1lbnQpIHtcbiAgICAgICAgZWxlbWVudC5pbm5lclRleHQgPSBcIlwiO1xuICAgIH0pO1xufVxuXG5mdW5jdGlvbiBzZXREYXRlcyhkYXRlTnVtYmVyKSB7XG4gICAgbGV0IG1pbnV0ZUJveGVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLm1pbnV0ZUJveCcpO1xuICAgIGxldCBjdXJyZW50SW5kZXggPSAwO1xuXG4gICAgbGV0IG1pbnV0ZUNvdW50ZXIgPSAwO1xuICAgIG1pbnV0ZUJveGVzLmZvckVhY2goZnVuY3Rpb24gKGVsZW1lbnQsIGluZGV4KSB7XG4gICAgICAgIGlmIChtaW51dGVDb3VudGVyID4gMTQzOSkge1xuICAgICAgICAgICAgbWludXRlQ291bnRlciA9IDA7XG4gICAgICAgICAgICBjdXJyZW50SW5kZXgrKztcbiAgICAgICAgfVxuXG4gICAgICAgIGVsZW1lbnQuaWQgPSBjdXJyZW50RGF0ZXNbY3VycmVudEluZGV4XSArIG1pbnV0ZUNvdW50ZXIudG9TdHJpbmcoKTtcbiAgICAgICAgbWludXRlQ291bnRlcisrO1xuICAgIH0pO1xufVxuXG5mdW5jdGlvbiBzaG93TWludXRlc0dyYXBoaWMoKSB7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Nob3dDaGFydCcpLnN0eWxlLnZpc2liaWxpdHkgPSBcInZpc2libGVcIjtcbiAgICBjbGVhckRhdGVzKGN1cnJlbnREYXRlcyk7XG5cbiAgICBkYXRlcy5mb3JFYWNoKGZ1bmN0aW9uIChlbGVtZW50KSB7XG4gICAgICAgIGN1cnJlbnREYXRlcy5wdXNoKGVsZW1lbnQuaW5uZXJUZXh0KTtcbiAgICAgICAgbGV0IHRlbXBsYXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2V4cGFuZGVkRGF0ZXMnKTtcbiAgICAgICAgbGV0IGNsb25lID0gdGVtcGxhdGUuY29udGVudC5jbG9uZU5vZGUodHJ1ZSk7XG4gICAgICAgIGVsZW1lbnQuYXBwZW5kQ2hpbGQoY2xvbmUpO1xuICAgIH0pO1xuXG4gICAgc2V0RGF0ZXMoY3VycmVudERhdGVzKTtcbiAgICBjaGVja2VyID0gdHJ1ZTtcbiAgICBzZXRCb3hlcyhtb3RoZXJmaWxlKTtcbiAgICBpZiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BpZUNoYXJ0JykpIHtcbiAgICAgICAgbWFrZUNoYXJ0KGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwaWVDaGFydCcpLCB0b3RhbE1pbnV0ZURhdGEpO1xuICAgIH1cbn1cblxuXG5mdW5jdGlvbiBzZXRCb3hlcyhtb3RoZXJmaWxlKSB7XG4gICAgY29uc3QgY3VycmVudFNlbGVjdGVkRGF0ZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZGF0ZU51bWJlcicpO1xuICAgIHRvdGFsTWludXRlRGF0YSA9IHtcbiAgICAgICAgXCJzbGVlcFwiOiAwLFxuICAgICAgICBcIndvcmtcIjogMCxcbiAgICAgICAgXCJ0cmF2ZWxcIjogMCxcbiAgICAgICAgXCJzdHVkeVwiOiAwLFxuICAgICAgICBcImVhdFwiOiAwLFxuICAgICAgICBcImhvYmJ5XCI6IDAsXG4gICAgICAgIFwid2FzaFwiOiAwLFxuICAgICAgICBcInJlc3RcIjogMCxcbiAgICB9O1xuICAgIG1vdGhlcmZpbGUuZm9yRWFjaChmdW5jdGlvbih1c2VyRGF0ZUV2ZW50cykge1xuICAgICAgICBjdXJyZW50U2VsZWN0ZWREYXRlcy5mb3JFYWNoKGZ1bmN0aW9uKGRhdGVOdW1iZXJzRGlzcGxheWVkKXtcbiAgICAgICAgICAgICAgICBpZiAodXNlckRhdGVFdmVudHMuZGF0ZSA9PT0gcGFyc2VJbnQoZGF0ZU51bWJlcnNEaXNwbGF5ZWQuZ2V0QXR0cmlidXRlKCdkYXRhLWRheScpKSAmJlxuICAgICAgICAgICAgICAgICAgICB1c2VyRGF0ZUV2ZW50cy5tb250aCA9PT0gcGFyc2VJbnQoZGF0ZU51bWJlcnNEaXNwbGF5ZWQuZ2V0QXR0cmlidXRlKCdkYXRhLW1vbnRoJykpICYmXG4gICAgICAgICAgICAgICAgICAgIHVzZXJEYXRlRXZlbnRzLnllYXIgPT09IHBhcnNlSW50KGRhdGVOdW1iZXJzRGlzcGxheWVkLmdldEF0dHJpYnV0ZSgnZGF0YS15ZWFyJykpKSB7XG4gICAgICAgICAgICAgICAgICAgIHRvdGFsTWludXRlRGF0YVt1c2VyRGF0ZUV2ZW50cy5hY3Rpdml0eV0gKz0gdXNlckRhdGVFdmVudHMudG90YWxNaW51dGVzO1xuICAgICAgICAgICAgICAgICAgICBsZXQgYm94ID0gdXNlckRhdGVFdmVudHMuc3RhcnRSZWxhdGl2ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aGlsZShib3ggPj0gdXNlckRhdGVFdmVudHMuc3RhcnRSZWxhdGl2ZSAmJiBib3ggPCAodXNlckRhdGVFdmVudHMuZW5kUmVsYXRpdmUpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBiYW5hbmEgPSB1c2VyRGF0ZUV2ZW50c1snZGF0ZSddO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgbXVmZmluID0gYm94LnRvU3RyaW5nKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBiYW5hbmFNdWZmaW4gPSBiYW5hbmEgKyBtdWZmaW47XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGJhbmFuYU11ZmZpbikuY2xhc3NMaXN0LmFkZCh1c2VyRGF0ZUV2ZW50cy5hY3Rpdml0eSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJveCsrO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH0pO1xuXG59XG5cbmZ1bmN0aW9uIG1ha2VDaGFydCAoY2FudmFzLCB0b3RhbE1pbnV0ZURhdGEpIHtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc3R1ZHlUb3RhbCcpLmlubmVyVGV4dCA9IHRvdGFsTWludXRlRGF0YVsnc3R1ZHknXSsnIG1pbnV0ZXMnO1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzbGVlcFRvdGFsJykuaW5uZXJUZXh0ID0gdG90YWxNaW51dGVEYXRhWydzbGVlcCddKycgbWludXRlcyc7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3dhc2hUb3RhbCcpLmlubmVyVGV4dCA9IHRvdGFsTWludXRlRGF0YVsnd2FzaCddKycgbWludXRlcyc7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RyYXZlbFRvdGFsJykuaW5uZXJUZXh0ID0gdG90YWxNaW51dGVEYXRhWyd0cmF2ZWwnXSsnIG1pbnV0ZXMnO1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdob2JieVRvdGFsJykuaW5uZXJUZXh0ID0gdG90YWxNaW51dGVEYXRhWydob2JieSddKycgbWludXRlcyc7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3dvcmtUb3RhbCcpLmlubmVyVGV4dCA9IHRvdGFsTWludXRlRGF0YVsnd29yayddKycgbWludXRlcyc7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2VhdFRvdGFsJykuaW5uZXJUZXh0ID0gdG90YWxNaW51dGVEYXRhWydlYXQnXSsnIG1pbnV0ZXMnO1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyZXN0VG90YWwnKS5pbm5lclRleHQgPSB0b3RhbE1pbnV0ZURhdGFbJ3Jlc3QnXSsnIG1pbnV0ZXMnO1xuXG4gICAgdmFyIGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xuICAgIHZhciBteUNoYXJ0ID0gbmV3IENoYXJ0KGN0eCwge1xuICAgICAgICB0eXBlOiAncGllJyxcbiAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgbGFiZWxzOiBbJ1N0dWR5JywgJ1NsZWVwJywgJ1dhc2gnLCAnVHJhdmVsJywgJ0hvYmJ5JywgJ1dvcmsnLCAnRWF0JywgJ1Jlc3QnXSxcbiAgICAgICAgICAgIGRhdGFzZXRzOiBbe1xuICAgICAgICAgICAgICAgIGxhYmVsOiAnNyBEYXkgQWN0aXZpdHkgVG90YWxzJyxcbiAgICAgICAgICAgICAgICBkYXRhOiBbdG90YWxNaW51dGVEYXRhWydzdHVkeSddLCB0b3RhbE1pbnV0ZURhdGFbJ3NsZWVwJ10sIHRvdGFsTWludXRlRGF0YVsnd2FzaCddLCB0b3RhbE1pbnV0ZURhdGFbJ3RyYXZlbCddLCB0b3RhbE1pbnV0ZURhdGFbJ2hvYmJ5J10sIHRvdGFsTWludXRlRGF0YVsnd29yayddLCB0b3RhbE1pbnV0ZURhdGFbJ2VhdCddLCB0b3RhbE1pbnV0ZURhdGFbJ3Jlc3QnXV0sXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBbXG4gICAgICAgICAgICAgICAgICAgICdoc2xhKDI0NSwgMTAwJSwgNTAlLCAxKScsXG4gICAgICAgICAgICAgICAgICAgICdoc2xhKDAsIDEwMCUsIDUwJSwgMSknLFxuICAgICAgICAgICAgICAgICAgICAncmdiYSg4MywgMTA1LCA0MywgMSknLFxuICAgICAgICAgICAgICAgICAgICAnaHNsYSgzMDAsIDEwMCUsIDUwJSwgMSknLFxuICAgICAgICAgICAgICAgICAgICAnaHNsYSg1MCwgMTAwJSwgNTAlLCAxKScsXG4gICAgICAgICAgICAgICAgICAgICdoc2xhKDE4MCwgMTAwJSwgNTAlLCAxKScsXG4gICAgICAgICAgICAgICAgICAgICdoc2xhKDEyNSwgMTAwJSwgNTAlLCAxKScsXG4gICAgICAgICAgICAgICAgICAgICdyZ2JhKDEyOCwgMTI4LCAxMjgsIDEpJ1xuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgYm9yZGVyQ29sb3I6IFtcbiAgICAgICAgICAgICAgICAgICAgJ2hzbGEoMjQ1LCAxMDAlLCA1MCUsIDEpJyxcbiAgICAgICAgICAgICAgICAgICAgJ2hzbGEoMCwgMTAwJSwgNTAlLCAxKScsXG4gICAgICAgICAgICAgICAgICAgICdyZ2JhKDgzLCAxMDUsIDQzLCAxKScsXG4gICAgICAgICAgICAgICAgICAgICdoc2xhKDMwMCwgMTAwJSwgNTAlLCAxKScsXG4gICAgICAgICAgICAgICAgICAgICdoc2xhKDUwLCAxMDAlLCA1MCUsIDEpJyxcbiAgICAgICAgICAgICAgICAgICAgJ2hzbGEoMTgwLCAxMDAlLCA1MCUsIDEpJyxcbiAgICAgICAgICAgICAgICAgICAgJ2hzbGEoMTI1LCAxMDAlLCA1MCUsIDEpJyxcbiAgICAgICAgICAgICAgICAgICAgJ3JnYmEoMTI4LCAxMjgsIDEyOCwgMSknXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICBib3JkZXJXaWR0aDogMlxuICAgICAgICAgICAgfV1cbiAgICAgICAgfSxcbiAgICB9KTtcblxufVxuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwidmFyIG1hcCA9IHtcblx0XCIuL2FmXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9hZi5qc1wiLFxuXHRcIi4vYWYuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2FmLmpzXCIsXG5cdFwiLi9hclwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYXIuanNcIixcblx0XCIuL2FyLWR6XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9hci1kei5qc1wiLFxuXHRcIi4vYXItZHouanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2FyLWR6LmpzXCIsXG5cdFwiLi9hci1rd1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYXIta3cuanNcIixcblx0XCIuL2FyLWt3LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9hci1rdy5qc1wiLFxuXHRcIi4vYXItbHlcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2FyLWx5LmpzXCIsXG5cdFwiLi9hci1seS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYXItbHkuanNcIixcblx0XCIuL2FyLW1hXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9hci1tYS5qc1wiLFxuXHRcIi4vYXItbWEuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2FyLW1hLmpzXCIsXG5cdFwiLi9hci1zYVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYXItc2EuanNcIixcblx0XCIuL2FyLXNhLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9hci1zYS5qc1wiLFxuXHRcIi4vYXItdG5cIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2FyLXRuLmpzXCIsXG5cdFwiLi9hci10bi5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYXItdG4uanNcIixcblx0XCIuL2FyLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9hci5qc1wiLFxuXHRcIi4vYXpcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2F6LmpzXCIsXG5cdFwiLi9hei5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYXouanNcIixcblx0XCIuL2JlXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9iZS5qc1wiLFxuXHRcIi4vYmUuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2JlLmpzXCIsXG5cdFwiLi9iZ1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYmcuanNcIixcblx0XCIuL2JnLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9iZy5qc1wiLFxuXHRcIi4vYm1cIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2JtLmpzXCIsXG5cdFwiLi9ibS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYm0uanNcIixcblx0XCIuL2JuXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9ibi5qc1wiLFxuXHRcIi4vYm4uanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2JuLmpzXCIsXG5cdFwiLi9ib1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYm8uanNcIixcblx0XCIuL2JvLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9iby5qc1wiLFxuXHRcIi4vYnJcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2JyLmpzXCIsXG5cdFwiLi9ici5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYnIuanNcIixcblx0XCIuL2JzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9icy5qc1wiLFxuXHRcIi4vYnMuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2JzLmpzXCIsXG5cdFwiLi9jYVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvY2EuanNcIixcblx0XCIuL2NhLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9jYS5qc1wiLFxuXHRcIi4vY3NcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2NzLmpzXCIsXG5cdFwiLi9jcy5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvY3MuanNcIixcblx0XCIuL2N2XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9jdi5qc1wiLFxuXHRcIi4vY3YuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2N2LmpzXCIsXG5cdFwiLi9jeVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvY3kuanNcIixcblx0XCIuL2N5LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9jeS5qc1wiLFxuXHRcIi4vZGFcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2RhLmpzXCIsXG5cdFwiLi9kYS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZGEuanNcIixcblx0XCIuL2RlXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9kZS5qc1wiLFxuXHRcIi4vZGUtYXRcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2RlLWF0LmpzXCIsXG5cdFwiLi9kZS1hdC5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZGUtYXQuanNcIixcblx0XCIuL2RlLWNoXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9kZS1jaC5qc1wiLFxuXHRcIi4vZGUtY2guanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2RlLWNoLmpzXCIsXG5cdFwiLi9kZS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZGUuanNcIixcblx0XCIuL2R2XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9kdi5qc1wiLFxuXHRcIi4vZHYuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2R2LmpzXCIsXG5cdFwiLi9lbFwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZWwuanNcIixcblx0XCIuL2VsLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9lbC5qc1wiLFxuXHRcIi4vZW4tU0dcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VuLVNHLmpzXCIsXG5cdFwiLi9lbi1TRy5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZW4tU0cuanNcIixcblx0XCIuL2VuLWF1XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9lbi1hdS5qc1wiLFxuXHRcIi4vZW4tYXUuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VuLWF1LmpzXCIsXG5cdFwiLi9lbi1jYVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZW4tY2EuanNcIixcblx0XCIuL2VuLWNhLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9lbi1jYS5qc1wiLFxuXHRcIi4vZW4tZ2JcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VuLWdiLmpzXCIsXG5cdFwiLi9lbi1nYi5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZW4tZ2IuanNcIixcblx0XCIuL2VuLWllXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9lbi1pZS5qc1wiLFxuXHRcIi4vZW4taWUuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VuLWllLmpzXCIsXG5cdFwiLi9lbi1pbFwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZW4taWwuanNcIixcblx0XCIuL2VuLWlsLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9lbi1pbC5qc1wiLFxuXHRcIi4vZW4tbnpcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VuLW56LmpzXCIsXG5cdFwiLi9lbi1uei5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZW4tbnouanNcIixcblx0XCIuL2VvXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9lby5qc1wiLFxuXHRcIi4vZW8uanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VvLmpzXCIsXG5cdFwiLi9lc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZXMuanNcIixcblx0XCIuL2VzLWRvXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9lcy1kby5qc1wiLFxuXHRcIi4vZXMtZG8uanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VzLWRvLmpzXCIsXG5cdFwiLi9lcy11c1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZXMtdXMuanNcIixcblx0XCIuL2VzLXVzLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9lcy11cy5qc1wiLFxuXHRcIi4vZXMuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VzLmpzXCIsXG5cdFwiLi9ldFwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZXQuanNcIixcblx0XCIuL2V0LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9ldC5qc1wiLFxuXHRcIi4vZXVcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2V1LmpzXCIsXG5cdFwiLi9ldS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZXUuanNcIixcblx0XCIuL2ZhXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9mYS5qc1wiLFxuXHRcIi4vZmEuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2ZhLmpzXCIsXG5cdFwiLi9maVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZmkuanNcIixcblx0XCIuL2ZpLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9maS5qc1wiLFxuXHRcIi4vZm9cIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2ZvLmpzXCIsXG5cdFwiLi9mby5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZm8uanNcIixcblx0XCIuL2ZyXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9mci5qc1wiLFxuXHRcIi4vZnItY2FcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2ZyLWNhLmpzXCIsXG5cdFwiLi9mci1jYS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZnItY2EuanNcIixcblx0XCIuL2ZyLWNoXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9mci1jaC5qc1wiLFxuXHRcIi4vZnItY2guanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2ZyLWNoLmpzXCIsXG5cdFwiLi9mci5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZnIuanNcIixcblx0XCIuL2Z5XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9meS5qc1wiLFxuXHRcIi4vZnkuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2Z5LmpzXCIsXG5cdFwiLi9nYVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZ2EuanNcIixcblx0XCIuL2dhLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9nYS5qc1wiLFxuXHRcIi4vZ2RcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2dkLmpzXCIsXG5cdFwiLi9nZC5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZ2QuanNcIixcblx0XCIuL2dsXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9nbC5qc1wiLFxuXHRcIi4vZ2wuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2dsLmpzXCIsXG5cdFwiLi9nb20tbGF0blwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZ29tLWxhdG4uanNcIixcblx0XCIuL2dvbS1sYXRuLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9nb20tbGF0bi5qc1wiLFxuXHRcIi4vZ3VcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2d1LmpzXCIsXG5cdFwiLi9ndS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZ3UuanNcIixcblx0XCIuL2hlXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9oZS5qc1wiLFxuXHRcIi4vaGUuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2hlLmpzXCIsXG5cdFwiLi9oaVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvaGkuanNcIixcblx0XCIuL2hpLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9oaS5qc1wiLFxuXHRcIi4vaHJcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2hyLmpzXCIsXG5cdFwiLi9oci5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvaHIuanNcIixcblx0XCIuL2h1XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9odS5qc1wiLFxuXHRcIi4vaHUuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2h1LmpzXCIsXG5cdFwiLi9oeS1hbVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvaHktYW0uanNcIixcblx0XCIuL2h5LWFtLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9oeS1hbS5qc1wiLFxuXHRcIi4vaWRcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2lkLmpzXCIsXG5cdFwiLi9pZC5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvaWQuanNcIixcblx0XCIuL2lzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9pcy5qc1wiLFxuXHRcIi4vaXMuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2lzLmpzXCIsXG5cdFwiLi9pdFwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvaXQuanNcIixcblx0XCIuL2l0LWNoXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9pdC1jaC5qc1wiLFxuXHRcIi4vaXQtY2guanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2l0LWNoLmpzXCIsXG5cdFwiLi9pdC5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvaXQuanNcIixcblx0XCIuL2phXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9qYS5qc1wiLFxuXHRcIi4vamEuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2phLmpzXCIsXG5cdFwiLi9qdlwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvanYuanNcIixcblx0XCIuL2p2LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9qdi5qc1wiLFxuXHRcIi4va2FcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2thLmpzXCIsXG5cdFwiLi9rYS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUva2EuanNcIixcblx0XCIuL2trXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9ray5qc1wiLFxuXHRcIi4va2suanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2trLmpzXCIsXG5cdFwiLi9rbVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUva20uanNcIixcblx0XCIuL2ttLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9rbS5qc1wiLFxuXHRcIi4va25cIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2tuLmpzXCIsXG5cdFwiLi9rbi5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUva24uanNcIixcblx0XCIuL2tvXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9rby5qc1wiLFxuXHRcIi4va28uanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2tvLmpzXCIsXG5cdFwiLi9rdVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUva3UuanNcIixcblx0XCIuL2t1LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9rdS5qc1wiLFxuXHRcIi4va3lcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2t5LmpzXCIsXG5cdFwiLi9reS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUva3kuanNcIixcblx0XCIuL2xiXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9sYi5qc1wiLFxuXHRcIi4vbGIuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2xiLmpzXCIsXG5cdFwiLi9sb1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbG8uanNcIixcblx0XCIuL2xvLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9sby5qc1wiLFxuXHRcIi4vbHRcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2x0LmpzXCIsXG5cdFwiLi9sdC5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbHQuanNcIixcblx0XCIuL2x2XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9sdi5qc1wiLFxuXHRcIi4vbHYuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2x2LmpzXCIsXG5cdFwiLi9tZVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbWUuanNcIixcblx0XCIuL21lLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9tZS5qc1wiLFxuXHRcIi4vbWlcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL21pLmpzXCIsXG5cdFwiLi9taS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbWkuanNcIixcblx0XCIuL21rXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9tay5qc1wiLFxuXHRcIi4vbWsuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL21rLmpzXCIsXG5cdFwiLi9tbFwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbWwuanNcIixcblx0XCIuL21sLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9tbC5qc1wiLFxuXHRcIi4vbW5cIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL21uLmpzXCIsXG5cdFwiLi9tbi5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbW4uanNcIixcblx0XCIuL21yXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9tci5qc1wiLFxuXHRcIi4vbXIuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL21yLmpzXCIsXG5cdFwiLi9tc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbXMuanNcIixcblx0XCIuL21zLW15XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9tcy1teS5qc1wiLFxuXHRcIi4vbXMtbXkuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL21zLW15LmpzXCIsXG5cdFwiLi9tcy5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbXMuanNcIixcblx0XCIuL210XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9tdC5qc1wiLFxuXHRcIi4vbXQuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL210LmpzXCIsXG5cdFwiLi9teVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbXkuanNcIixcblx0XCIuL215LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9teS5qc1wiLFxuXHRcIi4vbmJcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL25iLmpzXCIsXG5cdFwiLi9uYi5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbmIuanNcIixcblx0XCIuL25lXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9uZS5qc1wiLFxuXHRcIi4vbmUuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL25lLmpzXCIsXG5cdFwiLi9ubFwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbmwuanNcIixcblx0XCIuL25sLWJlXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9ubC1iZS5qc1wiLFxuXHRcIi4vbmwtYmUuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL25sLWJlLmpzXCIsXG5cdFwiLi9ubC5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbmwuanNcIixcblx0XCIuL25uXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9ubi5qc1wiLFxuXHRcIi4vbm4uanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL25uLmpzXCIsXG5cdFwiLi9wYS1pblwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvcGEtaW4uanNcIixcblx0XCIuL3BhLWluLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9wYS1pbi5qc1wiLFxuXHRcIi4vcGxcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3BsLmpzXCIsXG5cdFwiLi9wbC5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvcGwuanNcIixcblx0XCIuL3B0XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9wdC5qc1wiLFxuXHRcIi4vcHQtYnJcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3B0LWJyLmpzXCIsXG5cdFwiLi9wdC1ici5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvcHQtYnIuanNcIixcblx0XCIuL3B0LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9wdC5qc1wiLFxuXHRcIi4vcm9cIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3JvLmpzXCIsXG5cdFwiLi9yby5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvcm8uanNcIixcblx0XCIuL3J1XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9ydS5qc1wiLFxuXHRcIi4vcnUuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3J1LmpzXCIsXG5cdFwiLi9zZFwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvc2QuanNcIixcblx0XCIuL3NkLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9zZC5qc1wiLFxuXHRcIi4vc2VcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3NlLmpzXCIsXG5cdFwiLi9zZS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvc2UuanNcIixcblx0XCIuL3NpXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9zaS5qc1wiLFxuXHRcIi4vc2kuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3NpLmpzXCIsXG5cdFwiLi9za1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvc2suanNcIixcblx0XCIuL3NrLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9zay5qc1wiLFxuXHRcIi4vc2xcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3NsLmpzXCIsXG5cdFwiLi9zbC5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvc2wuanNcIixcblx0XCIuL3NxXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9zcS5qc1wiLFxuXHRcIi4vc3EuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3NxLmpzXCIsXG5cdFwiLi9zclwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvc3IuanNcIixcblx0XCIuL3NyLWN5cmxcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3NyLWN5cmwuanNcIixcblx0XCIuL3NyLWN5cmwuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3NyLWN5cmwuanNcIixcblx0XCIuL3NyLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9zci5qc1wiLFxuXHRcIi4vc3NcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3NzLmpzXCIsXG5cdFwiLi9zcy5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvc3MuanNcIixcblx0XCIuL3N2XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9zdi5qc1wiLFxuXHRcIi4vc3YuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3N2LmpzXCIsXG5cdFwiLi9zd1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvc3cuanNcIixcblx0XCIuL3N3LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9zdy5qc1wiLFxuXHRcIi4vdGFcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3RhLmpzXCIsXG5cdFwiLi90YS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdGEuanNcIixcblx0XCIuL3RlXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS90ZS5qc1wiLFxuXHRcIi4vdGUuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3RlLmpzXCIsXG5cdFwiLi90ZXRcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3RldC5qc1wiLFxuXHRcIi4vdGV0LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS90ZXQuanNcIixcblx0XCIuL3RnXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS90Zy5qc1wiLFxuXHRcIi4vdGcuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3RnLmpzXCIsXG5cdFwiLi90aFwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdGguanNcIixcblx0XCIuL3RoLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS90aC5qc1wiLFxuXHRcIi4vdGwtcGhcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3RsLXBoLmpzXCIsXG5cdFwiLi90bC1waC5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdGwtcGguanNcIixcblx0XCIuL3RsaFwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdGxoLmpzXCIsXG5cdFwiLi90bGguanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3RsaC5qc1wiLFxuXHRcIi4vdHJcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3RyLmpzXCIsXG5cdFwiLi90ci5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdHIuanNcIixcblx0XCIuL3R6bFwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdHpsLmpzXCIsXG5cdFwiLi90emwuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3R6bC5qc1wiLFxuXHRcIi4vdHptXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS90em0uanNcIixcblx0XCIuL3R6bS1sYXRuXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS90em0tbGF0bi5qc1wiLFxuXHRcIi4vdHptLWxhdG4uanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3R6bS1sYXRuLmpzXCIsXG5cdFwiLi90em0uanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3R6bS5qc1wiLFxuXHRcIi4vdWctY25cIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3VnLWNuLmpzXCIsXG5cdFwiLi91Zy1jbi5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdWctY24uanNcIixcblx0XCIuL3VrXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS91ay5qc1wiLFxuXHRcIi4vdWsuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3VrLmpzXCIsXG5cdFwiLi91clwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdXIuanNcIixcblx0XCIuL3VyLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS91ci5qc1wiLFxuXHRcIi4vdXpcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3V6LmpzXCIsXG5cdFwiLi91ei1sYXRuXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS91ei1sYXRuLmpzXCIsXG5cdFwiLi91ei1sYXRuLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS91ei1sYXRuLmpzXCIsXG5cdFwiLi91ei5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdXouanNcIixcblx0XCIuL3ZpXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS92aS5qc1wiLFxuXHRcIi4vdmkuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3ZpLmpzXCIsXG5cdFwiLi94LXBzZXVkb1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUveC1wc2V1ZG8uanNcIixcblx0XCIuL3gtcHNldWRvLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS94LXBzZXVkby5qc1wiLFxuXHRcIi4veW9cIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3lvLmpzXCIsXG5cdFwiLi95by5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUveW8uanNcIixcblx0XCIuL3poLWNuXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS96aC1jbi5qc1wiLFxuXHRcIi4vemgtY24uanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3poLWNuLmpzXCIsXG5cdFwiLi96aC1oa1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvemgtaGsuanNcIixcblx0XCIuL3poLWhrLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS96aC1oay5qc1wiLFxuXHRcIi4vemgtdHdcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3poLXR3LmpzXCIsXG5cdFwiLi96aC10dy5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvemgtdHcuanNcIlxufTtcblxuXG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dChyZXEpIHtcblx0dmFyIGlkID0gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSk7XG5cdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKGlkKTtcbn1cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpIHtcblx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhtYXAsIHJlcSkpIHtcblx0XHR2YXIgZSA9IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIgKyByZXEgKyBcIidcIik7XG5cdFx0ZS5jb2RlID0gJ01PRFVMRV9OT1RfRk9VTkQnO1xuXHRcdHRocm93IGU7XG5cdH1cblx0cmV0dXJuIG1hcFtyZXFdO1xufVxud2VicGFja0NvbnRleHQua2V5cyA9IGZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0S2V5cygpIHtcblx0cmV0dXJuIE9iamVjdC5rZXlzKG1hcCk7XG59O1xud2VicGFja0NvbnRleHQucmVzb2x2ZSA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZTtcbm1vZHVsZS5leHBvcnRzID0gd2VicGFja0NvbnRleHQ7XG53ZWJwYWNrQ29udGV4dC5pZCA9IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZSBzeW5jIHJlY3Vyc2l2ZSBeXFxcXC5cXFxcLy4qJFwiOyJdLCJzb3VyY2VSb290IjoiIn0=