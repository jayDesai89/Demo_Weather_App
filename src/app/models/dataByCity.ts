export class WeatherDataByCity {
  public coord: Coord;
  public weather: Weather;
  public base: string;
  public main: Main;
  public visibility: number;
  public wind: Wind;
  public clouds: Clouds;
  public dt: number;
  public sys: Sys;
  public id: number;
  public name: string;
  public cod: number;

  constructor() {
    this.coord      = new Coord();
    this.weather    = new Weather();
    this.base       = '';
    this.main       = new Main();
    this.visibility = 0;
    this.wind       = new Wind();
    this.clouds     = new Clouds();
    this.dt         = 0;
    this.sys        = new Sys();
    this.id         = 0;
    this.name       = '';
    this.cod        = 0;
  }
}

export class Coord {
  public lon: string;
  public lat: string;

  constructor() {
    this.lon = '';
    this.lat = '';
  }
}

export class Weather {
  public id: number;
  public main: string;
  public description: string;
  public icon: string;
  constructor() {
    this.id          = 0;
    this.main        = '';
    this.description = '';
    this.icon        = '';
  }
}

export class Main {
  public temp: number;
  public pressure: number;
  public humidity: number;
  public temp_min: number;
  public temp_max: number;
  constructor() {
    this.temp     = 0;
    this.pressure = 0;
    this.humidity = 0;
    this.temp_min = 0;
    this.temp_max = 0;
  }
}

export class Wind {
  public wind: string;
  public deg: string;

  constructor() {
    this.wind = '';
    this.deg  = '';
  }
}

export class Clouds {
  public all: string;
  constructor() {
    this.all = '';
  }

}

// export class Dt {

// }

export class Sys {
  public type: number;
  public id: number;
  public message: number;
  public country: string;
  public sunrise: number;
  public sunset: number;

  constructor() {
    this.type    = 0;
    this.id      = 0;
    this.message = 0;
    this.country = '',
    this.sunrise = 0;
    this.sunset  = 0;
  }
}
  // {
//   "coord":{
//      "lon":-0.13,
//      "lat":51.51
//   },
//   "weather":[
//      {
//         "id":300,
//         "main":"Drizzle",
//         "description":"light intensity drizzle",
//         "icon":"09d"
//      }
//   ],
//   "base":"stations",
//   "main":{
//      "temp":280.32,
//      "pressure":1012,
//      "humidity":81,
//      "temp_min":279.15,
//      "temp_max":281.15
//   },
//   "visibility":10000,
//   "wind":{
//      "speed":4.1,
//      "deg":80
//   },
//   "clouds":{
//      "all":90
//   },
//   "dt":1485789600,
//   "sys":{
//      "type":1,
//      "id":5091,
//      "message":0.0103,
//      "country":"GB",
//      "sunrise":1485762037,
//      "sunset":1485794875
//   },
//   "id":2643743,
//   "name":"London",
//   "cod":200
// }



/**
 * IN PRACTICAL APPLICATION
 * Each class(Model) should have individual model.ts
 */
