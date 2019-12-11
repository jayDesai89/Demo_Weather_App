import { Component, OnInit, AfterViewInit, Input } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { WeatherDataService } from '../services/weatherData/weather-data.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit, AfterViewInit {
  city = 'Baroda,In';
  displayWeather = false;
  findCityForm: FormGroup;
  cityWeather;
  weatherInDegrees;
  forecastedWeather;

   get cityName() {
     return this.findCityForm.get('nameOfCity');
   }
  /**: any
   * Get name of the city
   * Get the weather of that city
   * @param formBuilder
   * @param weatherDataService
   */

  constructor(private formBuilder: FormBuilder,
    private weatherDataService: WeatherDataService ) {
  }

  ngOnInit() {
    this.findCityForm = this.formBuilder.group({
      'nameOfCity': new FormControl('', Validators.required)
    });
  }

  getWeatherForCity(value) {
    this.city = value.nameOfCity;
    this.weatherDataService.getWeatherData(this.city).subscribe((res) => {
      this.cityWeather = res;
      this.weatherInDegrees = this.cityWeather.main.temp;
      this.switchUnit('kelvin');
    })

  }

  getForecastedWeather(value) {
    this.weatherDataService.getForecastOfWeather(this.city).subscribe((res ) => {
      this.forecastedWeather = res;
      console.log(res);
    })
  }

  switchUnit(tempUnit) {
    const unitCelsius = Math.floor(this.cityWeather.main.temp - 273);
    const unitFahrenheit = Math.floor(unitCelsius * (9 / 5) + 32);
    if(tempUnit === 'celsius') {
      this.weatherInDegrees = unitCelsius ;
    } else if (tempUnit === 'fahrenheit' || tempUnit === 'kelvin') {
      this.weatherInDegrees = unitFahrenheit;
    }
  }

  ngAfterViewInit() {

  }
}
