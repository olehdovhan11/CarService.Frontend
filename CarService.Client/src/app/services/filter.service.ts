import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import { NameValuePair } from '../models/name-value-pair';
import { environment } from '../../environments/environment';

@Injectable()
export class FilterService {
  commonUrlPart = environment['CarServiceApiBaseUrl'] + '/cars/dropdown';
  typesUrl = `${this.commonUrlPart}/types`;
  makesUrl = `${this.commonUrlPart}/makes`;
  modelsUrl = `${this.commonUrlPart}/models`;
  constructor(private httpClient: HttpClient) { }

  getCarTypes(): Observable<NameValuePair[]> {
    return this.httpClient
    .get<NameValuePair[]>(this.typesUrl);
  }
  getCarMakes(categoryId: number): Observable<NameValuePair[]> {
    return this.httpClient
    .get<NameValuePair[]>(`${this.makesUrl}/${categoryId}`);
  }

  getCarModels(categoryId: number, makeId: number): Observable<NameValuePair[]> {
    return this.httpClient
    .get<NameValuePair[]>(`${this.modelsUrl}/${categoryId}/${makeId}`);
  }
}
