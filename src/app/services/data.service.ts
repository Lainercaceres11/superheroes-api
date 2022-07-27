import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class DataService {

  index!: number


  constructor(private http: HttpClient) { }

  obtenerPersonajes():Observable<any>{
    const urlApi = 'https://ea1w717ym2.execute-api.us-east-1.amazonaws.com/api/heroes'
    return this.http.get(urlApi);
  }


  obtenerDetallesEmpleados(id: number): Observable<any>{
    const URL = `https://ea1w717ym2.execute-api.us-east-1.amazonaws.com/api/hero/?id=${id}`;
    return this.http.get(URL)
  }
}
