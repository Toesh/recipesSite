/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { NgxLoggerLevel } from '../types/logger-level.enum';
export class NGXLoggerUtils {
    /**
     * @param {?} timestamp
     * @param {?} logLevel
     * @param {?} fileName
     * @param {?} lineNumber
     * @return {?}
     */
    static prepareMetaString(timestamp, logLevel, fileName, lineNumber) {
        const /** @type {?} */ fileDetails = fileName ? ` [${fileName}:${lineNumber}]` : '';
        return `${timestamp} ${logLevel}${fileDetails}`;
    }
    /**
     * @param {?} level
     * @return {?}
     */
    static getColor(level) {
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
    }
    /**
     *  This allows us to see who called the logger
     *  \@return {string}
     *  \@private
     * @return {?}
     */
    static getCallerDetails() {
        const /** @type {?} */ err = (new Error(''));
        try {
            // this should produce the line which NGX Logger was called
            const /** @type {?} */ callerLine = err.stack.split('\n')[4].split('/');
            // returns the file:lineNumber
            const /** @type {?} */ fileLineNumber = callerLine[callerLine.length - 1].replace(/[)]/g, '').split(':');
            return {
                fileName: fileLineNumber[0],
                lineNumber: fileLineNumber[1]
            };
        }
        catch (/** @type {?} */ e) {
            return {
                fileName: null,
                lineNumber: null
            };
        }
    }
    /**
     * @param {?} message
     * @return {?}
     */
    static prepareMessage(message) {
        try {
            if (typeof message !== 'string' && !(message instanceof Error)) {
                message = JSON.stringify(message, null, 2);
            }
        }
        catch (/** @type {?} */ e) {
            // additional = [message, ...additional];
            message = 'The provided "message" value could not be parsed with JSON.stringify().';
        }
        return message;
    }
    /**
     * @param {?} additional
     * @return {?}
     */
    static prepareAdditionalParameters(additional) {
        if (additional === null || additional === undefined) {
            return null;
        }
        return additional.map((next, idx) => {
            try {
                // We just want to make sure the JSON can be parsed, we do not want to actually change the type
                if (typeof next === 'object') {
                    JSON.stringify(next);
                }
                return next;
            }
            catch (/** @type {?} */ e) {
                return `The additional[${idx}] value could not be parsed using JSON.stringify().`;
            }
        });
    }
}
//# sourceMappingURL=logger.utils.js.map
