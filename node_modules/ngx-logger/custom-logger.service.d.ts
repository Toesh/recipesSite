import { LoggerConfig } from './logger.config';
import { NGXLoggerHttpService } from './http.service';
import { NGXLogger } from './logger.service';
/**
 * CustomNGXLoggerService is designed to allow users to get a new instance of a logger
 */
export declare class CustomNGXLoggerService {
    private readonly httpService;
    private readonly platformId;
    constructor(httpService: NGXLoggerHttpService, platformId: any);
    create(config: LoggerConfig, httpService?: NGXLoggerHttpService): NGXLogger;
}
