(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./app/app.component.css":
/*!*******************************!*\
  !*** ./app/app.component.css ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".title {\r\n\ttext-align:center;\r\n\tmargin-top:50px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkNsaWVudEFwcC9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Q0FDQyxrQkFBa0I7Q0FDbEIsZ0JBQWdCO0NBQ2hCIiwiZmlsZSI6IkNsaWVudEFwcC9hcHAvYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGl0bGUge1xyXG5cdHRleHQtYWxpZ246Y2VudGVyO1xyXG5cdG1hcmdpbi10b3A6NTBweDtcclxufSJdfQ== */"

/***/ }),

/***/ "./app/app.component.html":
/*!********************************!*\
  !*** ./app/app.component.html ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"app-root-container\">\r\n\t<h2 class=\"title\">{{title}}</h2>\r\n\t<app-sudoku-container></app-sudoku-container>\r\n</div>"

/***/ }),

/***/ "./app/app.component.ts":
/*!******************************!*\
  !*** ./app/app.component.ts ***!
  \******************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'Sudoku Programming Assignment';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./app/app.module.ts":
/*!***************************!*\
  !*** ./app/app.module.ts ***!
  \***************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "../node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-bootstrap/tooltip */ "../node_modules/ngx-bootstrap/tooltip/fesm5/ngx-bootstrap-tooltip.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "../node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./app/app.component.ts");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/http */ "../node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _sudoku_container_sudoku_container_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./sudoku-container/sudoku-container.component */ "./app/sudoku-container/sudoku-container.component.ts");
/* harmony import */ var _sudoku_grid_sudoku_grid_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./sudoku-grid/sudoku-grid.component */ "./app/sudoku-grid/sudoku-grid.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ "../node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _modal_modal_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./modal/modal.component */ "./app/modal/modal.component.ts");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-bootstrap/modal */ "../node_modules/ngx-bootstrap/modal/fesm5/ngx-bootstrap-modal.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _sudoku_container_sudoku_container_component__WEBPACK_IMPORTED_MODULE_6__["SudokuContainerComponent"],
                _sudoku_grid_sudoku_grid_component__WEBPACK_IMPORTED_MODULE_7__["SudokuGridComponent"],
                _modal_modal_component__WEBPACK_IMPORTED_MODULE_9__["ModalComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_http__WEBPACK_IMPORTED_MODULE_5__["HttpModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"],
                ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_2__["TooltipModule"].forRoot(),
                ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_10__["ModalModule"].forRoot()
            ],
            entryComponents: [
                _modal_modal_component__WEBPACK_IMPORTED_MODULE_9__["ModalComponent"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./app/modal/modal.component.css":
/*!***************************************!*\
  !*** ./app/modal/modal.component.css ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJDbGllbnRBcHAvYXBwL21vZGFsL21vZGFsLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./app/modal/modal.component.html":
/*!****************************************!*\
  !*** ./app/modal/modal.component.html ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<div class=\"modal-header\">\r\n\t<h6 class=\"modal-title pull-left\">{{title}}</h6>\r\n</div>\r\n<div class=\"modal-body\">\r\n\t<span [innerHtml]=\"message\"></span>\r\n</div>\r\n<div class=\"modal-footer\">\r\n\t<button type=\"button\" id=\"btnOk\" class=\"btn btn-secondary\" (click)=\"btnOkClick()\">OK</button>\r\n</div>\r\n"

/***/ }),

/***/ "./app/modal/modal.component.ts":
/*!**************************************!*\
  !*** ./app/modal/modal.component.ts ***!
  \**************************************/
/*! exports provided: ModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalComponent", function() { return ModalComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "../node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-bootstrap/modal */ "../node_modules/ngx-bootstrap/modal/fesm5/ngx-bootstrap-modal.js");
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-bootstrap */ "../node_modules/ngx-bootstrap/esm5/ngx-bootstrap.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ModalComponent = /** @class */ (function () {
    function ModalComponent(bsModalRef, httpClient, modalService) {
        this.bsModalRef = bsModalRef;
        this.httpClient = httpClient;
        this.modalService = modalService;
    }
    ModalComponent.prototype.ngOnInit = function () {
    };
    ModalComponent.prototype.btnOkClick = function () {
        this.bsModalRef.hide();
    };
    ModalComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-modal',
            template: __webpack_require__(/*! ./modal.component.html */ "./app/modal/modal.component.html"),
            styles: [__webpack_require__(/*! ./modal.component.css */ "./app/modal/modal.component.css")]
        }),
        __metadata("design:paramtypes", [ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_2__["BsModalRef"], _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], ngx_bootstrap__WEBPACK_IMPORTED_MODULE_3__["BsModalService"]])
    ], ModalComponent);
    return ModalComponent;
}());



/***/ }),

/***/ "./app/sudoku-container/sudoku-container.component.css":
/*!*************************************************************!*\
  !*** ./app/sudoku-container/sudoku-container.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "p {\r\n\tfont-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\r\n\tfont-style: italic;\r\n\tcolor: green;\r\n}\r\n\r\n#extra-controls {\r\n\tmargin-top: 100px;\r\n}\r\n\r\n#sudokuInput {\r\n\tmargin-top: 100px;\r\n}\r\n\r\ndiv .app-sudoku-container {\r\n\tmargin-top: 100px;\r\n}\r\n\r\n.margin-btn {\r\n\tmargin: 135px 20px 20px 20px !important\r\n}\r\n\r\n.defaultLength {\r\n\twidth: 70%\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkNsaWVudEFwcC9hcHAvc3Vkb2t1LWNvbnRhaW5lci9zdWRva3UtY29udGFpbmVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Q0FDQyw2REFBNkQ7Q0FDN0QsbUJBQW1CO0NBQ25CLGFBQWE7Q0FDYjs7QUFFRDtDQUNDLGtCQUFrQjtDQUNsQjs7QUFFRDtDQUNDLGtCQUFrQjtDQUNsQjs7QUFFRDtDQUNDLGtCQUFrQjtDQUNsQjs7QUFFRDtDQUNDLHVDQUF1QztDQUN2Qzs7QUFFRDtDQUNDLFVBQVU7Q0FDViIsImZpbGUiOiJDbGllbnRBcHAvYXBwL3N1ZG9rdS1jb250YWluZXIvc3Vkb2t1LWNvbnRhaW5lci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsicCB7XHJcblx0Zm9udC1mYW1pbHk6ICdTZWdvZSBVSScsIFRhaG9tYSwgR2VuZXZhLCBWZXJkYW5hLCBzYW5zLXNlcmlmO1xyXG5cdGZvbnQtc3R5bGU6IGl0YWxpYztcclxuXHRjb2xvcjogZ3JlZW47XHJcbn1cclxuXHJcbiNleHRyYS1jb250cm9scyB7XHJcblx0bWFyZ2luLXRvcDogMTAwcHg7XHJcbn1cclxuXHJcbiNzdWRva3VJbnB1dCB7XHJcblx0bWFyZ2luLXRvcDogMTAwcHg7XHJcbn1cclxuXHJcbmRpdiAuYXBwLXN1ZG9rdS1jb250YWluZXIge1xyXG5cdG1hcmdpbi10b3A6IDEwMHB4O1xyXG59XHJcblxyXG4ubWFyZ2luLWJ0biB7XHJcblx0bWFyZ2luOiAxMzVweCAyMHB4IDIwcHggMjBweCAhaW1wb3J0YW50XHJcbn1cclxuXHJcbi5kZWZhdWx0TGVuZ3RoIHtcclxuXHR3aWR0aDogNzAlXHJcbn0iXX0= */"

/***/ }),

/***/ "./app/sudoku-container/sudoku-container.component.html":
/*!**************************************************************!*\
  !*** ./app/sudoku-container/sudoku-container.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<div align=\"center\" class=\"app-sudoku-container\">\r\n\t<div class=\"d-flex justify-content-center\">\r\n\t\t<div class=\"d-flex\">\r\n\t\t\t<div class=\"d-block float-left\">\r\n\t\t\t\t<app-sudoku-grid [board]=\"unsolvedBoard\"></app-sudoku-grid>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"d-block float-left p-2 margin-btn\">\r\n\t\t\t\t<button type=\"button\" class=\"btn btn-success mr-2\" tooltip=\"Solve Sudoku\" (click)=solveSudoku()>Solve</button>\r\n\t\t\t\t<button type=\"button\" class=\"btn btn-secondary\" tooltip=\"Reset Sudoku\" (click)=resetSudoku()>Reset</button>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"d-block float-none\">\r\n\t\t\t\t<app-sudoku-grid [board]=\"resultBoard\"></app-sudoku-grid>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n\t<div class=\"d-flex justify-content-center\">\r\n\t\t<div class=\"d-flex\">\r\n\t\t\t<div class=\"row\">\r\n\t\t\t\t<div id=\"sudokuInput\" class=\"col-md-12\">\r\n\t\t\t\t\t<input placeholder=\"eg: .....97..4..1..3.8.1...89....9..42...8.23.179..26.7.833..7.16.......2...97..5..12\" #sudokuInput class=\"defaultLength mr-1\" />\r\n\t\t\t\t\t<button (click)=populateInputSudoku(sudokuInput.value) class=\"btn btn-info\" tooltip=\"Populate Sudoku\">Populate Sudoku</button>\r\n\t\t\t\t\t<p>\r\n\t\t\t\t\t\tYou can input a new sudoku puzzle using a string of numbers. Provide . OR 0 for the unknown cell value\r\n\t\t\t\t\t\t<br />\r\n\t\t\t\t\t\teg: .....97..4..1..3.8.1...89....9..42...8.23.179..26.7.833..7.16.......2...97..5..12 \r\n\t\t\t\t\t\t<br />\r\n\t\t\t\t\t\tOR\r\n\t\t\t\t\t\t<br />\r\n\t\t\t\t\t\t003020600900305001001806400008102900700000008006708200002609500800203009005010300\r\n\t\t\t\t\t</p>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n</div>\r\n"

/***/ }),

/***/ "./app/sudoku-container/sudoku-container.component.ts":
/*!************************************************************!*\
  !*** ./app/sudoku-container/sudoku-container.component.ts ***!
  \************************************************************/
/*! exports provided: SudokuContainerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SudokuContainerComponent", function() { return SudokuContainerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "../node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-bootstrap */ "../node_modules/ngx-bootstrap/esm5/ngx-bootstrap.js");
/* harmony import */ var _modal_modal_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../modal/modal.component */ "./app/modal/modal.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SudokuContainerComponent = /** @class */ (function () {
    function SudokuContainerComponent(httpClient, modalService) {
        this.httpClient = httpClient;
        this.modalService = modalService;
        this.sudokuPuzzleToProcess = "";
    }
    SudokuContainerComponent.prototype.ngOnInit = function () { this.resetSudoku(); };
    //Gets default board - Initial board on load and reset
    SudokuContainerComponent.prototype.getDefaultBorad = function () {
			return [
				[4, "", "", "", "", "", 8, "", 5],
				["", 3, "", "", "", "", "", "", ""],
				["", "", "", 7, "", "", "", "", ""],
				["", 2, "", "", "", "", "", 6, ""],
				["", "", "", "", 8, "", 4, "", ""],
				["", "", "", "", 1, "", "", "", ""],
				["", "", "", 6, "", 3, "", 7, ""],
				[5, "", "", 2, "", "", "", "", ""],
				[1, "", 4, "", "", "", "", "", ""]
			];
    };
    // Call API to process the Sudoku input and provide the output
    SudokuContainerComponent.prototype.solveSudoku = function () {
        var _this = this;
        this.httpClient.get('api/data/SolveSudoku/' + this.sudokuPuzzleToProcess)
            .subscribe(function (response) {
            if (response.sudokuOutput != null) {
                //Update the solved sudoku
                _this.showMessage("Congratulations - Sudoku Solved :", "Time taken to solve sudoku in milliseconds : " + response.timeTakenToProcess);
                _this.resultBoard = response.sudokuOutput;
            }
            else {
							_this.showMessage("Unable to process", "Oops, Unable to process provided Sudoku. Kindly validate.");
							_this.resultBoard = Array(9).fill(Array(9).fill(""));
            }
        });
    };
    /// reset sudoku grid
    SudokuContainerComponent.prototype.resetSudoku = function () {
        this.sudokuPuzzleToProcess = "4.....8.5.3..........7......2.....6.....8.4......1.......6.3.7.5..2.....1.4......";
        this.resultBoard = Array(9).fill(Array(9).fill(""));
        this.unsolvedBoard = this.getDefaultBorad();
    };
    /// Populate input sudoku string into left sudoku grid
    SudokuContainerComponent.prototype.populateInputSudoku = function (sudokuPuzzle) {
        //Check if user has provided the sudoku input or not
        if (sudokuPuzzle.length === 0) {
            this.showMessage("Enter Sudoku", "Please enter sudoku string in valid format.");
            return;
        }
        //Validate sudoku input (Whitelist : 0-9. and length is 81)
        if (new RegExp("^[0-9.]*$").test(sudokuPuzzle) == false || sudokuPuzzle.length != 81) {
            this.showMessage("Invalid Sudoku", "Invalid sudoku entered. Please provide string in valid format.");
            return;
        }
        //Store origional input sudoku string - To process on solve
        this.sudokuPuzzleToProcess = sudokuPuzzle;
        sudokuPuzzle = sudokuPuzzle.replace(/\./g, " ");
        var comma = ",";
        var input = "";
        var value = 0;
        for (var i = 0; i < 9; i++) {
            input += sudokuPuzzle.slice(value, value + 9) + comma;
            value += 9;
        }
        input = input.substring(0, input.length - 1);
        sudokuPuzzle = input;
        var board = sudokuPuzzle
            .split(',')
            .map(function (rows) {
            return rows.split('').map(function (value) { return value; });
        });
        // only put the board up if its valid
        if (board.length === 9 || board[0].length === 9) {
            this.unsolvedBoard = board;
        }
        else {
            this.showMessage("Unable to process sudoku input", "Invalid Sudoku entered. Please provide string in valid format.");
        }
    };
    // Show message (error/time taken to process sudoku etc.)
    SudokuContainerComponent.prototype.showMessage = function (title, errormessage) {
        var initialState = {};
        initialState = {
            title: title,
            message: errormessage
        };
        this.bsModalRefValidation = this.modalService.show(_modal_modal_component__WEBPACK_IMPORTED_MODULE_3__["ModalComponent"], { initialState: initialState });
    };
    SudokuContainerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-sudoku-container',
            template: __webpack_require__(/*! ./sudoku-container.component.html */ "./app/sudoku-container/sudoku-container.component.html"),
            styles: [__webpack_require__(/*! ./sudoku-container.component.css */ "./app/sudoku-container/sudoku-container.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], ngx_bootstrap__WEBPACK_IMPORTED_MODULE_2__["BsModalService"]])
    ], SudokuContainerComponent);
    return SudokuContainerComponent;
}());



/***/ }),

/***/ "./app/sudoku-grid/sudoku-grid.component.css":
/*!***************************************************!*\
  !*** ./app/sudoku-grid/sudoku-grid.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".cell {\r\n\theight: 35px;\r\n\twidth: 35px;\r\n\tborder: 1px solid;\r\n\tborder-color: lightgrey;\r\n\ttext-align:center\r\n}\r\n\r\n\t.cell:first-child {\r\n\t\tborder-left: solid;\r\n\t\tborder-width: thin;\r\n\t}\r\n\r\n\t.cell:nth-child(3n) {\r\n\t\tborder-right: solid;\r\n\t\tborder-width: thin;\r\n\t}\r\n\r\n\t#rows:first-child {\r\n\tborder-top: solid;\r\n\tborder-width: thin;\r\n}\r\n\r\n\t#rows:nth-child(3n) .cell {\r\n\tborder-bottom: solid;\r\n\tborder-width: thin;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkNsaWVudEFwcC9hcHAvc3Vkb2t1LWdyaWQvc3Vkb2t1LWdyaWQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtDQUNDLGFBQWE7Q0FDYixZQUFZO0NBQ1osa0JBQWtCO0NBQ2xCLHdCQUF3QjtDQUN4QixpQkFBaUI7Q0FDakI7O0NBRUE7RUFDQyxtQkFBbUI7RUFDbkIsbUJBQW1CO0VBQ25COztDQUVEO0VBQ0Msb0JBQW9CO0VBQ3BCLG1CQUFtQjtFQUNuQjs7Q0FFRjtDQUNDLGtCQUFrQjtDQUNsQixtQkFBbUI7Q0FDbkI7O0NBRUQ7Q0FDQyxxQkFBcUI7Q0FDckIsbUJBQW1CO0NBQ25CIiwiZmlsZSI6IkNsaWVudEFwcC9hcHAvc3Vkb2t1LWdyaWQvc3Vkb2t1LWdyaWQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jZWxsIHtcclxuXHRoZWlnaHQ6IDM1cHg7XHJcblx0d2lkdGg6IDM1cHg7XHJcblx0Ym9yZGVyOiAxcHggc29saWQ7XHJcblx0Ym9yZGVyLWNvbG9yOiBsaWdodGdyZXk7XHJcblx0dGV4dC1hbGlnbjpjZW50ZXJcclxufVxyXG5cclxuXHQuY2VsbDpmaXJzdC1jaGlsZCB7XHJcblx0XHRib3JkZXItbGVmdDogc29saWQ7XHJcblx0XHRib3JkZXItd2lkdGg6IHRoaW47XHJcblx0fVxyXG5cclxuXHQuY2VsbDpudGgtY2hpbGQoM24pIHtcclxuXHRcdGJvcmRlci1yaWdodDogc29saWQ7XHJcblx0XHRib3JkZXItd2lkdGg6IHRoaW47XHJcblx0fVxyXG5cclxuI3Jvd3M6Zmlyc3QtY2hpbGQge1xyXG5cdGJvcmRlci10b3A6IHNvbGlkO1xyXG5cdGJvcmRlci13aWR0aDogdGhpbjtcclxufVxyXG5cclxuI3Jvd3M6bnRoLWNoaWxkKDNuKSAuY2VsbCB7XHJcblx0Ym9yZGVyLWJvdHRvbTogc29saWQ7XHJcblx0Ym9yZGVyLXdpZHRoOiB0aGluO1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./app/sudoku-grid/sudoku-grid.component.html":
/*!****************************************************!*\
  !*** ./app/sudoku-grid/sudoku-grid.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"app-sudoku-grid\">\r\n\t<div *ngFor=\"let row of board\" id=\"rows\">\r\n\t\t<input *ngFor=\"let cell of row\" class=\"cell\" type=\"text\" value={{cell}} maxlength=1 readonly />\r\n\t</div>\r\n</div>"

/***/ }),

/***/ "./app/sudoku-grid/sudoku-grid.component.ts":
/*!**************************************************!*\
  !*** ./app/sudoku-grid/sudoku-grid.component.ts ***!
  \**************************************************/
/*! exports provided: SudokuGridComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SudokuGridComponent", function() { return SudokuGridComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SudokuGridComponent = /** @class */ (function () {
    function SudokuGridComponent() {
    }
    SudokuGridComponent.prototype.ngOnInit = function () { };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], SudokuGridComponent.prototype, "board", void 0);
    SudokuGridComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-sudoku-grid',
            template: __webpack_require__(/*! ./sudoku-grid.component.html */ "./app/sudoku-grid/sudoku-grid.component.html"),
            styles: [__webpack_require__(/*! ./sudoku-grid.component.css */ "./app/sudoku-grid/sudoku-grid.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SudokuGridComponent);
    return SudokuGridComponent;
}());



/***/ }),

/***/ "./environments/environment.ts":
/*!*************************************!*\
  !*** ./environments/environment.ts ***!
  \*************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, for easier debugging, you can ignore zone related error
 * stack frames such as `zone.run`/`zoneDelegate.invokeTask` by importing the
 * below file. Don't forget to comment it out in production mode
 * because it will have a performance impact when errors are thrown
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./main.ts":
/*!*****************!*\
  !*** ./main.ts ***!
  \*****************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "../node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***********************!*\
  !*** multi ./main.ts ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\Prashant Shah\Mine Interview Preparation\Qlik\Sudoku\ClientApp\main.ts */"./main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map