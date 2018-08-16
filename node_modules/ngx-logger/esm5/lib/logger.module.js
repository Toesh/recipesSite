/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { NGXLogger } from './logger.service';
import { LoggerConfig } from './logger.config';
import { CustomNGXLoggerService } from './custom-logger.service';
import { NGXLoggerHttpService } from './http.service';
export { Levels, NGXLogger } from './logger.service';
export { LoggerConfig } from './logger.config';
export { CustomNGXLoggerService } from './custom-logger.service';
export { NGXLoggerHttpService } from './http.service';
export { NGXLoggerUtils } from './utils/logger.utils';
export { NgxLoggerLevel } from './types/logger-level.enum';
export { HttpMetaDataInterface } from './types/http-meta-data.interface';
var LoggerModule = /** @class */ (function () {
    function LoggerModule() {
    }
    /**
     * @param {?} config
     * @return {?}
     */
    LoggerModule.forRoot = function (config) {
        return {
            ngModule: LoggerModule,
            providers: [
                { provide: LoggerConfig, useValue: config || {} },
                NGXLogger,
                NGXLoggerHttpService,
                CustomNGXLoggerService
            ]
        };
    };
    /**
     * @return {?}
     */
    LoggerModule.forChild = function () {
        return {
            ngModule: LoggerModule,
            providers: [
                NGXLogger,
                NGXLoggerHttpService,
                CustomNGXLoggerService
            ]
        };
    };
    return LoggerModule;
}());
export { LoggerModule };
LoggerModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule,
                    HttpClientModule
                ],
                providers: [
                    NGXLogger,
                    NGXLoggerHttpService,
                    CustomNGXLoggerService
                ]
            },] },
];
function LoggerModule_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    LoggerModule.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    LoggerModule.ctorParameters;
}
//# sourceMappingURL=logger.module.js.map
