import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MeteoService {

 constructor(private http:  HttpClient) { }


 getMeteo(city) {
   console.log(city);
  
    return this.http.get('https://www.prevision-meteo.ch/services/json/' + city).toPromise();
  }



}
