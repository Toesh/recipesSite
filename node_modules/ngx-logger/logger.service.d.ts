import { NGXLoggerHttpService } from './http.service';
import { LoggerConfig } from './logger.config';
export declare const Levels: string[];
export declare class NGXLogger {
    private readonly httpService;
    private readonly platformId;
    private _isIE;
    private configService;
    constructor(httpService: NGXLoggerHttpService, loggerConfig: LoggerConfig, platformId: any);
    trace(message: any, ...additional: any[]): void;
    debug(message: any, ...additional: any[]): void;
    info(message: any, ...additional: any[]): void;
    log(message: any, ...additional: any[]): void;
    warn(message: any, ...additional: any[]): void;
    error(message: any, ...additional: any[]): void;
    updateConfig(config: LoggerConfig): void;
    private _logIE(level, metaString, message, additional);
    private _log(level, message, additional?, logOnServer?);
}
