/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
export class NGXLoggerHttpService {
    /**
     * @param {?} http
     */
    constructor(http) {
        this.http = http;
    }
    /**
     * @param {?} url
     * @param {?} message
     * @param {?} additional
     * @param {?} metaData
     * @return {?}
     */
    logOnServer(url, message, additional, metaData) {
        const /** @type {?} */ body = {
            message: message,
            additional: additional,
            level: metaData.level,
            timestamp: metaData.timestamp,
            fileName: metaData.fileName,
            lineNumber: metaData.lineNumber
        };
        const /** @type {?} */ options = {
            headers: new HttpHeaders().set('Content-Type', 'application/json')
        };
        return this.http.post(url, body, options);
    }
}
NGXLoggerHttpService.decorators = [
    { type: Injectable },
];
/** @nocollapse */
NGXLoggerHttpService.ctorParameters = () => [
    { type: HttpClient, },
];
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
