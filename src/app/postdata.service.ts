import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostdataService{

  constructor(private _xHttpClient:HttpClient) { }
  getposts():Observable<any>
  {
    return this._xHttpClient.get("https://forkify-api.herokuapp.com/api/search?q=pizza")
  }
}
