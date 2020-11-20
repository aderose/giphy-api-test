/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is not neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements:  */
eval("var img = document.querySelector('img');\nfetch('https://api.giphy.com/v1/gifs/translate?api_key=fj5ziE4ILPricdqb0WywRB5AbMGrVXLn&s=cats').then(function (response) {\n  return response.json();\n}).then(function (response) {\n  img.src = response.data.images.original.url;\n}).catch(function (e) {\n  console.log(e);\n});\n\n//# sourceURL=webpack://api-test/./src/index.js?");
/******/ })()
;