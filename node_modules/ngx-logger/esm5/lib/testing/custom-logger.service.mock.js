/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { NGXLoggerMock } from './logger.service.mock';
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
export { CustomNGXLoggerServiceMock };
//# sourceMappingURL=custom-logger.service.mock.js.map
