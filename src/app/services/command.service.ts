import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class CommandService {

 
  constructor(private http: HttpClient) { }
  getCommands(){
    return this.http.get("https://localhost:8000/list_commands")
  }
}
