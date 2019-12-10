import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { WeatherDataByCity } from 'src/app/models/dataByCity';

@Injectable({
  providedIn: 'root'
})
export class WeatherDataService {
  static STATUS_ERROR   = 'FAILURE';
  static STATUS_SUCCESS = 'SUCCESS';
  status: string;
  apiRes;

  // tslint:disable-next-line: variable-name
  constructor(protected _http: HttpClient) { }

  // Pass city name in query
  getWeatherData(q: any): Observable<WeatherDataByCity> {
    /**
     * Practical Approach would be,
     * Subscribe to the response, set res.success(), res.failure() methods
     */
    this.apiRes = this._http.get(`http://api.openweathermap.org/data/2.5/forecast?q=${q}&APPID=5d2a116653d0785ed8c6889aa535b3f2`);
    return this.apiRes as Observable<WeatherDataByCity>;
  }

  /**
   * Was this request successful?
   */
  public isSuccess(): boolean {
    return (this.status === WeatherDataService.STATUS_SUCCESS);
  }
}
