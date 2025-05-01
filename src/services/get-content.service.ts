import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; // Importa o cliente HTTP
import { Observable } from 'rxjs'; //Observable é usado para trabalhar com os dados que vêm da api

@Injectable({
  providedIn: 'root'
})

export class GetContentService {
  private apiUrl = "http://www.omdbapi.com/?s=Matrix&apikey=f3f25a3a&"; //Url da Api
  
  constructor(private http: HttpClient) { }

  getContent():Observable<any>{
    return this.http.get(this.apiUrl);
  }
}
