import { tododata } from './todo-app/tododata-interface';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodoAppService {
 private _url = "/assets/Tododata.json";
  constructor(private http:HttpClient) { }

  getTodos(): Observable<tododata[]>{
    return this.http.get<tododata[]>(this._url)
  }
}
