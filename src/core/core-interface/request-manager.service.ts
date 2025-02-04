import {HttpClient, HttpParams} from '@angular/common/http';
import {Injectable, Injector} from '@angular/core';
import {Observable} from 'rxjs';

@Injectable()
export class RequestManager {
  protected basePath = '';
  protected http!: HttpClient;

  constructor(protected injector: Injector) {
    this.http = this.injector.get(HttpClient);
  }

  doRequest<T>(
    method: keyof HttpClient,
    url: string,
    body: unknown = undefined,
    params?: keyof HttpParams,
  ): Observable<T> {
    console.log(params);
    return this.http.request<T>(method, url, {body});
  }
}
