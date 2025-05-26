import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; // Importa o cliente HTTP
import { Observable } from 'rxjs'; //Observable é usado para trabalhar com os dados que vêm da api

@Injectable({
  providedIn: 'root'
})

export class GetContentService {
  private apiUrlType:string = "";
  private apiUrlMovieName:string = "";
  private apiPageNumber:string = "";
  private apiUrl:string = `http://www.omdbapi.com/?s=${this.apiUrlMovieName}&type=${this.apiUrlType}&page=${this.apiPageNumber}&apikey=f3f25a3a&`; //Url da Api

  constructor(private http: HttpClient) { }

  getContent():Observable<any>{
    return this.http.get(this.apiUrl);
  }
  //Requisição que retorna o conteúdo por ID
  getContentById(id:string):Observable<any>{
    try{
      this.apiUrl = `http://www.omdbapi.com/?i=${id}&apikey=f3f25a3a&`;
    }
    catch(err){
      console.log(err);
    }
    finally{
      return this.http.get(this.apiUrl);
    }
  }
  //Requisição que retorna filmes por nome
  getMoviesbyName(name:string, type:string, pages:string):Observable<any>{
    try{
      this.apiUrlMovieName = name;
      this.apiUrlType = type;
      this.apiPageNumber = pages;
      this.apiUrl = `http://www.omdbapi.com/?s=${this.apiUrlMovieName}&type=${this.apiUrlType}&page=${this.apiPageNumber}&apikey=f3f25a3a&`;
    }
    catch(err){
      console.log(err);
    }
    finally{
      return this.http.get(this.apiUrl);
    }
  }
  //Requisição que retorna séries pelo nome
  getSeriesbyName(name:string, type:string, pages:string):Observable<any>{
    try{
      this.apiUrlMovieName = name;
      this.apiUrlType = type;
      this.apiPageNumber = pages;
      this.apiUrl = `http://www.omdbapi.com/?s=${this.apiUrlMovieName}&type=${this.apiUrlType}&page=${this.apiPageNumber}&apikey=f3f25a3a&`;
    }
    catch(err){
      console.log(err);
    }
    finally{
      return this.http.get(this.apiUrl);
    }
  }
}
