import { Component, OnInit, AfterViewInit, Input } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { WeatherDataService } from '../services/weatherData/weather-data.service'

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit, AfterViewInit {
  city = 'Baroda,In';
  findCityForm : FormGroup;
  /**
   * Get name of the city
   * Get the weather of that city
   * @param formBuilder
   * @param weatherDataService
   */

  constructor(private formBuilder: FormBuilder, private weatherDataService : WeatherDataService) {
  }

  ngOnInit() {
    this.findCityForm = this.formBuilder.group({
      'nameOfCity' : new FormControl('')
    });
  }

  getWeatherForCity() {
     this.weatherDataService.getWeatherData(this.city).subscribe((res) => {
      console.log(res);
    })
  }

  ngAfterViewInit() {

  }
}
