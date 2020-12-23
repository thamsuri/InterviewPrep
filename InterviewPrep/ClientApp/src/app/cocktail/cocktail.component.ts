import { Component, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-fetch-data',
  templateUrl: './cocktail.component.html'
})
export class CocktailComponent {
  public forecasts: WeatherForecast[];
  public cocktails: Cocktail[];

  constructor(http: HttpClient, @Inject('BASE_URL') baseUrl: string) {

    console.log(baseUrl);
    baseUrl = 'http://localhost:7001/api/';

    console.log(baseUrl);

    // http.get<WeatherForecast[]>(baseUrl + 'weatherforecast')
    //   .subscribe(result =>
    //             {
    //               this.forecasts = result;
    //             },
    //               error =>
    //             {
    //                 console.error(error)
    //             }
    //           );

    http.get<Cocktail[]>(baseUrl + 'cocktail').subscribe(result => {
      this.cocktails = result;
    }, error => console.error(error));
  }
}

interface WeatherForecast {
  date: string;
  temperatureC: number;
  temperatureF: number;
  summary: string;
}

interface Cocktail {
  id: number;
  name: string;
  url: string;
}
