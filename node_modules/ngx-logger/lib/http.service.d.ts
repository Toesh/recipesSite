import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HttpMetaDataInterface } from './types/http-meta-data.interface';
export declare class NGXLoggerHttpService {
    private readonly http;
    constructor(http: HttpClient);
    logOnServer(url: string, message: string, additional: any[], metaData: HttpMetaDataInterface): Observable<any>;
}
