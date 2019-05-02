(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-home-module"],{

/***/ "./src/app/home/home.module.ts":
/*!*************************************!*\
  !*** ./src/app/home/home.module.ts ***!
  \*************************************/
/*! exports provided: HomePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home.page */ "./src/app/home/home.page.ts");







var HomePageModule = /** @class */ (function () {
    function HomePageModule() {
    }
    HomePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild([
                    {
                        path: '',
                        component: _home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"]
                    }
                ])
            ],
            declarations: [_home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"]]
        })
    ], HomePageModule);
    return HomePageModule;
}());



/***/ }),

/***/ "./src/app/home/home.page.html":
/*!*************************************!*\
  !*** ./src/app/home/home.page.html ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>\n      Início\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <span class=\"logo-line\">\n    <img id=\"logo\" src=\"/assets/logo.png\"/>\n  </span>\n    <span class=\"common-text\">Forneça os horários em que você costuma:</span>\n    <ion-item>\n      <ion-icon name=\"bed\" slot=\"start\"></ion-icon>\n      <ion-label>Dormir</ion-label>\n      <ion-datetime displayFormat=\"HH:mm\" [(ngModel)]=\"sleepHour\"></ion-datetime>\n      <!-- <ion-icon name=\"settings\" slot=\"end\"></ion-icon> -->\n    </ion-item>\n    <ion-item>\n      <ion-icon name=\"sunny\" slot=\"start\"></ion-icon>\n      <ion-label>Acordar</ion-label>\n      <ion-datetime displayFormat=\"HH:mm\" [(ngModel)]=\"wakeHour\"></ion-datetime>\n      <!-- <ion-icon name=\"settings\" slot=\"end\"></ion-icon> -->\n    </ion-item>\n    <ion-item>\n      <ion-icon name=\"cafe\" slot=\"start\"></ion-icon>\n      <ion-label>Café da Manhã</ion-label>\n      <ion-datetime displayFormat=\"HH:mm\" [(ngModel)]=\"breakfastHour\"></ion-datetime>\n      <!-- <ion-icon name=\"settings\" slot=\"end\"></ion-icon> -->\n    </ion-item>\n    <ion-item>\n      <ion-icon name=\"restaurant\" slot=\"start\"></ion-icon>\n      <ion-label>Almoço</ion-label>\n      <ion-datetime displayFormat=\"HH:mm\" [(ngModel)]=\"lunchHour\"></ion-datetime>\n      <!-- <ion-icon name=\"settings\" slot=\"end\"></ion-icon> -->\n    </ion-item>\n    <ion-item>\n      <ion-icon name=\"pint\" slot=\"start\"></ion-icon>\n      <ion-label>Jantar</ion-label>\n      <ion-datetime displayFormat=\"HH:mm\" [(ngModel)]=\"dinnerHour\"></ion-datetime>\n      <!-- <ion-icon name=\"settings\" slot=\"end\"></ion-icon> -->\n    </ion-item>\n    <ion-row justify-content-center class=\"button-update\" (click)=\"confirmUpdate()\">\n      <ion-button shape=\"round\">\n        <ion-icon name=\"checkmark\" slot=\"icon-only\"></ion-icon>\n      </ion-button>\n    </ion-row>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/home/home.page.scss":
/*!*************************************!*\
  !*** ./src/app/home/home.page.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".logo-line {\n  display: flex;\n  justify-content: center;\n  margin: 10px; }\n\n#logo {\n  height: 8rem; }\n\n.common-text {\n  margin-left: 15px;\n  margin-bottom: 15px;\n  display: block; }\n\n.button-update {\n  margin-top: 15px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2p1bmtzL0RvY3VtZW50cy9pb25pYy1hcHAtbm90aWZpY2F0aW9ucy9zcmMvYXBwL2hvbWUvaG9tZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLFlBQVksRUFBQTs7QUFHZDtFQUNFLFlBQVksRUFBQTs7QUFHZDtFQUNFLGlCQUFpQjtFQUNqQixtQkFBbUI7RUFDbkIsY0FBYyxFQUFBOztBQUdoQjtFQUNFLGdCQUFnQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvaG9tZS9ob21lLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5sb2dvLWxpbmV7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBtYXJnaW46IDEwcHg7XG59XG5cbiNsb2dve1xuICBoZWlnaHQ6IDhyZW07XG59XG5cbi5jb21tb24tdGV4dHtcbiAgbWFyZ2luLWxlZnQ6IDE1cHg7XG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4uYnV0dG9uLXVwZGF0ZXtcbiAgbWFyZ2luLXRvcDogMTVweDtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/home/home.page.ts":
/*!***********************************!*\
  !*** ./src/app/home/home.page.ts ***!
  \***********************************/
/*! exports provided: HomePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePage", function() { return HomePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_native_local_notifications_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/local-notifications/ngx */ "./node_modules/@ionic-native/local-notifications/ngx/index.js");






var HomePage = /** @class */ (function () {
    function HomePage(storage, router, alertCtrl, localNotifications) {
        var _this = this;
        this.storage = storage;
        this.router = router;
        this.alertCtrl = alertCtrl;
        this.localNotifications = localNotifications;
        this.lunchHour = "00:00";
        this.dinnerHour = "00:00";
        this.wakeHour = "00:00";
        this.sleepHour = "00:00";
        this.breakfastHour = "00:00";
        this.storage.get('firstAccess').then(function (firstAccess) {
            if (firstAccess == null || firstAccess) {
                _this.router.navigateByUrl('/about');
                _this.storage.set('firstAccess', true);
            }
        });
        this.storage.get('lunch').then(function (lunch) {
            if (lunch) {
                _this.lunchHour = lunch;
            }
        });
        this.storage.get('dinner').then(function (dinner) {
            if (dinner) {
                _this.dinnerHour = dinner;
            }
        });
        this.storage.get('wake').then(function (wake) {
            if (wake) {
                _this.wakeHour = wake;
            }
        });
        this.storage.get('sleep').then(function (sleep) {
            if (sleep) {
                _this.sleepHour = sleep;
            }
        });
        this.storage.get('breakHour').then(function (breakHour) {
            if (breakHour) {
                _this.breakfastHour = breakHour;
            }
        });
    }
    HomePage.prototype.confirmUpdate = function () {
        this.storage.set('lunch', this.lunchHour);
        this.storage.set('dinner', this.dinnerHour);
        this.storage.set('wake', this.wakeHour);
        this.storage.set('sleep', this.sleepHour);
        this.storage.set('breakHour', this.breakfastHour);
        //seta novos schedules de notificacao
        this.setNewNotifications();
        this.presentAlert();
    };
    HomePage.prototype.setNewNotifications = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.localNotifications.schedule({
                            id: 1,
                            text: 'Single ILocalNotification',
                        })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    HomePage.prototype.presentAlert = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertCtrl.create({
                            header: 'Atualização.',
                            message: 'Horários foram salvos.',
                            buttons: ['Ok']
                        })];
                    case 1:
                        alert = _a.sent();
                        return [4 /*yield*/, alert.present()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    HomePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.page.html */ "./src/app/home/home.page.html"),
            styles: [__webpack_require__(/*! ./home.page.scss */ "./src/app/home/home.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_storage__WEBPACK_IMPORTED_MODULE_2__["Storage"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"],
            _ionic_native_local_notifications_ngx__WEBPACK_IMPORTED_MODULE_5__["LocalNotifications"]])
    ], HomePage);
    return HomePage;
}());



/***/ })

}]);
//# sourceMappingURL=home-home-module.js.map