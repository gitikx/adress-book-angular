(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/INTEXSOFT/nikita.manzhula/Documents/nexign/test-nexign/src/main.ts */"zUnb");


/***/ }),

/***/ "9Rdk":
/*!******************************************!*\
  !*** ./src/app/table/table.component.ts ***!
  \******************************************/
/*! exports provided: TableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TableComponent", function() { return TableComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _models_contact_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/contact.model */ "BYzK");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/table */ "+0xr");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/button */ "bTqV");





function TableComponent_th_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "th", 13);
} }
function TableComponent_td_3_Template(rf, ctx) { if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TableComponent_td_3_Template_td_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r16); const element_r14 = ctx.$implicit; const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r15.changeContactFavouriteStatus(element_r14); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\u2605 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r14 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("favourite", element_r14.isFavourite);
} }
function TableComponent_th_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\u0424\u0430\u043C\u0438\u043B\u0438\u044F");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function TableComponent_td_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r17 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](element_r17.surname);
} }
function TableComponent_th_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\u0418\u043C\u044F");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function TableComponent_td_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r18 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](element_r18.name);
} }
function TableComponent_th_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\u041E\u0442\u0447\u0435\u0441\u0442\u0432\u043E");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function TableComponent_td_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r19 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](element_r19.patronymic);
} }
function TableComponent_th_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\u041D\u043E\u043C\u0435\u0440 \u0442\u0435\u043B\u0435\u0444\u043E\u043D\u0430");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function TableComponent_td_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r20 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](element_r20.phoneNumber);
} }
function TableComponent_th_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "th", 13);
} }
function TableComponent_td_18_Template(rf, ctx) { if (rf & 1) {
    const _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TableComponent_td_18_Template_td_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r23); const element_r21 = ctx.$implicit; const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r22.deleteRow(element_r21); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\u0423\u0434\u0430\u043B\u0438\u0442\u044C");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function TableComponent_tr_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 18);
} }
function TableComponent_tr_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 19);
} }
class TableComponent {
    constructor() {
        /**
         * Row deletion emitter
         */
        this.rowDeleted = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * Row update emitter
         */
        this.rowUpdated = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.columns = [..._models_contact_model__WEBPACK_IMPORTED_MODULE_1__["Contact"].getFieldsNames(), 'delete'];
    }
    deleteRow(contact) {
        this.rowDeleted.emit(contact);
    }
    changeContactFavouriteStatus(contact) {
        contact.isFavourite = !contact.isFavourite;
        this.rowUpdated.emit(contact);
    }
}
TableComponent.ɵfac = function TableComponent_Factory(t) { return new (t || TableComponent)(); };
TableComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TableComponent, selectors: [["app-table"]], inputs: { data: "data" }, outputs: { rowDeleted: "rowDeleted", rowUpdated: "rowUpdated" }, decls: 21, vars: 3, consts: [["mat-table", "", 3, "dataSource"], ["matColumnDef", "isFavourite"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", "class", "favourite-icon", 3, "favourite", "click", 4, "matCellDef"], ["matColumnDef", "surname"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "name"], ["matColumnDef", "patronymic"], ["matColumnDef", "phoneNumber"], ["matColumnDef", "delete"], ["mat-cell", "", 3, "click", 4, "matCellDef"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["mat-header-cell", ""], ["mat-cell", "", 1, "favourite-icon", 3, "click"], ["mat-cell", ""], ["mat-cell", "", 3, "click"], ["mat-flat-button", "", "color", "warn", "type", "submit"], ["mat-header-row", ""], ["mat-row", ""]], template: function TableComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "table", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](1, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, TableComponent_th_2_Template, 1, 0, "th", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, TableComponent_td_3_Template, 2, 2, "td", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](4, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, TableComponent_th_5_Template, 2, 0, "th", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, TableComponent_td_6_Template, 2, 1, "td", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](7, 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, TableComponent_th_8_Template, 2, 0, "th", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, TableComponent_td_9_Template, 2, 1, "td", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](10, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, TableComponent_th_11_Template, 2, 0, "th", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, TableComponent_td_12_Template, 2, 1, "td", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](13, 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, TableComponent_th_14_Template, 2, 0, "th", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, TableComponent_td_15_Template, 2, 1, "td", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](16, 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, TableComponent_th_17_Template, 1, 0, "th", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, TableComponent_td_18_Template, 3, 0, "td", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, TableComponent_tr_19_Template, 1, 0, "tr", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, TableComponent_tr_20_Template, 1, 0, "tr", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dataSource", ctx.data);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matHeaderRowDef", ctx.columns);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matRowDefColumns", ctx.columns);
    } }, directives: [_angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatTable"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatColumnDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatHeaderCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatHeaderRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatHeaderCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatCell"], _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButton"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatHeaderRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatRow"]], styles: ["th[_ngcontent-%COMP%] {\n  text-align: start;\n}\n\ntable[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.favourite[_ngcontent-%COMP%] {\n  color: yellow;\n}\n\n.favourite-icon[_ngcontent-%COMP%]:hover {\n  cursor: default;\n}\n\n.favourite-icon[_ngcontent-%COMP%]::selection {\n  background: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGFibGUvdGFibGUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxpQkFBQTtBQUNGOztBQUVBO0VBQ0UsV0FBQTtBQUNGOztBQUVBO0VBQ0UsYUFBQTtBQUNGOztBQUVBO0VBQ0UsZUFBQTtBQUNGOztBQUVBO0VBQ0UsZ0JBQUE7QUFDRiIsImZpbGUiOiJzcmMvYXBwL3RhYmxlL3RhYmxlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsidGgge1xuICB0ZXh0LWFsaWduOiBzdGFydDtcbn1cblxudGFibGUge1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmZhdm91cml0ZSB7XG4gIGNvbG9yOiB5ZWxsb3c7XG59XG5cbi5mYXZvdXJpdGUtaWNvbjpob3ZlciB7XG4gIGN1cnNvcjogZGVmYXVsdDtcbn1cblxuLmZhdm91cml0ZS1pY29uOjpzZWxlY3Rpb24ge1xuICBiYWNrZ3JvdW5kOiBub25lO1xufVxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TableComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-table',
                templateUrl: './table.component.html',
                styleUrls: ['./table.component.scss'],
            }]
    }], function () { return []; }, { data: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], rowDeleted: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], rowUpdated: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "AN3i":
/*!***************************************!*\
  !*** ./src/app/pipe/order-by.pipe.ts ***!
  \***************************************/
/*! exports provided: OrderByPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderByPipe", function() { return OrderByPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class OrderByPipe {
    transform(value) {
        return value.sort((elementA, elementB) => {
            if (elementA.isFavourite == elementB.isFavourite)
                return 0;
            else if (elementA.isFavourite && !elementB.isFavourite)
                return -1;
            else
                return 1;
        });
    }
}
OrderByPipe.ɵfac = function OrderByPipe_Factory(t) { return new (t || OrderByPipe)(); };
OrderByPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "orderBy", type: OrderByPipe, pure: true });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](OrderByPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
                name: 'orderBy'
            }]
    }], null, null); })();


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "BYzK":
/*!*****************************************!*\
  !*** ./src/app/models/contact.model.ts ***!
  \*****************************************/
/*! exports provided: Contact */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Contact", function() { return Contact; });
/**
 * Class that represent Contact instance.
 */
class Contact {
    /**
     * Creates instance of contact
     * @param name specified name
     * @param surname specified surname
     * @param patronymic specified patronymic
     * @param isFavourite specified isFavourite flag
     * @param phoneNumber specified phone number
     */
    constructor(name, surname, patronymic, isFavourite, phoneNumber) {
        this.name = name;
        this.surname = surname;
        this.patronymic = patronymic;
        this.isFavourite = isFavourite;
        this.phoneNumber = phoneNumber;
    }
    /**
     * Getter for identifier
     */
    get id() {
        return this._id;
    }
    /**
     * Return string array of contact properties
     */
    static getFieldsNames() {
        return ['isFavourite', 'surname', 'name', 'patronymic', 'phoneNumber'];
    }
}


/***/ }),

/***/ "EnSQ":
/*!******************************************!*\
  !*** ./src/app/services/data.service.ts ***!
  \******************************************/
/*! exports provided: DataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataService", function() { return DataService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _http_request_processing_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./http-request-processing.service */ "vL20");
/* harmony import */ var _pipe_order_by_pipe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../pipe/order-by.pipe */ "AN3i");




class DataService {
    /**
     * Creates instance
     * @param httpRequestService
     */
    constructor(httpRequestService, orderByPipe) {
        this.httpRequestService = httpRequestService;
        this.orderByPipe = orderByPipe;
        /**
         * Collection of contacts
         */
        this.data = [];
    }
    /**
     * Downloads and saves data from database
     */
    downloadData() {
        this.httpRequestService.get().subscribe((result) => {
            this.data = this.orderByPipe.transform(result);
        });
    }
    /**
     * Adds row to the database
     * @param contact
     */
    addRow(contact) {
        this.httpRequestService.post('', contact).subscribe(() => {
            this.downloadData();
        });
    }
    /**
     * Deletes row from database
     * @param contact
     */
    deleteRow(contact) {
        this.httpRequestService.delete(contact._id).subscribe(() => {
            this.downloadData();
        });
    }
    /**
     * Updates row in database
     * @param contact
     */
    updateRow(contact) {
        this.httpRequestService.put(contact._id, contact).subscribe(() => {
            this.downloadData();
        });
    }
}
DataService.ɵfac = function DataService_Factory(t) { return new (t || DataService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_http_request_processing_service__WEBPACK_IMPORTED_MODULE_1__["HttpRequestProcessingService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_pipe_order_by_pipe__WEBPACK_IMPORTED_MODULE_2__["OrderByPipe"])); };
DataService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: DataService, factory: DataService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DataService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _http_request_processing_service__WEBPACK_IMPORTED_MODULE_1__["HttpRequestProcessingService"] }, { type: _pipe_order_by_pipe__WEBPACK_IMPORTED_MODULE_2__["OrderByPipe"] }]; }, null); })();


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./services/data.service */ "EnSQ");
/* harmony import */ var _form_form_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./form/form.component */ "urH6");
/* harmony import */ var _table_table_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./table/table.component */ "9Rdk");





class AppComponent {
    constructor(dataService) {
        this.dataService = dataService;
    }
    ngOnInit() {
        this.dataService.downloadData();
    }
    onAddRow(contact) {
        this.dataService.addRow(contact);
    }
    deleteRow(contact) {
        this.dataService.deleteRow(contact);
    }
    updateRow(contact) {
        this.dataService.updateRow(contact);
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 3, vars: 1, consts: [[1, "main-table"], [3, "rowAdded"], [3, "data", "rowDeleted", "rowUpdated"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "app-form", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("rowAdded", function AppComponent_Template_app_form_rowAdded_1_listener($event) { return ctx.onAddRow($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "app-table", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("rowDeleted", function AppComponent_Template_app_table_rowDeleted_2_listener($event) { return ctx.deleteRow($event); })("rowUpdated", function AppComponent_Template_app_table_rowUpdated_2_listener($event) { return ctx.updateRow($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data", ctx.dataService.data);
    } }, directives: [_form_form_component__WEBPACK_IMPORTED_MODULE_2__["FormComponent"], _table_table_component__WEBPACK_IMPORTED_MODULE_3__["TableComponent"]], styles: ["[_nghost-%COMP%] {\n  display: flex;\n  justify-content: center;\n}\n\n.main-table[_ngcontent-%COMP%] {\n  overflow: unset;\n  margin-top: 40px;\n}\n\n.main-table[_ngcontent-%COMP%]   app-form[_ngcontent-%COMP%] {\n  position: sticky;\n  top: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtFQUNBLHVCQUFBO0FBQ0Y7O0FBRUE7RUFNRSxlQUFBO0VBQ0EsZ0JBQUE7QUFKRjs7QUFGRTtFQUNFLGdCQUFBO0VBQ0EsTUFBQTtBQUlKIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLm1haW4tdGFibGUge1xuICBhcHAtZm9ybSB7XG4gICAgcG9zaXRpb246IHN0aWNreTtcbiAgICB0b3A6IDA7XG4gIH1cblxuICBvdmVyZmxvdzogdW5zZXQ7XG4gIG1hcmdpbi10b3A6IDQwcHhcbn1cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss'],
            }]
    }], function () { return [{ type: _services_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"] }]; }, null); })();


/***/ }),

/***/ "Z4Tw":
/*!*********************************************!*\
  !*** ./src/app/common/common.properties.ts ***!
  \*********************************************/
/*! exports provided: CommonProperties */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommonProperties", function() { return CommonProperties; });
/**
 * Class that represents common properties
 */
class CommonProperties {
}
/**
 * Api key to access database
 */
CommonProperties.API_KEY = '5fa6c75986395972883850fb';
/**
 * Url of database
 */
CommonProperties.DATABASE_URL = 'https://addressbook-a4ae.restdb.io/rest/adressbook';


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _table_table_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./table/table.component */ "9Rdk");
/* harmony import */ var _form_form_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./form/form.component */ "urH6");
/* harmony import */ var _table_table_row_table_row_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./table/table-row/table-row.component */ "dVaK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _pipe_order_by_pipe__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pipe/order-by.pipe */ "AN3i");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/table */ "+0xr");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common/http */ "tk/3");














class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [
        _pipe_order_by_pipe__WEBPACK_IMPORTED_MODULE_7__["OrderByPipe"]
    ], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__["BrowserAnimationsModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_9__["MatInputModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_10__["MatButtonModule"],
            _angular_material_table__WEBPACK_IMPORTED_MODULE_11__["MatTableModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_12__["HttpClientModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
        _table_table_component__WEBPACK_IMPORTED_MODULE_3__["TableComponent"],
        _form_form_component__WEBPACK_IMPORTED_MODULE_4__["FormComponent"],
        _table_table_row_table_row_component__WEBPACK_IMPORTED_MODULE_5__["TableRowComponent"],
        _pipe_order_by_pipe__WEBPACK_IMPORTED_MODULE_7__["OrderByPipe"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__["BrowserAnimationsModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_9__["MatInputModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_10__["MatButtonModule"],
        _angular_material_table__WEBPACK_IMPORTED_MODULE_11__["MatTableModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_12__["HttpClientModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
                    _table_table_component__WEBPACK_IMPORTED_MODULE_3__["TableComponent"],
                    _form_form_component__WEBPACK_IMPORTED_MODULE_4__["FormComponent"],
                    _table_table_row_table_row_component__WEBPACK_IMPORTED_MODULE_5__["TableRowComponent"],
                    _pipe_order_by_pipe__WEBPACK_IMPORTED_MODULE_7__["OrderByPipe"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__["BrowserAnimationsModule"],
                    _angular_material_input__WEBPACK_IMPORTED_MODULE_9__["MatInputModule"],
                    _angular_material_button__WEBPACK_IMPORTED_MODULE_10__["MatButtonModule"],
                    _angular_material_table__WEBPACK_IMPORTED_MODULE_11__["MatTableModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_12__["HttpClientModule"]
                ],
                providers: [
                    _pipe_order_by_pipe__WEBPACK_IMPORTED_MODULE_7__["OrderByPipe"]
                ],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "dVaK":
/*!********************************************************!*\
  !*** ./src/app/table/table-row/table-row.component.ts ***!
  \********************************************************/
/*! exports provided: TableRowComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TableRowComponent", function() { return TableRowComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class TableRowComponent {
    constructor() { }
    ngOnInit() {
    }
}
TableRowComponent.ɵfac = function TableRowComponent_Factory(t) { return new (t || TableRowComponent)(); };
TableRowComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TableRowComponent, selectors: [["app-table-row"]], inputs: { element: "element" }, decls: 0, vars: 0, template: function TableRowComponent_Template(rf, ctx) { }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RhYmxlL3RhYmxlLXJvdy90YWJsZS1yb3cuY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TableRowComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-table-row',
                templateUrl: './table-row.component.html',
                styleUrls: ['./table-row.component.scss']
            }]
    }], function () { return []; }, { element: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "urH6":
/*!****************************************!*\
  !*** ./src/app/form/form.component.ts ***!
  \****************************************/
/*! exports provided: FormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormComponent", function() { return FormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/button */ "bTqV");








function FormComponent_mat_error_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " \u041F\u043E\u0436\u0430\u043B\u0443\u0439\u0441\u0442\u0430 \u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u0438\u043C\u044F ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function FormComponent_mat_error_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " \u041F\u043E\u0436\u0430\u043B\u0443\u0439\u0441\u0442\u0430 \u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u0444\u0430\u043C\u0438\u043B\u0438\u044E ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function FormComponent_mat_error_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " \u041F\u043E\u0436\u0430\u043B\u0443\u0439\u0441\u0442\u0430 \u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u043E\u0442\u0447\u0435\u0441\u0442\u0432\u043E ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function FormComponent_mat_error_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " \u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0432\u0430\u043B\u0438\u0434\u043D\u044B\u0439 \u043D\u043E\u043C\u0435\u0440 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class FormComponent {
    constructor() {
        this.rowAdded = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ngOnInit() {
        this.addRowForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', {
                validators: [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
                ],
                updateOn: 'submit'
            }),
            surname: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', {
                validators: [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
                ],
                updateOn: 'submit'
            }),
            patronymic: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', {
                validators: [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
                ],
                updateOn: 'submit'
            }),
            phoneNumber: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, {
                validators: [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
                ],
                updateOn: 'change'
            }),
        });
    }
    /**
     * Submits forms if there are no errors
     */
    submitForm() {
        if (this.addRowForm.value.phoneNumber && this.addRowForm.value.phoneNumber.length !== 14) {
            this.addRowForm.controls.phoneNumber.setErrors({ 'incorrect': true });
        }
        if (!this.addRowForm.invalid) {
            this.rowAdded.emit({
                isFavourite: false,
                name: this.addRowForm.value.name,
                surname: this.addRowForm.value.surname,
                patronymic: this.addRowForm.value.patronymic,
                phoneNumber: '+7'.concat(this.addRowForm.value.phoneNumber),
            });
        }
    }
    /**
     * Formats number stroke to mask (XXX)XXX-XX-XX
     * @param event
     */
    formatNumber(event) {
        const control = this.addRowForm.controls.phoneNumber;
        if (control.value && event['data']) {
            if (control.value.length === 1) {
                control.setValue(('(').concat(control.value));
            }
            else if (control.value.length === 4) {
                control.setValue(control.value.concat(')'));
            }
            else if (control.value.length === 8) {
                control.setValue(control.value.concat('-'));
            }
            else if (control.value.length === 11) {
                control.setValue(control.value.concat('-'));
            }
        }
    }
    /**
     * Clears errors on specified control
     * @param control specified control
     */
    clearErrorsOnControl(control) {
        if (control.invalid) {
            control.setErrors(null);
        }
    }
}
FormComponent.ɵfac = function FormComponent_Factory(t) { return new (t || FormComponent)(); };
FormComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FormComponent, selectors: [["app-form"]], outputs: { rowAdded: "rowAdded" }, decls: 25, vars: 5, consts: [[1, "input-form", 3, "formGroup", "ngSubmit"], ["formControlName", "name", "matInput", "", "placeholder", "\u0412\u043B\u0430\u0434\u0438\u0441\u043B\u0430\u0432", "autocomplete", "off", 3, "input"], [4, "ngIf"], ["formControlName", "surname", "matInput", "", "placeholder", "\u0421\u043E\u043A\u043E\u043B\u043E\u0432\u0441\u043A\u0438\u0439", "autocomplete", "off", 3, "input"], ["formControlName", "patronymic", "matInput", "", "placeholder", "\u041C\u0430\u043A\u0441\u0438\u043C\u043E\u0432\u0438\u0447", "autocomplete", "off", 3, "input"], ["matPrefix", ""], ["formControlName", "phoneNumber", "maxlength", "14", "matInput", "", "placeholder", "(123)-45-67", "autocomplete", "off", 3, "input"], ["mat-flat-button", "", "color", "primary", "type", "submit"]], template: function FormComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function FormComponent_Template_form_ngSubmit_0_listener() { return ctx.submitForm(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\u0418\u043C\u044F");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "input", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("input", function FormComponent_Template_input_input_4_listener() { return ctx.clearErrorsOnControl(ctx.addRowForm.controls.name); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, FormComponent_mat_error_5_Template, 2, 0, "mat-error", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "\u0424\u0430\u043C\u0438\u043B\u0438\u044F");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("input", function FormComponent_Template_input_input_9_listener() { return ctx.clearErrorsOnControl(ctx.addRowForm.controls.surname); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, FormComponent_mat_error_10_Template, 2, 0, "mat-error", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "\u041E\u0442\u0447\u0435\u0441\u0442\u0432\u043E");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("input", function FormComponent_Template_input_input_14_listener() { return ctx.clearErrorsOnControl(ctx.addRowForm.controls.patronymic); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, FormComponent_mat_error_15_Template, 2, 0, "mat-error", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "\u041D\u043E\u043C\u0435\u0440");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "+7 \u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("input", function FormComponent_Template_input_input_21_listener($event) { return ctx.formatNumber($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, FormComponent_mat_error_22_Template, 2, 0, "mat-error", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.addRowForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.addRowForm.controls.name.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.addRowForm.controls.surname.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.addRowForm.controls.patronymic.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.addRowForm.controls.phoneNumber.invalid);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_2__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_2__["MatLabel"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_material_input__WEBPACK_IMPORTED_MODULE_3__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_2__["MatPrefix"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["MaxLengthValidator"], _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButton"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_2__["MatError"]], styles: ["mat-form-field[_ngcontent-%COMP%] {\n  padding: 10px;\n}\n\n.input-form[_ngcontent-%COMP%] {\n  position: sticky;\n  top: 0;\n  background: #fafafa;\n  z-index: 2;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9ybS9mb3JtLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtBQUNGOztBQUVBO0VBQ0UsZ0JBQUE7RUFDQSxNQUFBO0VBQ0EsbUJBQUE7RUFDQSxVQUFBO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9mb3JtL2Zvcm0uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJtYXQtZm9ybS1maWVsZCB7XG4gIHBhZGRpbmc6IDEwcHg7XG59XG5cbi5pbnB1dC1mb3JtIHtcbiAgcG9zaXRpb246IHN0aWNreTtcbiAgdG9wOiAwO1xuICBiYWNrZ3JvdW5kOiAjZmFmYWZhO1xuICB6LWluZGV4OiAyO1xufVxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FormComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-form',
                templateUrl: './form.component.html',
                styleUrls: ['./form.component.scss']
            }]
    }], function () { return []; }, { rowAdded: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "vL20":
/*!*************************************************************!*\
  !*** ./src/app/services/http-request-processing.service.ts ***!
  \*************************************************************/
/*! exports provided: HttpRequestProcessingService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpRequestProcessingService", function() { return HttpRequestProcessingService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _common_common_properties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/common.properties */ "Z4Tw");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");




class HttpRequestProcessingService {
    /**
     * Create instance of http request processing service
     * @param httpService
     */
    constructor(httpService) {
        this.httpService = httpService;
    }
    get(url = '') {
        return this.httpService.get(_common_common_properties__WEBPACK_IMPORTED_MODULE_1__["CommonProperties"].DATABASE_URL + url, {
            headers: HttpRequestProcessingService.DEFAULT_HTTP_HEADERS
        });
    }
    post(url = '', contact) {
        return this.httpService.post(_common_common_properties__WEBPACK_IMPORTED_MODULE_1__["CommonProperties"].DATABASE_URL + url, contact, {
            headers: HttpRequestProcessingService.DEFAULT_HTTP_HEADERS
        });
    }
    delete(url = '') {
        return this.httpService.delete(_common_common_properties__WEBPACK_IMPORTED_MODULE_1__["CommonProperties"].DATABASE_URL.concat(`/${url}`), {
            headers: HttpRequestProcessingService.DEFAULT_HTTP_HEADERS
        });
    }
    put(url, contact) {
        return this.httpService.put(_common_common_properties__WEBPACK_IMPORTED_MODULE_1__["CommonProperties"].DATABASE_URL.concat(`/${url}`), contact, {
            headers: HttpRequestProcessingService.DEFAULT_HTTP_HEADERS
        });
    }
}
/**
 * Default headers for
 * @private
 */
HttpRequestProcessingService.DEFAULT_HTTP_HEADERS = {
    "x-apikey": _common_common_properties__WEBPACK_IMPORTED_MODULE_1__["CommonProperties"].API_KEY,
    "content-type": "application/json",
    "cache-control": "no-cache",
};
HttpRequestProcessingService.ɵfac = function HttpRequestProcessingService_Factory(t) { return new (t || HttpRequestProcessingService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
HttpRequestProcessingService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: HttpRequestProcessingService, factory: HttpRequestProcessingService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HttpRequestProcessingService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
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
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map