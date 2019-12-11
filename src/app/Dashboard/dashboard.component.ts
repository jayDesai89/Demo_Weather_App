import { Component, OnInit,} from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { WeatherDataService } from '../services/weatherData/weather-data.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  city = 'Baroda,In';
  displayWeather = false;
  findCityForm: FormGroup;
  cityWeather;
  weatherInDegrees;
  forecastedWeather;
  showForecast: boolean;

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
    // Create a form
    this.findCityForm = this.formBuilder.group({
      'nameOfCity': new FormControl('', Validators.required)
    });

    // update view if formfield's value updates
    this.findCityForm.get('nameOfCity').valueChanges.subscribe((res) => {
      this.showForecast = false;
    })
  }

  // get current weather for selected city
  getWeatherForCity(value) {
    this.city = value.nameOfCity;
    // Method call form service
    this.weatherDataService.getWeatherData(this.city).subscribe((res) => {
      this.cityWeather = res;
      this.weatherInDegrees = this.cityWeather.main.temp;
      this.switchUnit('kelvin');
    })
  }

  // Get forecasted weather of city
  getForecastedWeather(value) {
    this.weatherDataService.getForecastOfWeather(this.city).subscribe((res ) => {
      this.forecastedWeather = res;
      console.log(res);
    })
  }

  // Switch unit from fahrenheit to celsius and vise versa
  switchUnit(tempUnit) {
    const unitCelsius = Math.floor(this.cityWeather.main.temp - 273);
    const unitFahrenheit = Math.floor(unitCelsius * (9 / 5) + 32);
    if(tempUnit === 'celsius') {
      this.weatherInDegrees = unitCelsius ;
    } else if (tempUnit === 'fahrenheit' || tempUnit === 'kelvin') {
      this.weatherInDegrees = unitFahrenheit;
    }
  }
}
