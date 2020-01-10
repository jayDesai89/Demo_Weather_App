import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { WeatherDataByCity } from 'src/app/models/dataByCity';
import { ForecastedWeather } from 'src/app/models/forcastedData';
import { ApplicationErrors } from 'src/app/models/app-errors';

@Injectable({
  providedIn: 'root'
})
export class WeatherDataService {
  static STATUS_ERROR = 'FAILURE';
  static STATUS_SUCCESS = 'SUCCESS';
  status: string;
  apiRes;

  // tslint:disable-next-line: variable-name
  constructor(protected _http: HttpClient) { }
  /**
   * Practical Approach would be,
   * Subscribe to the response, set res.success(), res.failure() methods
   */

  // Pass city name in query get its weather data
  getWeatherData(q: any): Observable<WeatherDataByCity> {
    this.apiRes = this._http.get(`http://api.openweathermap.org/data/2.5/weather?q=${q}&APPID=5d2a116653d0785ed8c6889aa535b3f2`)
    .pipe(
      retry(1),
      catchError(this.handleError)
    );

    return this.apiRes as Observable<WeatherDataByCity>;
  }

  handleError(error) {
    const errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Client side Error
      return throwError(error) as ApplicationErrors;
    }
  }
  // Pass city name in query get its weather forecast
  getForecastOfWeather(q: any): Observable<ForecastedWeather> {
    this.apiRes = this
    ._http
    .get(`http://api.openweathermap.org/data/2.5/forecast?q=${q}&APPID=5d2a116653d0785ed8c6889aa535b3f2`);
    return this.apiRes as Observable<ForecastedWeather>;
  }

  /**
   * Was this request successful?
   */
  public isSuccess(): boolean {
    return (this.status === WeatherDataService.STATUS_SUCCESS);
  }
}
