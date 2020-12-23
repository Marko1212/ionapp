import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MeteoService {

 constructor(private http:  HttpClient) { }


 getMeteo(settings) {
   console.log(settings.city);
  
    return this.http.get('https://www.prevision-meteo.ch/services/json/' + settings.city).toPromise();
  }



}
