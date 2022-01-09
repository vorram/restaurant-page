/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 234:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ contacts)
/* harmony export */ });
function contacts() {
    const container = document.querySelector('.container');
    while (container.firstChild) {
        container.firstChild.remove();
    }

    const contactsBox = document.createElement('div');
    contactsBox.classList.add('contacts-box');
    const textContainer = document.createElement('div');
    textContainer.classList.add('text-container');
    const address = document.createElement('p');
    const phone = document.createElement('p');
    const email = document.createElement('p');
    const map = document.createElement('div');
    map.classList.add('map');
    address.textContent = '8086 Evolution Rd, Jacksonville, FL'
    textContainer.appendChild(address);
    phone.textContent = 'Tel. 1-800-5432-1905'
    textContainer.appendChild(phone);
    email.textContent = 'E-mail: staff@steakhouse.com';
    textContainer.appendChild(email);
    contactsBox.appendChild(textContainer);
    contactsBox.appendChild(map);
    container.appendChild(contactsBox);
}

/***/ }),

/***/ 666:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ home)
/* harmony export */ });
function home () {
    const container = document.querySelector('.container');
    while (container.firstChild) {
        container.firstChild.remove();
    }

    const messageBox = document.createElement('div');
    messageBox.classList.add('message-box');
    messageBox.textContent = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis rutrum, est quis luctus lobortis, lacus purus sodales tortor, tincidunt auctor magna urna sed nisi. Proin convallis sapien metus, eu condimentum dui euismod et. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Etiam ornare nec justo sed ornare. Nunc egestas pretium nisi non dictum. Morbi venenatis eget lacus vitae cursus. Etiam est mi, euismod eget elementum sed, suscipit vitae massa.';
    container.appendChild(messageBox);
}

/***/ }),

/***/ 83:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ menu)
/* harmony export */ });
/* harmony import */ var _steak_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(725);


function menu() {
    const container = document.querySelector('.container');
    while (container.firstChild) {
        container.firstChild.remove();
    }

    const menuBox = document.createElement('div');
    menuBox.classList.add('menu-box');
    container.appendChild(menuBox);

    let menuArray = [];
    class MenuItem {
        constructor(name, price, picture) {
            this.name = name;
            this.price = price;
            this.picture = picture;
        }
    }
    const steakOne = new MenuItem('Steak One', '$10', _steak_jpg__WEBPACK_IMPORTED_MODULE_0__);
    menuArray.push(steakOne);
    const steakTwo = new MenuItem('Steak Two', '$20', _steak_jpg__WEBPACK_IMPORTED_MODULE_0__);
    menuArray.push(steakTwo);
    const steakThree = new MenuItem('Steak Three', '$30', _steak_jpg__WEBPACK_IMPORTED_MODULE_0__);
    menuArray.push(steakThree);

    menuArray.forEach(function(item) {
        const itemBox = document.createElement('div');
        itemBox.classList.add('item-box');
        menuBox.appendChild(itemBox);

        const itemPicture = new Image();
        itemPicture.classList.add('item-picture');
        itemPicture.src = item.picture;
        itemBox.appendChild(itemPicture);

        const itemName = document.createElement('div');
        itemName.classList.add('item-name');
        itemName.textContent = item.name;
        itemBox.appendChild(itemName);

        const itemPrice = document.createElement('div');
        itemPrice.classList.add('item-price');
        itemPrice.textContent = item.price;
        itemBox.appendChild(itemPrice);
    });
}

/***/ }),

/***/ 984:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "4333cf7091b8de6f18e0.png";

/***/ }),

/***/ 181:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "b6dea22dd47b0a62832f.jpg";

/***/ }),

/***/ 725:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "7abbeeac66a014dc299f.jpg";

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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/* harmony import */ var _restaurant_interior_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(181);
/* harmony import */ var _map_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(984);
/* harmony import */ var _home_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(666);
/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(83);
/* harmony import */ var _contacts_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(234);







function homepage() {
    const content = document.createElement('div');
    content.setAttribute('id', 'content');

    const header = document.createElement('div');
    header.classList.add('header');
    const title = document.createElement('h1');
    title.textContent = 'Steak House';
    header.appendChild(title);
    const buttonContainer = document.createElement('div');
    buttonContainer.classList.add('button-container');
    header.appendChild(buttonContainer);
    const homeButton = document.createElement('button');
    homeButton.setAttribute('id', 'home-button');
    homeButton.textContent = 'HOME';
    homeButton.addEventListener('click', _home_js__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z);
    buttonContainer.appendChild(homeButton);
    const menuButton = document.createElement('button');
    menuButton.setAttribute('id', 'menu-button');
    menuButton.textContent = 'MENU';
    menuButton.addEventListener('click', _menu_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z);
    buttonContainer.appendChild(menuButton);
    const contactsButton = document.createElement('button');
    contactsButton.setAttribute('id', 'contacts-button');
    contactsButton.textContent = 'CONTACTS';
    contactsButton.addEventListener('click', _contacts_js__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z);
    buttonContainer.appendChild(contactsButton);
    content.appendChild(header);

    const container = document.createElement('div');
    container.classList.add('container');
    const messageBox = document.createElement('div');
    messageBox.classList.add('message-box');
    messageBox.textContent = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis rutrum, est quis luctus lobortis, lacus purus sodales tortor, tincidunt auctor magna urna sed nisi. Proin convallis sapien metus, eu condimentum dui euismod et. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Etiam ornare nec justo sed ornare. Nunc egestas pretium nisi non dictum. Morbi venenatis eget lacus vitae cursus. Etiam est mi, euismod eget elementum sed, suscipit vitae massa.';
    container.appendChild(messageBox);
    content.appendChild(container);

    const footer = document.createElement('div');
    footer.classList.add('footer');
    const bgCredit = document.createElement('p');
    bgCredit.textContent = 'Background image source:';
    footer.appendChild(bgCredit);
    const bgLink = document.createElement('a');
    bgLink.textContent = 'quark-studio.com';
    bgLink.href = 'https://quark-studio.com/';
    footer.appendChild(bgLink);
    const imageCredit = document.createElement('p');
    imageCredit.textContent = 'Steak image source:';
    footer.appendChild(imageCredit);
    const imageLink = document.createElement('a');
    imageLink.textContent = 'jessicagavin.com';
    imageLink.href = 'https://www.jessicagavin.com/';
    footer.appendChild(imageLink);
    content.appendChild(footer);
 
    return content;
}

document.body.appendChild(homepage());
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDeEJlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHFWQUFxVjtBQUNyVjtBQUNBOzs7Ozs7Ozs7OztBQ1ZnQzs7QUFFakI7QUFDZjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNEQUFzRCx1Q0FBSztBQUMzRDtBQUNBLHNEQUFzRCx1Q0FBSztBQUMzRDtBQUNBLDBEQUEwRCx1Q0FBSztBQUMvRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDL0NBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBLENBQUM7Ozs7O1dDUEQ7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7Ozs7Ozs7OztBQ2ZxQjtBQUNjO0FBQ2hCO0FBQ1U7QUFDQTtBQUNROztBQUVyQztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlDQUF5Qyx5REFBSTtBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBLHlDQUF5Qyx5REFBSTtBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBLDZDQUE2Qyw2REFBUTtBQUNyRDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscVZBQXFWO0FBQ3JWO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxzQyIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9jb250YWN0cy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaG9tZS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvbWVudS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNvbnRhY3RzKCkge1xuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250YWluZXInKTtcbiAgICB3aGlsZSAoY29udGFpbmVyLmZpcnN0Q2hpbGQpIHtcbiAgICAgICAgY29udGFpbmVyLmZpcnN0Q2hpbGQucmVtb3ZlKCk7XG4gICAgfVxuXG4gICAgY29uc3QgY29udGFjdHNCb3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb250YWN0c0JveC5jbGFzc0xpc3QuYWRkKCdjb250YWN0cy1ib3gnKTtcbiAgICBjb25zdCB0ZXh0Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdGV4dENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCd0ZXh0LWNvbnRhaW5lcicpO1xuICAgIGNvbnN0IGFkZHJlc3MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgY29uc3QgcGhvbmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgY29uc3QgZW1haWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgY29uc3QgbWFwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbWFwLmNsYXNzTGlzdC5hZGQoJ21hcCcpO1xuICAgIGFkZHJlc3MudGV4dENvbnRlbnQgPSAnODA4NiBFdm9sdXRpb24gUmQsIEphY2tzb252aWxsZSwgRkwnXG4gICAgdGV4dENvbnRhaW5lci5hcHBlbmRDaGlsZChhZGRyZXNzKTtcbiAgICBwaG9uZS50ZXh0Q29udGVudCA9ICdUZWwuIDEtODAwLTU0MzItMTkwNSdcbiAgICB0ZXh0Q29udGFpbmVyLmFwcGVuZENoaWxkKHBob25lKTtcbiAgICBlbWFpbC50ZXh0Q29udGVudCA9ICdFLW1haWw6IHN0YWZmQHN0ZWFraG91c2UuY29tJztcbiAgICB0ZXh0Q29udGFpbmVyLmFwcGVuZENoaWxkKGVtYWlsKTtcbiAgICBjb250YWN0c0JveC5hcHBlbmRDaGlsZCh0ZXh0Q29udGFpbmVyKTtcbiAgICBjb250YWN0c0JveC5hcHBlbmRDaGlsZChtYXApO1xuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChjb250YWN0c0JveCk7XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaG9tZSAoKSB7XG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRhaW5lcicpO1xuICAgIHdoaWxlIChjb250YWluZXIuZmlyc3RDaGlsZCkge1xuICAgICAgICBjb250YWluZXIuZmlyc3RDaGlsZC5yZW1vdmUoKTtcbiAgICB9XG5cbiAgICBjb25zdCBtZXNzYWdlQm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbWVzc2FnZUJveC5jbGFzc0xpc3QuYWRkKCdtZXNzYWdlLWJveCcpO1xuICAgIG1lc3NhZ2VCb3gudGV4dENvbnRlbnQgPSAnTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2NpbmcgZWxpdC4gRHVpcyBydXRydW0sIGVzdCBxdWlzIGx1Y3R1cyBsb2JvcnRpcywgbGFjdXMgcHVydXMgc29kYWxlcyB0b3J0b3IsIHRpbmNpZHVudCBhdWN0b3IgbWFnbmEgdXJuYSBzZWQgbmlzaS4gUHJvaW4gY29udmFsbGlzIHNhcGllbiBtZXR1cywgZXUgY29uZGltZW50dW0gZHVpIGV1aXNtb2QgZXQuIFZlc3RpYnVsdW0gYW50ZSBpcHN1bSBwcmltaXMgaW4gZmF1Y2lidXMgb3JjaSBsdWN0dXMgZXQgdWx0cmljZXMgcG9zdWVyZSBjdWJpbGlhIGN1cmFlOyBFdGlhbSBvcm5hcmUgbmVjIGp1c3RvIHNlZCBvcm5hcmUuIE51bmMgZWdlc3RhcyBwcmV0aXVtIG5pc2kgbm9uIGRpY3R1bS4gTW9yYmkgdmVuZW5hdGlzIGVnZXQgbGFjdXMgdml0YWUgY3Vyc3VzLiBFdGlhbSBlc3QgbWksIGV1aXNtb2QgZWdldCBlbGVtZW50dW0gc2VkLCBzdXNjaXBpdCB2aXRhZSBtYXNzYS4nO1xuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChtZXNzYWdlQm94KTtcbn0iLCJpbXBvcnQgU3RlYWsgZnJvbSAnLi9zdGVhay5qcGcnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBtZW51KCkge1xuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250YWluZXInKTtcbiAgICB3aGlsZSAoY29udGFpbmVyLmZpcnN0Q2hpbGQpIHtcbiAgICAgICAgY29udGFpbmVyLmZpcnN0Q2hpbGQucmVtb3ZlKCk7XG4gICAgfVxuXG4gICAgY29uc3QgbWVudUJveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG1lbnVCb3guY2xhc3NMaXN0LmFkZCgnbWVudS1ib3gnKTtcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQobWVudUJveCk7XG5cbiAgICBsZXQgbWVudUFycmF5ID0gW107XG4gICAgY2xhc3MgTWVudUl0ZW0ge1xuICAgICAgICBjb25zdHJ1Y3RvcihuYW1lLCBwcmljZSwgcGljdHVyZSkge1xuICAgICAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICAgICAgICAgIHRoaXMucHJpY2UgPSBwcmljZTtcbiAgICAgICAgICAgIHRoaXMucGljdHVyZSA9IHBpY3R1cmU7XG4gICAgICAgIH1cbiAgICB9XG4gICAgY29uc3Qgc3RlYWtPbmUgPSBuZXcgTWVudUl0ZW0oJ1N0ZWFrIE9uZScsICckMTAnLCBTdGVhayk7XG4gICAgbWVudUFycmF5LnB1c2goc3RlYWtPbmUpO1xuICAgIGNvbnN0IHN0ZWFrVHdvID0gbmV3IE1lbnVJdGVtKCdTdGVhayBUd28nLCAnJDIwJywgU3RlYWspO1xuICAgIG1lbnVBcnJheS5wdXNoKHN0ZWFrVHdvKTtcbiAgICBjb25zdCBzdGVha1RocmVlID0gbmV3IE1lbnVJdGVtKCdTdGVhayBUaHJlZScsICckMzAnLCBTdGVhayk7XG4gICAgbWVudUFycmF5LnB1c2goc3RlYWtUaHJlZSk7XG5cbiAgICBtZW51QXJyYXkuZm9yRWFjaChmdW5jdGlvbihpdGVtKSB7XG4gICAgICAgIGNvbnN0IGl0ZW1Cb3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgaXRlbUJveC5jbGFzc0xpc3QuYWRkKCdpdGVtLWJveCcpO1xuICAgICAgICBtZW51Qm94LmFwcGVuZENoaWxkKGl0ZW1Cb3gpO1xuXG4gICAgICAgIGNvbnN0IGl0ZW1QaWN0dXJlID0gbmV3IEltYWdlKCk7XG4gICAgICAgIGl0ZW1QaWN0dXJlLmNsYXNzTGlzdC5hZGQoJ2l0ZW0tcGljdHVyZScpO1xuICAgICAgICBpdGVtUGljdHVyZS5zcmMgPSBpdGVtLnBpY3R1cmU7XG4gICAgICAgIGl0ZW1Cb3guYXBwZW5kQ2hpbGQoaXRlbVBpY3R1cmUpO1xuXG4gICAgICAgIGNvbnN0IGl0ZW1OYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGl0ZW1OYW1lLmNsYXNzTGlzdC5hZGQoJ2l0ZW0tbmFtZScpO1xuICAgICAgICBpdGVtTmFtZS50ZXh0Q29udGVudCA9IGl0ZW0ubmFtZTtcbiAgICAgICAgaXRlbUJveC5hcHBlbmRDaGlsZChpdGVtTmFtZSk7XG5cbiAgICAgICAgY29uc3QgaXRlbVByaWNlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGl0ZW1QcmljZS5jbGFzc0xpc3QuYWRkKCdpdGVtLXByaWNlJyk7XG4gICAgICAgIGl0ZW1QcmljZS50ZXh0Q29udGVudCA9IGl0ZW0ucHJpY2U7XG4gICAgICAgIGl0ZW1Cb3guYXBwZW5kQ2hpbGQoaXRlbVByaWNlKTtcbiAgICB9KTtcbn0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJpbXBvcnQgJy4vc3R5bGUuY3NzJztcbmltcG9ydCAnLi9yZXN0YXVyYW50LWludGVyaW9yLmpwZyc7XG5pbXBvcnQgJy4vbWFwLnBuZyc7XG5pbXBvcnQgaG9tZSBmcm9tICcuL2hvbWUuanMnO1xuaW1wb3J0IG1lbnUgZnJvbSAnLi9tZW51LmpzJztcbmltcG9ydCBjb250YWN0cyBmcm9tICcuL2NvbnRhY3RzLmpzJztcblxuZnVuY3Rpb24gaG9tZXBhZ2UoKSB7XG4gICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnRlbnQuc2V0QXR0cmlidXRlKCdpZCcsICdjb250ZW50Jyk7XG5cbiAgICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBoZWFkZXIuY2xhc3NMaXN0LmFkZCgnaGVhZGVyJyk7XG4gICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xuICAgIHRpdGxlLnRleHRDb250ZW50ID0gJ1N0ZWFrIEhvdXNlJztcbiAgICBoZWFkZXIuYXBwZW5kQ2hpbGQodGl0bGUpO1xuICAgIGNvbnN0IGJ1dHRvbkNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGJ1dHRvbkNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdidXR0b24tY29udGFpbmVyJyk7XG4gICAgaGVhZGVyLmFwcGVuZENoaWxkKGJ1dHRvbkNvbnRhaW5lcik7XG4gICAgY29uc3QgaG9tZUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGhvbWVCdXR0b24uc2V0QXR0cmlidXRlKCdpZCcsICdob21lLWJ1dHRvbicpO1xuICAgIGhvbWVCdXR0b24udGV4dENvbnRlbnQgPSAnSE9NRSc7XG4gICAgaG9tZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGhvbWUpO1xuICAgIGJ1dHRvbkNvbnRhaW5lci5hcHBlbmRDaGlsZChob21lQnV0dG9uKTtcbiAgICBjb25zdCBtZW51QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgbWVudUJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ2lkJywgJ21lbnUtYnV0dG9uJyk7XG4gICAgbWVudUJ1dHRvbi50ZXh0Q29udGVudCA9ICdNRU5VJztcbiAgICBtZW51QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgbWVudSk7XG4gICAgYnV0dG9uQ29udGFpbmVyLmFwcGVuZENoaWxkKG1lbnVCdXR0b24pO1xuICAgIGNvbnN0IGNvbnRhY3RzQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgY29udGFjdHNCdXR0b24uc2V0QXR0cmlidXRlKCdpZCcsICdjb250YWN0cy1idXR0b24nKTtcbiAgICBjb250YWN0c0J1dHRvbi50ZXh0Q29udGVudCA9ICdDT05UQUNUUyc7XG4gICAgY29udGFjdHNCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjb250YWN0cyk7XG4gICAgYnV0dG9uQ29udGFpbmVyLmFwcGVuZENoaWxkKGNvbnRhY3RzQnV0dG9uKTtcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKGhlYWRlcik7XG5cbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb250YWluZXIuY2xhc3NMaXN0LmFkZCgnY29udGFpbmVyJyk7XG4gICAgY29uc3QgbWVzc2FnZUJveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG1lc3NhZ2VCb3guY2xhc3NMaXN0LmFkZCgnbWVzc2FnZS1ib3gnKTtcbiAgICBtZXNzYWdlQm94LnRleHRDb250ZW50ID0gJ0xvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXQuIER1aXMgcnV0cnVtLCBlc3QgcXVpcyBsdWN0dXMgbG9ib3J0aXMsIGxhY3VzIHB1cnVzIHNvZGFsZXMgdG9ydG9yLCB0aW5jaWR1bnQgYXVjdG9yIG1hZ25hIHVybmEgc2VkIG5pc2kuIFByb2luIGNvbnZhbGxpcyBzYXBpZW4gbWV0dXMsIGV1IGNvbmRpbWVudHVtIGR1aSBldWlzbW9kIGV0LiBWZXN0aWJ1bHVtIGFudGUgaXBzdW0gcHJpbWlzIGluIGZhdWNpYnVzIG9yY2kgbHVjdHVzIGV0IHVsdHJpY2VzIHBvc3VlcmUgY3ViaWxpYSBjdXJhZTsgRXRpYW0gb3JuYXJlIG5lYyBqdXN0byBzZWQgb3JuYXJlLiBOdW5jIGVnZXN0YXMgcHJldGl1bSBuaXNpIG5vbiBkaWN0dW0uIE1vcmJpIHZlbmVuYXRpcyBlZ2V0IGxhY3VzIHZpdGFlIGN1cnN1cy4gRXRpYW0gZXN0IG1pLCBldWlzbW9kIGVnZXQgZWxlbWVudHVtIHNlZCwgc3VzY2lwaXQgdml0YWUgbWFzc2EuJztcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQobWVzc2FnZUJveCk7XG4gICAgY29udGVudC5hcHBlbmRDaGlsZChjb250YWluZXIpO1xuXG4gICAgY29uc3QgZm9vdGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZm9vdGVyLmNsYXNzTGlzdC5hZGQoJ2Zvb3RlcicpO1xuICAgIGNvbnN0IGJnQ3JlZGl0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIGJnQ3JlZGl0LnRleHRDb250ZW50ID0gJ0JhY2tncm91bmQgaW1hZ2Ugc291cmNlOic7XG4gICAgZm9vdGVyLmFwcGVuZENoaWxkKGJnQ3JlZGl0KTtcbiAgICBjb25zdCBiZ0xpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG4gICAgYmdMaW5rLnRleHRDb250ZW50ID0gJ3F1YXJrLXN0dWRpby5jb20nO1xuICAgIGJnTGluay5ocmVmID0gJ2h0dHBzOi8vcXVhcmstc3R1ZGlvLmNvbS8nO1xuICAgIGZvb3Rlci5hcHBlbmRDaGlsZChiZ0xpbmspO1xuICAgIGNvbnN0IGltYWdlQ3JlZGl0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIGltYWdlQ3JlZGl0LnRleHRDb250ZW50ID0gJ1N0ZWFrIGltYWdlIHNvdXJjZTonO1xuICAgIGZvb3Rlci5hcHBlbmRDaGlsZChpbWFnZUNyZWRpdCk7XG4gICAgY29uc3QgaW1hZ2VMaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuICAgIGltYWdlTGluay50ZXh0Q29udGVudCA9ICdqZXNzaWNhZ2F2aW4uY29tJztcbiAgICBpbWFnZUxpbmsuaHJlZiA9ICdodHRwczovL3d3dy5qZXNzaWNhZ2F2aW4uY29tLyc7XG4gICAgZm9vdGVyLmFwcGVuZENoaWxkKGltYWdlTGluayk7XG4gICAgY29udGVudC5hcHBlbmRDaGlsZChmb290ZXIpO1xuIFxuICAgIHJldHVybiBjb250ZW50O1xufVxuXG5kb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGhvbWVwYWdlKCkpOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==