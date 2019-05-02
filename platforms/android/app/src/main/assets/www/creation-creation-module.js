(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["creation-creation-module"],{

/***/ "./src/app/creation/creation.module.ts":
/*!*********************************************!*\
  !*** ./src/app/creation/creation.module.ts ***!
  \*********************************************/
/*! exports provided: CreationPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreationPageModule", function() { return CreationPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _creation_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./creation.page */ "./src/app/creation/creation.page.ts");







var routes = [
    {
        path: '',
        component: _creation_page__WEBPACK_IMPORTED_MODULE_6__["CreationPage"]
    }
];
var CreationPageModule = /** @class */ (function () {
    function CreationPageModule() {
    }
    CreationPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_creation_page__WEBPACK_IMPORTED_MODULE_6__["CreationPage"]]
        })
    ], CreationPageModule);
    return CreationPageModule;
}());



/***/ }),

/***/ "./src/app/creation/creation.page.html":
/*!*********************************************!*\
  !*** ./src/app/creation/creation.page.html ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>\n      Criação e Apoio\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-card class=\"card-purple\">\n    <ion-card-content>\n      <p *ngFor=\"let author of authors\">\n        <span> {{ author.type }} </span>\n        <span> {{ author.names }} </span>\n      </p>\n    </ion-card-content>\n  </ion-card>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/creation/creation.page.scss":
/*!*********************************************!*\
  !*** ./src/app/creation/creation.page.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NyZWF0aW9uL2NyZWF0aW9uLnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/creation/creation.page.ts":
/*!*******************************************!*\
  !*** ./src/app/creation/creation.page.ts ***!
  \*******************************************/
/*! exports provided: CreationPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreationPage", function() { return CreationPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var CreationPage = /** @class */ (function () {
    function CreationPage() {
        this.authors = [
            {
                type: 'Coordenação do Projeto',
                names: 'Maria Silva da Silva – Departamento de Enfermagem em Saúde Coletiva da UFFF'
            },
            {
                type: 'Equipe de pesquisadores',
                names: 'Joana Duarte Silva, Joana Duarte Silva, Joana Duarte Silva – Departamento de Fake em Saúde Coletiva da UFFF'
            },
            {
                type: 'Assessoria técnica',
                names: 'Joana Duarte Silva, Joana Duarte Silva, Joana Duarte Silva – Departamento de Fake em Saúde Coletiva da UFFF'
            }
        ];
    }
    CreationPage.prototype.ngOnInit = function () {
    };
    CreationPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-creation',
            template: __webpack_require__(/*! ./creation.page.html */ "./src/app/creation/creation.page.html"),
            styles: [__webpack_require__(/*! ./creation.page.scss */ "./src/app/creation/creation.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], CreationPage);
    return CreationPage;
}());



/***/ })

}]);
//# sourceMappingURL=creation-creation-module.js.map