(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["about-about-module"],{

/***/ "./src/app/about/about.module.ts":
/*!***************************************!*\
  !*** ./src/app/about/about.module.ts ***!
  \***************************************/
/*! exports provided: AboutPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutPageModule", function() { return AboutPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _about_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./about.page */ "./src/app/about/about.page.ts");







var AboutPageModule = /** @class */ (function () {
    function AboutPageModule() {
    }
    AboutPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild([
                    {
                        path: '',
                        component: _about_page__WEBPACK_IMPORTED_MODULE_6__["AboutPage"]
                    }
                ])
            ],
            declarations: [_about_page__WEBPACK_IMPORTED_MODULE_6__["AboutPage"]]
        })
    ], AboutPageModule);
    return AboutPageModule;
}());



/***/ }),

/***/ "./src/app/about/about.page.html":
/*!***************************************!*\
  !*** ./src/app/about/about.page.html ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header *ngIf=\"!firstAccess\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>\n      Sobre o app\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-card class=\"card-purple\">\n    <ion-card-content>\n      <p class=\"title-card-section\" *ngIf=\"firstAccess\">Boas vindas!</p>\n      <ion-row justify-content-center>\n        <img class=\"tooth-image\" src=\"/assets/tooth.png\" *ngIf=\"accessProgress == 0\"/>\n        <img class=\"tooth-image\" src=\"/assets/open-mouth.png\"*ngIf=\"accessProgress > 0\"/>\n      </ion-row>\n      <span *ngIf=\"accessProgress == 0\">\n          Se você está usando este aplicativo é porque você foi diagnosticado com\n          Disfunção temporomandibular, mas não se preocupe, nós vamos te ajudar. O\n          Sistema Estomatognático é o conjunto de órgãos e tecidos responsáveis pela\n          fala, mastigação, e estética e envolve dentes, língua, bochechas e tudo que\n          você precisa para falar, mastigar e sorrir são suas principais funções. Agora\n          nós vamos te aconselhar com dicas para você sentir menos dor.\n      </span>\n      <span *ngIf=\"accessProgress == 3\">\n          A disfunção é quano a dor acontece durante a fala, mastigação ou ao sorrir. Apertar\n          os dentes e esfregá-los sem necessidade é um hábito que vai forçar seu Sistema Estomatognático,\n          então sempre que perceber que você está fazendo isso procure desencostar os dentes e manter as bochechas\n          relaxadas, mas não estique demais a musculatura.\n      </span>\n      <span *ngIf=\"accessProgress == 2\">\n          A Parafunção quando se mantém por muito tempo machuca os órgãos e tecidos que fazem parte do nosso Sistema\n          Estomatognático, como por exemplo: os dentes ficam desgastados, os músculos ficam cansados e doloridos e a Articulação Temporomandibular\n          (que fica na frente do seu ouvido) fica desgastada, barulhenta e muitas vezes dói.\n      </span>\n      <span *ngIf=\"accessProgress == 1\">\n        Utilizar os músculos de maneira exagerada, como por exemplo, esfregando os dentes uns aos outros ou apertando\n        os dentes uns aos outros de forma desnecessária, força a capacidade do seu Sistema, chama-se de Parafunção.\n      </span>\n      <ion-row justify-content-center>\n        <ion-button class=\"step-access\" fill=\"clear\" size=\"default\" (click)=\"backAccessProgress()\" *ngIf=\"accessProgress > 0\">\n          <ion-icon slot=\"start\" name=\"arrow-back\"></ion-icon>\n          <span>Voltar</span>\n        </ion-button>\n        <ion-button class=\"step-access\" fill=\"clear\" size=\"default\" (click)=\"startApp()\" *ngIf=\"accessProgress >= 3\">\n          <span *ngIf=\"firstAccess\">Começar</span>\n          <span *ngIf=\"!firstAccess\">Início</span>\n          <ion-icon slot=\"end\" name=\"arrow-forward\"></ion-icon>\n        </ion-button>\n        <ion-button class=\"step-access\" fill=\"clear\" size=\"default\" (click)=\"forwardAccessProgress()\" *ngIf=\"accessProgress < 3\">\n          <span>Continuar</span>\n          <ion-icon slot=\"end\" name=\"arrow-forward\"></ion-icon>\n        </ion-button>\n      </ion-row>\n    </ion-card-content>\n  </ion-card>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/about/about.page.scss":
/*!***************************************!*\
  !*** ./src/app/about/about.page.scss ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".step-access {\n  margin: 15px;\n  color: white;\n  font-weight: 600; }\n\n.tooth-image {\n  width: 4.2rem;\n  margin-bottom: 15px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2p1bmtzL0RvY3VtZW50cy9pb25pYy1hcHAtbm90aWZpY2F0aW9ucy9zcmMvYXBwL2Fib3V0L2Fib3V0LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQVk7RUFDWixZQUFZO0VBQ1osZ0JBQWdCLEVBQUE7O0FBR2xCO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvYWJvdXQvYWJvdXQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnN0ZXAtYWNjZXNze1xuICBtYXJnaW46IDE1cHg7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cblxuLnRvb3RoLWltYWdle1xuICB3aWR0aDogNC4ycmVtO1xuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/about/about.page.ts":
/*!*************************************!*\
  !*** ./src/app/about/about.page.ts ***!
  \*************************************/
/*! exports provided: AboutPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutPage", function() { return AboutPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var AboutPage = /** @class */ (function () {
    function AboutPage(storage, router) {
        var _this = this;
        this.storage = storage;
        this.router = router;
        this.firstAccess = false;
        this.accessProgress = 0;
        this.storage.get('firstAccess').then(function (val) {
            if (val == null || val) {
                _this.firstAccess = true;
            }
            else {
                _this.firstAccess = false;
            }
        });
    }
    AboutPage.prototype.forwardAccessProgress = function () {
        this.accessProgress += 1;
    };
    AboutPage.prototype.backAccessProgress = function () {
        this.accessProgress -= 1;
    };
    AboutPage.prototype.startApp = function () {
        this.storage.set('firstAccess', false);
        this.router.navigateByUrl('/home');
    };
    AboutPage.prototype.ngOnInit = function () { };
    AboutPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-about',
            template: __webpack_require__(/*! ./about.page.html */ "./src/app/about/about.page.html"),
            styles: [__webpack_require__(/*! ./about.page.scss */ "./src/app/about/about.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_storage__WEBPACK_IMPORTED_MODULE_2__["Storage"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], AboutPage);
    return AboutPage;
}());



/***/ })

}]);
//# sourceMappingURL=about-about-module.js.map