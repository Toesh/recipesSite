/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { NgxLoggerLevel } from '../types/logger-level.enum';
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
export { NGXLoggerUtils };
//# sourceMappingURL=logger.utils.js.map
