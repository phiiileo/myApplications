import { tododata } from './todo-app/tododata-interface';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QAService {

  private _url = "/assets/questions.json";

  constructor(private http: HttpClient) { }

  getQuestion(): Observable<tododata[]>{
    return this.http.get<tododata[]>(this._url)
  }
}
