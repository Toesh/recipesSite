/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { NGXLoggerHttpService } from './http.service';
import { NGXLogger } from './logger.service';
/**
 * CustomNGXLoggerService is designed to allow users to get a new instance of a logger
 */
export class CustomNGXLoggerService {
    /**
     * @param {?} httpService
     * @param {?} platformId
     */
    constructor(httpService, platformId) {
        this.httpService = httpService;
        this.platformId = platformId;
    }
    /**
     * @param {?} config
     * @param {?=} httpService
     * @return {?}
     */
    create(config, httpService) {
        // you can inject your own httpService or use the default,
        return new NGXLogger(httpService || this.httpService, config, this.platformId);
    }
}
CustomNGXLoggerService.decorators = [
    { type: Injectable },
];
/** @nocollapse */
CustomNGXLoggerService.ctorParameters = () => [
    { type: NGXLoggerHttpService, },
    { type: undefined, decorators: [{ type: Inject, args: [PLATFORM_ID,] },] },
];
function CustomNGXLoggerService_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    CustomNGXLoggerService.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    CustomNGXLoggerService.ctorParameters;
    /** @type {?} */
    CustomNGXLoggerService.prototype.httpService;
    /** @type {?} */
    CustomNGXLoggerService.prototype.platformId;
}
//# sourceMappingURL=custom-logger.service.js.map
