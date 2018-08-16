import { Injectable, Inject, PLATFORM_ID, NgModule } from '@angular/core';
import { HttpClient, HttpHeaders, HttpClientModule } from '@angular/common/http';
import { __spread } from 'tslib';
import { isPlatformBrowser, CommonModule } from '@angular/common';
import { of } from 'rxjs';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
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
NGXLoggerHttpService.decorators = [
    { type: Injectable },
];
/** @nocollapse */
NGXLoggerHttpService.ctorParameters = function () { return [
    { type: HttpClient, },
]; };

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/** @enum {number} */
var NgxLoggerLevel = {
    TRACE: 0,
    DEBUG: 1,
    INFO: 2,
    LOG: 3,
    WARN: 4,
    ERROR: 5,
    OFF: 6,
};
NgxLoggerLevel[NgxLoggerLevel.TRACE] = "TRACE";
NgxLoggerLevel[NgxLoggerLevel.DEBUG] = "DEBUG";
NgxLoggerLevel[NgxLoggerLevel.INFO] = "INFO";
NgxLoggerLevel[NgxLoggerLevel.LOG] = "LOG";
NgxLoggerLevel[NgxLoggerLevel.WARN] = "WARN";
NgxLoggerLevel[NgxLoggerLevel.ERROR] = "ERROR";
NgxLoggerLevel[NgxLoggerLevel.OFF] = "OFF";

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var LoggerConfig = /** @class */ (function () {
    function LoggerConfig() {
    }
    return LoggerConfig;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var NGXLoggerConfigEngine = /** @class */ (function () {
    /**
     * @param {?} config
     */
    function NGXLoggerConfigEngine(config) {
        this.config = config;
        this._config = config;
    }
    /**
     * @param {?} config
     * @return {?}
     */
    NGXLoggerConfigEngine.prototype.updateConfig = function (config) {
        this._config = config;
    };
    /**
     * @return {?}
     */
    NGXLoggerConfigEngine.prototype.getConfig = function () {
        return this._config;
    };
    return NGXLoggerConfigEngine;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var NGXLoggerUtils = /** @class */ (function () {
    function NGXLoggerUtils() {
    }
    /**
     * @param {?} timestamp
     * @param {?} logLevel
     * @param {?} fileName
     * @param {?} lineNumber
     * @return {?}
     */
    NGXLoggerUtils.prepareMetaString = function (timestamp, logLevel, fileName, lineNumber) {
        var /** @type {?} */ fileDetails = fileName ? " [" + fileName + ":" + lineNumber + "]" : '';
        return timestamp + " " + logLevel + fileDetails;
    };
    /**
     * @param {?} level
     * @return {?}
     */
    NGXLoggerUtils.getColor = function (level) {
        switch (level) {
            case NgxLoggerLevel.TRACE:
                return 'blue';
            case NgxLoggerLevel.DEBUG:
                return 'teal';
            case NgxLoggerLevel.INFO:
            case NgxLoggerLevel.LOG:
                return 'gray';
            case NgxLoggerLevel.WARN:
            case NgxLoggerLevel.ERROR:
                return 'red';
            case NgxLoggerLevel.OFF:
            default:
                return;
        }
    };
    /**
     *  This allows us to see who called the logger
     *  \@return {string}
     *  \@private
     * @return {?}
     */
    NGXLoggerUtils.getCallerDetails = function () {
        var /** @type {?} */ err = (new Error(''));
        try {
            // this should produce the line which NGX Logger was called
            var /** @type {?} */ callerLine = err.stack.split('\n')[4].split('/');
            // returns the file:lineNumber
            var /** @type {?} */ fileLineNumber = callerLine[callerLine.length - 1].replace(/[)]/g, '').split(':');
            return {
                fileName: fileLineNumber[0],
                lineNumber: fileLineNumber[1]
            };
        }
        catch (e) {
            return {
                fileName: null,
                lineNumber: null
            };
        }
    };
    /**
     * @param {?} message
     * @return {?}
     */
    NGXLoggerUtils.prepareMessage = function (message) {
        try {
            if (typeof message !== 'string' && !(message instanceof Error)) {
                message = JSON.stringify(message, null, 2);
            }
        }
        catch (e) {
            // additional = [message, ...additional];
            message = 'The provided "message" value could not be parsed with JSON.stringify().';
        }
        return message;
    };
    /**
     * @param {?} additional
     * @return {?}
     */
    NGXLoggerUtils.prepareAdditionalParameters = function (additional) {
        if (additional === null || additional === undefined) {
            return null;
        }
        return additional.map(function (next, idx) {
            try {
                // We just want to make sure the JSON can be parsed, we do not want to actually change the type
                if (typeof next === 'object') {
                    JSON.stringify(next);
                }
                return next;
            }
            catch (e) {
                return "The additional[" + idx + "] value could not be parsed using JSON.stringify().";
            }
        });
    };
    return NGXLoggerUtils;
}());

var /** @type {?} */ Levels = [
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
                console.warn.apply(console, __spread([metaString + " ", message], additional));
                break;
            case NgxLoggerLevel.ERROR:
                console.error.apply(console, __spread([metaString + " ", message], additional));
                break;
            case NgxLoggerLevel.INFO:
                console.info.apply(console, __spread([metaString + " ", message], additional));
                break;
            default:
                console.log.apply(console, __spread([metaString + " ", message], additional));
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
        console.log.apply(console, __spread(["%c" + metaString, "color:" + color, message], (additional || [])));
    };
    return NGXLogger;
}());
NGXLogger.decorators = [
    { type: Injectable },
];
/** @nocollapse */
NGXLogger.ctorParameters = function () { return [
    { type: NGXLoggerHttpService, },
    { type: LoggerConfig, },
    { type: undefined, decorators: [{ type: Inject, args: [PLATFORM_ID,] },] },
]; };

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * CustomNGXLoggerService is designed to allow users to get a new instance of a logger
 */
var CustomNGXLoggerService = /** @class */ (function () {
    /**
     * @param {?} httpService
     * @param {?} platformId
     */
    function CustomNGXLoggerService(httpService, platformId) {
        this.httpService = httpService;
        this.platformId = platformId;
    }
    /**
     * @param {?} config
     * @param {?=} httpService
     * @return {?}
     */
    CustomNGXLoggerService.prototype.create = function (config, httpService) {
        // you can inject your own httpService or use the default,
        return new NGXLogger(httpService || this.httpService, config, this.platformId);
    };
    return CustomNGXLoggerService;
}());
CustomNGXLoggerService.decorators = [
    { type: Injectable },
];
/** @nocollapse */
CustomNGXLoggerService.ctorParameters = function () { return [
    { type: NGXLoggerHttpService, },
    { type: undefined, decorators: [{ type: Inject, args: [PLATFORM_ID,] },] },
]; };

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var HttpMetaDataInterface = /** @class */ (function () {
    function HttpMetaDataInterface() {
    }
    return HttpMetaDataInterface;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var NGXLoggerMock = /** @class */ (function () {
    function NGXLoggerMock() {
    }
    /**
     * @param {?} message
     * @param {...?} additional
     * @return {?}
     */
    NGXLoggerMock.prototype.trace = function (message) {
        var additional = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            additional[_i - 1] = arguments[_i];
        }
    };
    /**
     * @param {?} message
     * @param {...?} additional
     * @return {?}
     */
    NGXLoggerMock.prototype.debug = function (message) {
        var additional = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            additional[_i - 1] = arguments[_i];
        }
    };
    /**
     * @param {?} message
     * @param {...?} additional
     * @return {?}
     */
    NGXLoggerMock.prototype.info = function (message) {
        var additional = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            additional[_i - 1] = arguments[_i];
        }
    };
    /**
     * @param {?} message
     * @param {...?} additional
     * @return {?}
     */
    NGXLoggerMock.prototype.log = function (message) {
        var additional = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            additional[_i - 1] = arguments[_i];
        }
    };
    /**
     * @param {?} message
     * @param {...?} additional
     * @return {?}
     */
    NGXLoggerMock.prototype.warn = function (message) {
        var additional = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            additional[_i - 1] = arguments[_i];
        }
    };
    /**
     * @param {?} message
     * @param {...?} additional
     * @return {?}
     */
    NGXLoggerMock.prototype.error = function (message) {
        var additional = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            additional[_i - 1] = arguments[_i];
        }
    };
    /**
     * @param {?} config
     * @return {?}
     */
    NGXLoggerMock.prototype.updateConfig = function (config) {
    };
    return NGXLoggerMock;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * CustomNGXLoggerServiceMock is a mock for CustomNGXLoggerService
 */
var CustomNGXLoggerServiceMock = /** @class */ (function () {
    function CustomNGXLoggerServiceMock() {
    }
    /**
     * @return {?}
     */
    CustomNGXLoggerServiceMock.prototype.create = function () {
        // you can inject your own httpService or use the default,
        return new NGXLoggerMock();
    };
    return CustomNGXLoggerServiceMock;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var NGXLoggerHttpServiceMock = /** @class */ (function () {
    function NGXLoggerHttpServiceMock() {
    }
    /**
     * @param {?} url
     * @param {?} message
     * @param {?} additional
     * @param {?} timestamp
     * @param {?} logLevel
     * @return {?}
     */
    NGXLoggerHttpServiceMock.prototype.logOnServer = function (url, message, additional, timestamp, logLevel) {
        return of({});
    };
    return NGXLoggerHttpServiceMock;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

export { LoggerModule, Levels, NGXLogger, LoggerConfig, CustomNGXLoggerService, NGXLoggerHttpService, NGXLoggerUtils, NgxLoggerLevel, HttpMetaDataInterface, NGXLoggerMock, CustomNGXLoggerServiceMock, NGXLoggerHttpServiceMock };
//# sourceMappingURL=ngx-logger.js.map
