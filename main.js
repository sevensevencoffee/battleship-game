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

/***/ "./src/dom.js":
/*!********************!*\
  !*** ./src/dom.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   renderGameboards: () => (/* binding */ renderGameboards),\n/* harmony export */   setupEventListeners: () => (/* binding */ setupEventListeners)\n/* harmony export */ });\n/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index */ \"./src/index.js\");\n\nfunction renderGameboards(playerGameboard, computerGameboard) {\n  var playerBoard = document.getElementById('player-board');\n  var computerBoard = document.getElementById('computer-board');\n  renderBoard(playerBoard, playerGameboard, false);\n  if (computerGameboard) {\n    renderBoard(computerBoard, computerGameboard, true);\n  } else {\n    computerBoard.innerHTML = '';\n  }\n}\nfunction renderBoard(boardElement, gameboard, isEnemy) {\n  boardElement.innerHTML = '';\n  for (var y = 0; y < 10; y++) {\n    for (var x = 0; x < 10; x++) {\n      var cell = document.createElement('div');\n      cell.classList.add('cell');\n      cell.dataset.x = x;\n      cell.dataset.y = y;\n      if (!isEnemy && gameboard.board[x][y] && gameboard.board[x][y].ship instanceof Object) {\n        cell.classList.add('ship');\n      }\n      var coordinateString = \"\".concat(x, \",\").concat(y);\n      if (gameboard.receivedAttacks.has(coordinateString)) {\n        if (gameboard.board[x][y] && gameboard.board[x][y].ship instanceof Object) {\n          cell.classList.add('hit');\n        } else {\n          cell.classList.add('missed');\n        }\n      }\n      boardElement.appendChild(cell);\n    }\n  }\n}\nfunction checkWin(playerGameboard, computerGameboard) {\n  console.log(\"Checking win condition...\");\n  if (computerGameboard.allShipsSunk()) {\n    console.log(\"All computer ships sunk. Player wins!\");\n    (0,_index__WEBPACK_IMPORTED_MODULE_0__.gameOver)('Player');\n    return true;\n  } else if (playerGameboard.allShipsSunk()) {\n    console.log(\"All player ships sunk. Computer wins!\");\n    (0,_index__WEBPACK_IMPORTED_MODULE_0__.gameOver)('Computer');\n    return true;\n  }\n  return false;\n}\nfunction setupEventListeners(player, computer) {\n  var computerBoard = document.getElementById('computer-board');\n  var _handleClick = function handleClick(e) {\n    if (_index__WEBPACK_IMPORTED_MODULE_0__.isGameOver) return;\n    if (e.target.classList.contains('cell') && !e.target.classList.contains('hit') && !e.target.classList.contains('missed')) {\n      var x = parseInt(e.target.dataset.x);\n      var y = parseInt(e.target.dataset.y);\n      console.log(\"Attacking coordinates: (\".concat(x, \", \").concat(y, \")\"));\n      var hit;\n      do {\n        hit = player.attack(computer.gameboard, x, y);\n        renderGameboards(player.gameboard, computer.gameboard);\n        if (checkWin(player.gameboard, computer.gameboard)) {\n          // Remove event listener to prevent further clicks\n          computerBoard.removeEventListener('click', _handleClick);\n          return;\n        }\n      } while (hit && !_index__WEBPACK_IMPORTED_MODULE_0__.isGameOver);\n\n      // Check if game is over before scheduling computer's turn\n      if (!_index__WEBPACK_IMPORTED_MODULE_0__.isGameOver) {\n        setTimeout(function () {\n          var computerHit;\n          do {\n            computerHit = computer.attack(player.gameboard);\n            renderGameboards(player.gameboard, computer.gameboard);\n            if (checkWin(player.gameboard, computer.gameboard)) {\n              return;\n            }\n          } while (computerHit && !_index__WEBPACK_IMPORTED_MODULE_0__.isGameOver);\n        }, 500);\n      }\n    }\n  };\n  computerBoard.addEventListener('click', _handleClick);\n}\n\n\n//# sourceURL=webpack://battleship/./src/dom.js?");

/***/ }),

/***/ "./src/gameboard.js":
/*!**************************!*\
  !*** ./src/gameboard.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _ship__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ship */ \"./src/ship.js\");\nfunction _typeof(o) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && \"function\" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? \"symbol\" : typeof o; }, _typeof(o); }\nfunction _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError(\"Cannot call a class as a function\"); }\nfunction _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, \"value\" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }\nfunction _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, \"prototype\", { writable: !1 }), e; }\nfunction _toPropertyKey(t) { var i = _toPrimitive(t, \"string\"); return \"symbol\" == _typeof(i) ? i : i + \"\"; }\nfunction _toPrimitive(t, r) { if (\"object\" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || \"default\"); if (\"object\" != _typeof(i)) return i; throw new TypeError(\"@@toPrimitive must return a primitive value.\"); } return (\"string\" === r ? String : Number)(t); }\n\nvar Gameboard = /*#__PURE__*/function () {\n  function Gameboard(owner) {\n    _classCallCheck(this, Gameboard);\n    this.owner = owner;\n    this.ships = [];\n    this.missedAttacks = [];\n    this.board = Array(10).fill(null).map(function () {\n      return Array(10).fill(null);\n    });\n    this.receivedAttacks = new Set();\n  }\n  return _createClass(Gameboard, [{\n    key: \"placeShip\",\n    value: function placeShip(length, x, y, isVertical) {\n      var ship = new _ship__WEBPACK_IMPORTED_MODULE_0__[\"default\"](length);\n      if (this.canPlaceShip(length, x, y, isVertical)) {\n        for (var i = 0; i < length; i++) {\n          if (isVertical) {\n            this.board[x][y + i] = {\n              ship: ship,\n              index: i\n            };\n          } else {\n            this.board[x + i][y] = {\n              ship: ship,\n              index: i\n            };\n          }\n        }\n        this.ships.push(ship);\n        return true;\n      }\n      return false;\n    }\n  }, {\n    key: \"canPlaceShip\",\n    value: function canPlaceShip(length, x, y, isVertical) {\n      if (isVertical) {\n        if (y + length > 10) return false;\n        for (var i = 0; i < length; i++) {\n          if (this.board[x][y + i] !== null) return false;\n        }\n      } else {\n        if (x + length > 10) return false;\n        for (var _i = 0; _i < length; _i++) {\n          if (this.board[x + _i][y] !== null) return false;\n        }\n      }\n      return true;\n    }\n  }, {\n    key: \"receiveAttack\",\n    value: function receiveAttack(x, y) {\n      var coordinateString = \"\".concat(x, \",\").concat(y);\n      if (this.receivedAttacks.has(coordinateString)) {\n        return false; // Already attacked this position\n      }\n      this.receivedAttacks.add(coordinateString);\n      if (this.board[x][y] && this.board[x][y].ship instanceof _ship__WEBPACK_IMPORTED_MODULE_0__[\"default\"]) {\n        var ship = this.board[x][y].ship;\n        ship.hit();\n        return true;\n      } else {\n        this.missedAttacks.push({\n          x: x,\n          y: y\n        });\n        return false;\n      }\n    }\n  }, {\n    key: \"allShipsSunk\",\n    value: function allShipsSunk() {\n      var result = this.ships.every(function (ship) {\n        return ship.isSunk();\n      });\n      return result;\n    }\n  }]);\n}();\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Gameboard);\n\n//# sourceURL=webpack://battleship/./src/gameboard.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   gameOver: () => (/* binding */ gameOver),\n/* harmony export */   isGameOver: () => (/* binding */ isGameOver),\n/* harmony export */   startGame: () => (/* binding */ startGame)\n/* harmony export */ });\n/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./player */ \"./src/player.js\");\n/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dom */ \"./src/dom.js\");\n/* harmony import */ var _shipPlacement__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shipPlacement */ \"./src/shipPlacement.js\");\n/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles.css */ \"./src/styles.css\");\n\n\n\n\nvar player, computer;\nvar isGameOver = false;\ndocument.addEventListener('DOMContentLoaded', function () {\n  player = new _player__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\n  computer = new _player__WEBPACK_IMPORTED_MODULE_0__[\"default\"](true);\n\n  // Place ships for the computer randomly\n  computer.placeShipsRandomly();\n\n  // Render the initial gameboards\n  (0,_dom__WEBPACK_IMPORTED_MODULE_1__.renderGameboards)(player.gameboard, null);\n\n  // Set up ship placement for the player\n  (0,_shipPlacement__WEBPACK_IMPORTED_MODULE_2__.setupShipPlacement)(player);\n  console.log('Game initialized');\n});\n\n\nfunction startGame() {\n  // Clean up ship placement event listeners\n  if (typeof _shipPlacement__WEBPACK_IMPORTED_MODULE_2__.cleanupShipPlacement === 'function') {\n    (0,_shipPlacement__WEBPACK_IMPORTED_MODULE_2__.cleanupShipPlacement)();\n  }\n\n  // Render the gameboards with both player and computer boards\n  (0,_dom__WEBPACK_IMPORTED_MODULE_1__.renderGameboards)(player.gameboard, computer.gameboard);\n\n  // Set up the main game event listeners\n  (0,_dom__WEBPACK_IMPORTED_MODULE_1__.setupEventListeners)(player, computer);\n  console.log('Game started');\n}\nfunction gameOver(winner) {\n  isGameOver = true;\n  console.log(\"Game Over! \".concat(winner, \" wins!\"));\n  var gameOverMessage = document.createElement('div');\n  gameOverMessage.id = 'game-over-message';\n  gameOverMessage.textContent = \"Game Over! \".concat(winner, \" wins!\");\n  gameOverMessage.style.cssText = \"\\n    position: fixed;\\n    top: 50%;\\n    left: 50%;\\n    transform: translate(-50%, -50%);\\n    background-color: rgba(0, 0, 0, 0.8);\\n    color: white;\\n    padding: 20px;\\n    border-radius: 10px;\\n    font-size: 24px;\\n    z-index: 1000;\\n    text-align: center;\\n  \";\n  var restartButton = document.createElement('button');\n  restartButton.textContent = 'Restart Game';\n  restartButton.style.cssText = \"\\n    display: block;\\n    margin-top: 10px;\\n    padding: 10px;\\n    background-color: #4CAF50;\\n    color: white;\\n    border: none;\\n    border-radius: 5px;\\n    cursor: pointer;\\n  \";\n  restartButton.addEventListener('click', function () {\n    location.reload();\n  });\n  gameOverMessage.appendChild(restartButton);\n  document.body.appendChild(gameOverMessage);\n\n  // Disable further clicks on the game board\n  var actionButtons = document.querySelectorAll('.cell');\n  actionButtons.forEach(function (button) {\n    button.style.pointerEvents = 'none';\n  });\n}\n\n//# sourceURL=webpack://battleship/./src/index.js?");

/***/ }),

/***/ "./src/player.js":
/*!***********************!*\
  !*** ./src/player.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _gameboard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gameboard */ \"./src/gameboard.js\");\nfunction _typeof(o) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && \"function\" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? \"symbol\" : typeof o; }, _typeof(o); }\nfunction _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError(\"Cannot call a class as a function\"); }\nfunction _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, \"value\" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }\nfunction _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, \"prototype\", { writable: !1 }), e; }\nfunction _toPropertyKey(t) { var i = _toPrimitive(t, \"string\"); return \"symbol\" == _typeof(i) ? i : i + \"\"; }\nfunction _toPrimitive(t, r) { if (\"object\" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || \"default\"); if (\"object\" != _typeof(i)) return i; throw new TypeError(\"@@toPrimitive must return a primitive value.\"); } return (\"string\" === r ? String : Number)(t); }\n\nvar Player = /*#__PURE__*/function () {\n  function Player() {\n    var isComputer = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;\n    _classCallCheck(this, Player);\n    this.isComputer = isComputer;\n    this.gameboard = new _gameboard__WEBPACK_IMPORTED_MODULE_0__[\"default\"](isComputer ? 'Computer' : 'Player');\n    this.attackedCoordinates = new Set();\n  }\n  return _createClass(Player, [{\n    key: \"attack\",\n    value: function attack(enemyGameboard, x, y) {\n      if (this.isComputer) {\n        var _this$getRandomCoordi = this.getRandomCoordinates(enemyGameboard);\n        x = _this$getRandomCoordi.x;\n        y = _this$getRandomCoordi.y;\n      }\n      var coordinateString = \"\".concat(x, \",\").concat(y);\n      if (this.attackedCoordinates.has(coordinateString)) {\n        return false;\n      }\n      this.attackedCoordinates.add(coordinateString);\n      return enemyGameboard.receiveAttack(x, y);\n    }\n  }, {\n    key: \"getRandomCoordinates\",\n    value: function getRandomCoordinates(enemyGameboard) {\n      var x, y;\n      do {\n        x = Math.floor(Math.random() * 10);\n        y = Math.floor(Math.random() * 10);\n      } while (this.attackedCoordinates.has(\"\".concat(x, \",\").concat(y)) || enemyGameboard.receivedAttacks.has(\"\".concat(x, \",\").concat(y)));\n      return {\n        x: x,\n        y: y\n      };\n    }\n  }, {\n    key: \"placeShipsRandomly\",\n    value: function placeShipsRandomly() {\n      var _this = this;\n      var ships = [{\n        length: 5,\n        name: 'Carrier'\n      }, {\n        length: 4,\n        name: 'Battleship'\n      }, {\n        length: 3,\n        name: 'Cruiser'\n      }, {\n        length: 3,\n        name: 'Submarine'\n      }, {\n        length: 2,\n        name: 'Destroyer'\n      }];\n      ships.forEach(function (ship) {\n        var placed = false;\n        while (!placed) {\n          var x = Math.floor(Math.random() * 10);\n          var y = Math.floor(Math.random() * 10);\n          var isVertical = Math.random() < 0.5;\n          placed = _this.gameboard.placeShip(ship.length, x, y, isVertical);\n        }\n      });\n    }\n  }]);\n}();\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Player);\n\n//# sourceURL=webpack://battleship/./src/player.js?");

/***/ }),

/***/ "./src/ship.js":
/*!*********************!*\
  !*** ./src/ship.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction _typeof(o) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && \"function\" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? \"symbol\" : typeof o; }, _typeof(o); }\nfunction _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError(\"Cannot call a class as a function\"); }\nfunction _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, \"value\" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }\nfunction _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, \"prototype\", { writable: !1 }), e; }\nfunction _toPropertyKey(t) { var i = _toPrimitive(t, \"string\"); return \"symbol\" == _typeof(i) ? i : i + \"\"; }\nfunction _toPrimitive(t, r) { if (\"object\" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || \"default\"); if (\"object\" != _typeof(i)) return i; throw new TypeError(\"@@toPrimitive must return a primitive value.\"); } return (\"string\" === r ? String : Number)(t); }\nvar Ship = /*#__PURE__*/function () {\n  function Ship(length) {\n    _classCallCheck(this, Ship);\n    this.length = length;\n    this.hits = 0;\n  }\n  return _createClass(Ship, [{\n    key: \"hit\",\n    value: function hit() {\n      this.hits++;\n    }\n  }, {\n    key: \"isSunk\",\n    value: function isSunk() {\n      return this.hits >= this.length;\n    }\n  }]);\n}();\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Ship);\n\n//# sourceURL=webpack://battleship/./src/ship.js?");

/***/ }),

/***/ "./src/shipPlacement.js":
/*!******************************!*\
  !*** ./src/shipPlacement.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   cleanupShipPlacement: () => (/* binding */ cleanupShipPlacement),\n/* harmony export */   setupShipPlacement: () => (/* binding */ setupShipPlacement)\n/* harmony export */ });\n/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom */ \"./src/dom.js\");\n/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index */ \"./src/index.js\");\n\n\nvar currentShipIndex = 0;\nvar ships = [{\n  length: 5,\n  name: 'Carrier'\n}, {\n  length: 4,\n  name: 'Battleship'\n}, {\n  length: 3,\n  name: 'Cruiser'\n}, {\n  length: 3,\n  name: 'Submarine'\n}, {\n  length: 2,\n  name: 'Destroyer'\n}];\nvar isVertical = true;\nvar player;\nvar cleanupFns = [];\nfunction setupShipPlacement(p) {\n  player = p;\n  var playerBoard = document.getElementById('player-board');\n\n  // Instructions\n  var instructions = document.getElementById('instructions');\n\n  // Instruction Text\n  var instructionText = document.createElement('div');\n  instructionText.id = 'instruction-text';\n  instructions.appendChild(instructionText);\n\n  // Rotate Button\n  var rotateButton = document.createElement('button');\n  rotateButton.textContent = isVertical ? 'Rotate Ship (Vertical)' : 'Rotate Ship (Horizontal)';\n  rotateButton.id = 'rotate-button';\n  rotateButton.addEventListener('click', function () {\n    isVertical = !isVertical;\n    rotateButton.textContent = isVertical ? 'Rotate Ship (Vertical)' : 'Rotate Ship (Horizontal)';\n  });\n  instructions.appendChild(rotateButton);\n  updateInstructions();\n  var handleCellClick = function handleCellClick(e) {\n    if (e.target.classList.contains('cell')) {\n      var x = parseInt(e.target.dataset.x);\n      var y = parseInt(e.target.dataset.y);\n      if (player.gameboard.placeShip(ships[currentShipIndex].length, x, y, isVertical)) {\n        currentShipIndex++;\n        (0,_dom__WEBPACK_IMPORTED_MODULE_0__.renderGameboards)(player.gameboard, null);\n        if (currentShipIndex < ships.length) {\n          updateInstructions();\n        } else {\n          // All ships placed\n          finishPlacement();\n        }\n      } else {\n        alert('Cannot place ship there.');\n      }\n    }\n  };\n  playerBoard.addEventListener('click', handleCellClick);\n  cleanupFns.push(function () {\n    playerBoard.removeEventListener('click', handleCellClick);\n  });\n}\nfunction updateInstructions() {\n  var instructionText = document.getElementById('instruction-text');\n  instructionText.textContent = \"Place your \".concat(ships[currentShipIndex].name, \" (length \").concat(ships[currentShipIndex].length, \"). Click on cells to place.\");\n}\nfunction finishPlacement() {\n  var instructions = document.getElementById('instructions');\n  instructions.innerHTML = ''; // Clear existing instructions\n\n  var completionMessage = document.createElement('div');\n  completionMessage.textContent = 'All ships placed. Click \"Start Game\" to begin.';\n  instructions.appendChild(completionMessage);\n\n  // Start Game Button\n  var startButton = document.createElement('button');\n  startButton.textContent = 'Start Game';\n  startButton.id = 'start-game-button';\n  startButton.addEventListener('click', function () {\n    cleanupShipPlacement();\n    (0,_index__WEBPACK_IMPORTED_MODULE_1__.startGame)();\n  });\n  instructions.appendChild(startButton);\n}\nfunction cleanupShipPlacement() {\n  cleanupFns.forEach(function (cleanupFn) {\n    return cleanupFn();\n  });\n  cleanupFns = [];\n  var instructions = document.getElementById('instructions');\n  instructions.innerHTML = '';\n}\n\n//# sourceURL=webpack://battleship/./src/shipPlacement.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `body {\n  font-family: monospace;\n  text-align: center;\n}\n\n.boards-container {\n  display: flex;\n  justify-content: center;\n  margin-top: 20px;\n}\n\n.board {\n  display: grid;\n  grid-template-columns: repeat(10, 30px);\n  grid-gap: 2px;\n  margin: 0 20px;\n}\n\n.cell {\n  width: 30px;\n  height: 30px;\n  background-color: #739ad2;\n  cursor: pointer;\n}\n\n.cell.ship {\n  background-color: #adadad;\n}\n\n.cell.hit {\n  background-color: rgb(255, 66, 66);\n}\n\n.cell.missed {\n  background-color: rgb(63, 63, 241);\n}\n\n#instructions {\n  margin-bottom: 20px;\n}\n\nbutton {\n  font-family: monospace;\n  margin-top: 10px;\n  padding: 10px;\n  background-color: #efb344;\n  color: white;\n  border: none;\n  border-radius: 5px;\n  cursor: pointer;\n}\n`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://battleship/./src/styles.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://battleship/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://battleship/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ \"./node_modules/css-loader/dist/cjs.js!./src/styles.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\noptions.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://battleship/./src/styles.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

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
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;