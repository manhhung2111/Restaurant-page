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

/***/ "./src/createAboutUsPage.js":
/*!**********************************!*\
  !*** ./src/createAboutUsPage.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createAboutUsContent\": () => (/* binding */ createAboutUsContent)\n/* harmony export */ });\nfunction createAboutUsContent() {\r\n  let title = createTitle();\r\n  let script = createScript();\r\n  return { title, script };\r\n}\r\n\r\nfunction createTitle() {\r\n  const title = document.createElement(\"div\");\r\n  title.textContent = \"About Us\";\r\n  title.classList.add(\"about-us-title\");\r\n  return title;\r\n}\r\n\r\nfunction createScript() {\r\n  const script = document.createElement(\"div\");\r\n  script.innerHTML = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, in\r\n    laudantium ad molestias laboriosam voluptatum sint accusamus nobis illum\r\n    quam, eius nulla rerum eligendi minus iusto unde modi ab fugit.\r\n    <br />\r\n    Esse nihil eveniet repudiandae aliquam labore sed iusto, animi impedit\r\n    qui nobis minima corrupti quidem molestiae alias excepturi neque error\r\n    saepe dolorem ut? Officia, pariatur enim praesentium voluptas sunt\r\n    temporibus? Repellat, maiores eius fuga molestias hic in vel dolor\r\n    cupiditate velit corrupti ea reiciendis inventore nostrum consectetur\r\n    dolorum quis voluptas eum? Laudantium harum voluptatem nesciunt dicta\r\n    maiores culpa similique quidem! Lorem ipsum dolor sit amet consectetur\r\n    adipisicing elit. Quis beatae quia aspernatur quae aut, nostrum\r\n    reprehenderit dicta dignissimos, quas ipsam explicabo sequi rem?\r\n    Corporis adipisci voluptas a modi maiores rem! Ipsa, dicta iste iure\r\n    porro placeat quibusdam vero magni nisi laboriosam veniam, nesciunt enim\r\n    similique temporibus iusto corrupti, est laudantium provident quasi.\r\n    <br />Autem facere quibusdam earum iste adipisci ad quos! Alias cumque\r\n    numquam omnis, labore architecto animi perferendis, nam dolorum nemo,\r\n    nihil cupiditate rem distinctio! Eligendi blanditiis, vel laboriosam\r\n    quisquam amet corporis nulla hic? Perferendis veniam quas sapiente ab\r\n    quis.`;\r\n    script.classList.add('about-us-script');\r\n    return script;\r\n}\r\n\n\n//# sourceURL=webpack://restaurantpage/./src/createAboutUsPage.js?");

/***/ }),

/***/ "./src/createContactPage.js":
/*!**********************************!*\
  !*** ./src/createContactPage.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createContactForm\": () => (/* binding */ createContactForm)\n/* harmony export */ });\nfunction createContactForm() {\r\n  let contactForm = document.createElement(\"form\");\r\n  contactForm.action = \"https://httpbin.org/get\";\r\n  contactForm.method = \"get\";\r\n  contactForm.id = \"contact-form\";\r\n\r\n  contactForm.append(createFormTitle());\r\n  contactForm.append(createFormField(\"fullName\", false));\r\n  contactForm.append(createFormField(\"email\", false));\r\n  contactForm.append(createFormField(\"message\", true));\r\n  contactForm.append(createSubmitButton());\r\n\r\n  return contactForm;\r\n}\r\n\r\nfunction createFormTitle() {\r\n  let formTitle = document.createElement(\"div\");\r\n  formTitle.classList.add(\"form-title\");\r\n\r\n  let contactUs = document.createElement(\"div\");\r\n  contactUs.classList.add(\"form-contact-us\");\r\n  contactUs.textContent = \"Contact Us\";\r\n\r\n  let formNote = document.createElement(\"div\");\r\n  formNote.classList.add(\"form-note\");\r\n  formNote.textContent = \"Please contact us for more information\";\r\n\r\n  formTitle.append(contactUs, formNote);\r\n  return formTitle;\r\n}\r\n\r\nfunction createFormField(labelName, isTextArea) {\r\n  let formField = document.createElement(\"div\");\r\n  formField.classList.add(\"form-field\");\r\n\r\n  let label = document.createElement(\"label\");\r\n  switch (labelName) {\r\n    case \"fullName\":\r\n      label.textContent = \"Full Name\";\r\n      break;\r\n    case \"email\":\r\n      label.textContent = \"E-mail\";\r\n      break;\r\n    default:\r\n      label.textContent = \"Message\";\r\n  }\r\n\r\n  let input;\r\n  if (isTextArea) {\r\n    input = document.createElement(\"textarea\");\r\n    input.cols = 30;\r\n    input.rows = 5;\r\n  } else {\r\n    input = document.createElement('input');\r\n    input.type = 'text';\r\n    input.autocomplete = 'on';\r\n  }\r\n\r\n  input.name = labelName;\r\n  input.id = labelName;\r\n  input.required = true;\r\n\r\n  formField.append(label, input);\r\n  return formField;\r\n}\r\n\r\nfunction createSubmitButton() {\r\n    let submit = document.createElement('input');\r\n    submit.type = 'submit';\r\n    submit.name = 'submit';\r\n    submit.id = 'submit';\r\n\r\n    return submit;\r\n}\n\n//# sourceURL=webpack://restaurantpage/./src/createContactPage.js?");

/***/ }),

/***/ "./src/createHeader.js":
/*!*****************************!*\
  !*** ./src/createHeader.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createHeader\": () => (/* binding */ createHeader)\n/* harmony export */ });\nfunction createHeader() {\r\n  let header = document.createElement(\"header\");\r\n  header.appendChild(createImage());\r\n  header.appendChild(createNavigation());\r\n  header.appendChild(createOrderButton());\r\n  return header;\r\n}\r\n\r\nfunction createImage() {\r\n  let img = document.createElement(\"img\");\r\n//   img.width = \"100px\";\r\n//   img.height = \"96px\";\r\n  img.classList.add(\"image\");\r\n  img.src = \"/src/grizz.png\";\r\n  return img;\r\n}\r\n\r\nfunction createNavigation() {\r\n  let nav = document.createElement(\"nav\");\r\n  nav.classList.add(\"links\");\r\n  const links = [\"MENU\", \"LOCATIONS\", \"ABOUT\", \"CONTACT\"];\r\n  const id = ['menu', 'locations', 'about', 'contact']\r\n  for (let i = 0; i < 4; i++) {\r\n    let div = document.createElement(\"div\");\r\n    div.classList.add(\"header-link\");\r\n    div.id = id[i];\r\n    div.textContent = links[i];\r\n    nav.appendChild(div);\r\n  }\r\n  return nav;\r\n}\r\n\r\nfunction createOrderButton() {\r\n  let div = document.createElement(\"div\");\r\n  div.classList.add(\"order-button\");\r\n  div.textContent = \"ORDER ONLINE\";\r\n  return div;\r\n}\r\n\n\n//# sourceURL=webpack://restaurantpage/./src/createHeader.js?");

/***/ }),

/***/ "./src/createIntroduction.js":
/*!***********************************!*\
  !*** ./src/createIntroduction.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createIntroduction\": () => (/* binding */ createIntroduction)\n/* harmony export */ });\nfunction createIntroduction() {\r\n    let introduction = document.createElement('div');\r\n    let restaurantName = document.createElement('div');\r\n    let description = document.createElement('div');\r\n    restaurantName.textContent = 'HUNGRY GRIZZ';\r\n    description.textContent = 'ONLINE ORDERING AVAILABLE FOR BOTH LOCATIONS';\r\n    restaurantName.classList.add('restaurant-name');\r\n    description.classList.add('description');\r\n    introduction.classList.add('introduction');\r\n    introduction.appendChild(restaurantName);\r\n    introduction.appendChild(description);\r\n    return introduction;\r\n}\n\n//# sourceURL=webpack://restaurantpage/./src/createIntroduction.js?");

/***/ }),

/***/ "./src/createMenuPage.js":
/*!*******************************!*\
  !*** ./src/createMenuPage.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createMainMenu\": () => (/* binding */ createMainMenu),\n/* harmony export */   \"createStarterMenu\": () => (/* binding */ createStarterMenu)\n/* harmony export */ });\n/**\r\n * Create starterMenu, mainMenu\r\n * h2\r\n * createFoodCards\r\n */\r\n\r\nfunction createStarterMenu() {\r\n  let starter = document.createElement(\"div\");\r\n  starter.classList.add(\"starter\");\r\n  let title = document.createElement(\"h2\");\r\n  title.textContent = \"Starter\";\r\n  starter.append(title);\r\n  const foodCards = creteStarterFoodCards();\r\n  foodCards.forEach((foodCard) => {\r\n    starter.append(foodCard);\r\n  });\r\n  return starter;\r\n}\r\n\r\nfunction createMainMenu() {\r\n  let main = document.createElement(\"div\");\r\n  main.classList.add(\"main\");\r\n  let title = document.createElement(\"h2\");\r\n  title.textContent = \"Main Course\";\r\n  main.append(title, createMainFoodGrid());\r\n  \r\n  return main;  \r\n}\r\n\r\nfunction createMainFoodGrid() {\r\n  let foodGrid = document.createElement(\"div\");\r\n  foodGrid.classList.add(\"food-grid\");\r\n\r\n  const imageLinks = [\"/src/taco.jpg\", \"/src/pizza.jpg\"];\r\n  const foodInfo = [\r\n    { name: \"Taco\", price: \"$12.5\" },\r\n    { name: \"Pizza\", price: \"$21.11\" },\r\n  ];\r\n\r\n  for (let i = 0; i < 4; i++) {\r\n    let foodCard = document.createElement(\"div\");\r\n    foodCard.classList.add(\"food-card\");\r\n    let img = document.createElement(\"img\");\r\n    img.src = imageLinks[i%2];\r\n    img.alt = \"This is food image\";\r\n    foodCard.append(img, createFoodInfo(foodInfo[i%2]));\r\n    foodGrid.append(foodCard);\r\n  }\r\n\r\n  return foodGrid;\r\n}\r\n\r\nfunction creteStarterFoodCards() {\r\n  let foodCards = [];\r\n  const imageLinks = [\"/src/taco.jpg\", \"/src/pizza.jpg\"];\r\n  const foodInfo = [\r\n    { name: \"Taco\", price: \"$12.5\" },\r\n    { name: \"Pizza\", price: \"$21.11\" },\r\n  ];\r\n  for (let i = 0; i < 2; i++) {\r\n    let foodCard = document.createElement(\"div\");\r\n    foodCard.classList.add(\"food-card\");\r\n    let img = document.createElement(\"img\");\r\n    img.src = imageLinks[i];\r\n    img.alt = \"This is food image\";\r\n    foodCard.append(img, createFoodInfo(foodInfo[i]));\r\n    foodCards.push(foodCard);\r\n  }\r\n\r\n  return foodCards;\r\n}\r\n\r\nfunction createFoodInfo(food) {\r\n  let foodInfo = document.createElement(\"div\");\r\n  foodInfo.classList.add(\"food-info\");\r\n\r\n  let foodNamePrice = document.createElement(\"div\");\r\n  foodNamePrice.classList.add(\"food-name-price\");\r\n\r\n  let foodName = document.createElement(\"div\");\r\n  foodName.classList.add(\"food-name\");\r\n  foodName.textContent = food.name;\r\n\r\n  let foodPrice = document.createElement(\"div\");\r\n  foodPrice.classList.add(\"food-price\");\r\n  foodPrice.textContent = food.price;\r\n\r\n  let foodDescription = document.createElement(\"div\");\r\n  foodDescription.classList.add(\"food-description\");\r\n  foodDescription.textContent = `Lorem ipsum dolor sit amet consectetur elit. Repellendus odiodolor explicabo eligendi sunt`;\r\n\r\n  foodNamePrice.append(foodName, foodPrice);\r\n  foodInfo.append(foodNamePrice, foodDescription);\r\n  return foodInfo;\r\n}\r\n\n\n//# sourceURL=webpack://restaurantpage/./src/createMenuPage.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _createAboutUsPage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createAboutUsPage */ \"./src/createAboutUsPage.js\");\n/* harmony import */ var _createHeader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./createHeader */ \"./src/createHeader.js\");\n/* harmony import */ var _createIntroduction__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./createIntroduction */ \"./src/createIntroduction.js\");\n/* harmony import */ var _createMenuPage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./createMenuPage */ \"./src/createMenuPage.js\");\n/* harmony import */ var _createContactPage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./createContactPage */ \"./src/createContactPage.js\");\n\r\n\r\n\r\n\r\n\r\n\r\nconst content = document.getElementById(\"content\");\r\n\r\ncreatePage();\r\nfunction createPage() {\r\n  document.body.prepend((0,_createHeader__WEBPACK_IMPORTED_MODULE_1__.createHeader)(), (0,_createIntroduction__WEBPACK_IMPORTED_MODULE_2__.createIntroduction)());\r\n  let aboutUs = (0,_createAboutUsPage__WEBPACK_IMPORTED_MODULE_0__.createAboutUsContent)();\r\n  content.classList.add(\"about-us\"); // add 'active' to see about us page\r\n  content.append(aboutUs.title, aboutUs.script);\r\n  document.body.append(createFooter());\r\n}\r\n\r\ndocument.body.addEventListener(\"click\", function (event) {\r\n  if (event.target.id == \"menu\") {\r\n    clearContent();\r\n    renderMenuPage();\r\n  } else if (event.target.id == \"about\") {\r\n    clearContent();\r\n    renderAboutUsPage();\r\n  } else if(event.target.id == 'contact') {\r\n    clearContent();\r\n    renderContactPage();\r\n  }\r\n});\r\n\r\nfunction clearContent() {\r\n  content.classList.remove(\"menu\");\r\n  content.classList.remove(\"about-us\");\r\n  content.replaceChildren();\r\n}\r\n\r\nfunction renderMenuPage() {\r\n  content.classList.add(\"menu\");\r\n  content.append((0,_createMenuPage__WEBPACK_IMPORTED_MODULE_3__.createStarterMenu)(), (0,_createMenuPage__WEBPACK_IMPORTED_MODULE_3__.createMainMenu)());\r\n}\r\n\r\nfunction renderAboutUsPage() {\r\n  let aboutUs = (0,_createAboutUsPage__WEBPACK_IMPORTED_MODULE_0__.createAboutUsContent)();\r\n  content.classList.add(\"about-us\"); // add 'active' to see about us page\r\n  content.append(aboutUs.title, aboutUs.script);\r\n}\r\n\r\nfunction renderContactPage() {\r\n    content.append((0,_createContactPage__WEBPACK_IMPORTED_MODULE_4__.createContactForm)());\r\n}\r\n\r\nfunction createFooter() {\r\n  let footer = document.createElement(\"footer\");\r\n  footer.innerHTML = \"&copysr; Hoang Manh Hung 2023\";\r\n  return footer;\r\n}\r\n\n\n//# sourceURL=webpack://restaurantpage/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;