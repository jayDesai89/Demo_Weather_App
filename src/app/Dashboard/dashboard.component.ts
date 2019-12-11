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
    console.log(value);
    this.city = value.nameOfCity;
    this.weatherDataService.getWeatherData(this.city).subscribe((res) => {
      this.cityWeather = res;
      console.log(this.cityWeather);
      this.weatherInDegrees = this.cityWeather.main.temp;
      this.switchUnit('kelvin');
      // this.tempConvertor(this.cityWeather.main.temp, 'kelvin');
    })

  }

  getForcastedWeather(value) {
    this.weatherDataService.getForcastOfWeather(this.city).subscribe((res) => {
      console.log('Forcasted', res)
    })
  }

  // tempConvertor(tempVal) {
  //   const unitCelsius = tempVal - 273;
  //   const unitFahrenheit = Math.floor(unitCelsius * (9 / 5) + 32);
  //   return this.weatherDegreesFahrenheit = unitFahrenheit;
  // }

  switchUnit(tempUnit) {
    const unitCelsius = this.cityWeather.main.temp - 273;
    console.log('Cels', unitCelsius)
    const unitFahrenheit = Math.floor(unitCelsius * (9 / 5) + 32);
    console.log('Fah', unitFahrenheit)
    if(tempUnit === 'celsius' || tempUnit === 'kelvin') {
      this.weatherInDegrees = unitFahrenheit;
    } else if (tempUnit === 'fahrenheit') {
      this.weatherInDegrees = unitCelsius;
    }
  }

  ngAfterViewInit() {

  }
}
