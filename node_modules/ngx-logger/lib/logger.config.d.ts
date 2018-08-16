import { NgxLoggerLevel } from './types/logger-level.enum';
export declare class LoggerConfig {
    level: NgxLoggerLevel;
    serverLogLevel?: NgxLoggerLevel;
    serverLoggingUrl?: string;
}
