import * as tslib_1 from "tslib";
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { NGXLoggerHttpService } from './http.service';
import { NgxLoggerLevel } from './types/logger-level.enum';
import { LoggerConfig } from './logger.config';
import { NGXLoggerConfigEngine } from './config.engine';
import { NGXLoggerUtils } from './utils/logger.utils';
export var /** @type {?} */ Levels = [
    'TRACE',
    'DEBUG',
    'INFO',
    'LOG',
    'WARN',
    'ERROR',
    'OFF'
];
var NGXLogger = /** @class */ (function () {
    /**
     * @param {?} httpService
     * @param {?} loggerConfig
     * @param {?} platformId
     */
    function NGXLogger(httpService, loggerConfig, platformId) {
        this.httpService = httpService;
        this.platformId = platformId;
        this._isIE = isPlatformBrowser(platformId) &&
            !!(navigator.userAgent.indexOf('MSIE') !== -1 || navigator.userAgent.match(/Trident\//) || navigator.userAgent.match(/Edge\//));
        // each instance of the logger should have their own config engine
        this.configService = new NGXLoggerConfigEngine(loggerConfig);
    }
    /**
     * @param {?} message
     * @param {...?} additional
     * @return {?}
     */
    NGXLogger.prototype.trace = function (message) {
        var additional = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            additional[_i - 1] = arguments[_i];
        }
        this._log(NgxLoggerLevel.TRACE, message, additional);
    };
    /**
     * @param {?} message
     * @param {...?} additional
     * @return {?}
     */
    NGXLogger.prototype.debug = function (message) {
        var additional = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            additional[_i - 1] = arguments[_i];
        }
        this._log(NgxLoggerLevel.DEBUG, message, additional);
    };
    /**
     * @param {?} message
     * @param {...?} additional
     * @return {?}
     */
    NGXLogger.prototype.info = function (message) {
        var additional = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            additional[_i - 1] = arguments[_i];
        }
        this._log(NgxLoggerLevel.INFO, message, additional);
    };
    /**
     * @param {?} message
     * @param {...?} additional
     * @return {?}
     */
    NGXLogger.prototype.log = function (message) {
        var additional = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            additional[_i - 1] = arguments[_i];
        }
        this._log(NgxLoggerLevel.LOG, message, additional);
    };
    /**
     * @param {?} message
     * @param {...?} additional
     * @return {?}
     */
    NGXLogger.prototype.warn = function (message) {
        var additional = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            additional[_i - 1] = arguments[_i];
        }
        this._log(NgxLoggerLevel.WARN, message, additional);
    };
    /**
     * @param {?} message
     * @param {...?} additional
     * @return {?}
     */
    NGXLogger.prototype.error = function (message) {
        var additional = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            additional[_i - 1] = arguments[_i];
        }
        this._log(NgxLoggerLevel.ERROR, message, additional);
    };
    /**
     * @param {?} config
     * @return {?}
     */
    NGXLogger.prototype.updateConfig = function (config) {
        this.configService.updateConfig(config);
    };
    /**
     * @param {?} level
     * @param {?} metaString
     * @param {?} message
     * @param {?} additional
     * @return {?}
     */
    NGXLogger.prototype._logIE = function (level, metaString, message, additional) {
        // make sure additional isn't null or undefined so that ...additional doesn't error
        additional = additional || [];
        switch (level) {
            case NgxLoggerLevel.WARN:
                console.warn.apply(console, tslib_1.__spread([metaString + " ", message], additional));
                break;
            case NgxLoggerLevel.ERROR:
                console.error.apply(console, tslib_1.__spread([metaString + " ", message], additional));
                break;
            case NgxLoggerLevel.INFO:
                console.info.apply(console, tslib_1.__spread([metaString + " ", message], additional));
                break;
            default:
                console.log.apply(console, tslib_1.__spread([metaString + " ", message], additional));
        }
    };
    /**
     * @param {?} level
     * @param {?} message
     * @param {?=} additional
     * @param {?=} logOnServer
     * @return {?}
     */
    NGXLogger.prototype._log = function (level, message, additional, logOnServer) {
        var _this = this;
        if (additional === void 0) { additional = []; }
        if (logOnServer === void 0) { logOnServer = true; }
        if (!message) {
            return;
        }
        var /** @type {?} */ logLevelString = Levels[level];
        message = NGXLoggerUtils.prepareMessage(message);
        // only use validated parameters for HTTP requests
        var /** @type {?} */ validatedAdditionalParameters = NGXLoggerUtils.prepareAdditionalParameters(additional);
        var /** @type {?} */ timestamp = new Date().toISOString();
        var /** @type {?} */ config = this.configService.getConfig();
        var /** @type {?} */ callerDetails = NGXLoggerUtils.getCallerDetails();
        if (logOnServer && config.serverLoggingUrl && level >= config.serverLogLevel) {
            var /** @type {?} */ metaData = {
                level: level,
                timestamp: timestamp,
                fileName: callerDetails.fileName,
                lineNumber: callerDetails.lineNumber,
            };
            // make sure the stack gets sent to the server
            message = message instanceof Error ? message.stack : message;
            // Allow logging on server even if client log level is off
            this.httpService.logOnServer(config.serverLoggingUrl, message, validatedAdditionalParameters, metaData).subscribe(function (res) {
                // I don't think we should do anything on success
            }, function (error) {
                _this._log(NgxLoggerLevel.ERROR, "FAILED TO LOG ON SERVER: " + message, [error], false);
            });
        }
        // if no message or the log level is less than the environ
        if (level < config.level) {
            return;
        }
        var /** @type {?} */ metaString = NGXLoggerUtils.prepareMetaString(timestamp, logLevelString, callerDetails.fileName, callerDetails.lineNumber);
        // Coloring doesn't work in IE
        if (this._isIE) {
            return this._logIE(level, metaString, message, additional);
        }
        var /** @type {?} */ color = NGXLoggerUtils.getColor(level);
        console.log.apply(console, tslib_1.__spread(["%c" + metaString, "color:" + color, message], (additional || [])));
    };
    return NGXLogger;
}());
export { NGXLogger };
NGXLogger.decorators = [
    { type: Injectable },
];
/** @nocollapse */
NGXLogger.ctorParameters = function () { return [
    { type: NGXLoggerHttpService, },
    { type: LoggerConfig, },
    { type: undefined, decorators: [{ type: Inject, args: [PLATFORM_ID,] },] },
]; };
function NGXLogger_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    NGXLogger.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    NGXLogger.ctorParameters;
    /** @type {?} */
    NGXLogger.prototype._isIE;
    /** @type {?} */
    NGXLogger.prototype.configService;
    /** @type {?} */
    NGXLogger.prototype.httpService;
    /** @type {?} */
    NGXLogger.prototype.platformId;
}
//# sourceMappingURL=logger.service.js.map
