/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./index.ts":
/*!******************!*\
  !*** ./index.ts ***!
  \******************/
/***/ (() => {

eval("\n// Number Types mini-challenge 10 10.2\n// Write a function that will only accept numbers and attend to \n// all TypeScript weakness flags.\n// : number\ndocument.addEventListener(\"DOMContentLoaded\", () => {\n    const returningUserDisplay = document.querySelector('#returning-user');\n    const userNameDisplay = document.querySelector('#user');\n    const reviewTotalDisplay = document.querySelector('#reviews');\n    const reviews = [\n        {\n            name: 'Sheia',\n            stars: 5,\n            loyaltyUser: true,\n            date: '01-04-2021'\n        },\n        {\n            name: 'Andrzej',\n            stars: 3,\n            loyaltyUser: false,\n            date: '28-03-2021'\n        },\n        {\n            name: 'Omar',\n            stars: 4,\n            loyaltyUser: true,\n            date: '27-03-2021'\n        },\n    ];\n    function showReviewTotal(value, reviewer, isLoyalty) {\n        const iconDisplay = isLoyalty ? '⭐' : '';\n        if (reviewTotalDisplay) {\n            reviewTotalDisplay.innerHTML = 'Review total ' + value.toString() + '| last reviewed by ' +\n                reviewer + ' ' + iconDisplay;\n        }\n    }\n    showReviewTotal(reviews.length, reviews[0].name, reviews[0].loyaltyUser);\n    const you = {\n        userName: 'Bobby',\n        isReturning: true,\n    };\n    function populateUser(isReturning, userName) {\n        if (isReturning && returningUserDisplay) {\n            returningUserDisplay.innerHTML = 'Welcome back';\n        }\n        if (userNameDisplay) {\n            userNameDisplay.innerHTML = userName;\n        }\n    }\n    populateUser(you.isReturning, you.userName);\n});\n\n\n//# sourceURL=webpack://project/./index.ts?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./index.ts"]();
/******/ 	
/******/ })()
;