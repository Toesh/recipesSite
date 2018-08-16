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
export { NGXLoggerConfigEngine };
function NGXLoggerConfigEngine_tsickle_Closure_declarations() {
    /** @type {?} */
    NGXLoggerConfigEngine.prototype._config;
    /** @type {?} */
    NGXLoggerConfigEngine.prototype.config;
}
//# sourceMappingURL=config.engine.js.map
