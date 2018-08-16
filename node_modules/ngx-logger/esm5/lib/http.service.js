/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
var NGXLoggerHttpService = /** @class */ (function () {
    /**
     * @param {?} http
     */
    function NGXLoggerHttpService(http) {
        this.http = http;
    }
    /**
     * @param {?} url
     * @param {?} message
     * @param {?} additional
     * @param {?} metaData
     * @return {?}
     */
    NGXLoggerHttpService.prototype.logOnServer = function (url, message, additional, metaData) {
        var /** @type {?} */ body = {
            message: message,
            additional: additional,
            level: metaData.level,
            timestamp: metaData.timestamp,
            fileName: metaData.fileName,
            lineNumber: metaData.lineNumber
        };
        var /** @type {?} */ options = {
            headers: new HttpHeaders().set('Content-Type', 'application/json')
        };
        return this.http.post(url, body, options);
    };
    return NGXLoggerHttpService;
}());
export { NGXLoggerHttpService };
NGXLoggerHttpService.decorators = [
    { type: Injectable },
];
/** @nocollapse */
NGXLoggerHttpService.ctorParameters = function () { return [
    { type: HttpClient, },
]; };
function NGXLoggerHttpService_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    NGXLoggerHttpService.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    NGXLoggerHttpService.ctorParameters;
    /** @type {?} */
    NGXLoggerHttpService.prototype.http;
}
//# sourceMappingURL=http.service.js.map
