import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder } from '@angular/forms';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClientService {
  ClientForm;
  constructor(private http: HttpClient) { }

  getClient(){
    return this.http.get("http://localhost:53240/api/Client");
   }

   puttable1(){
    return this.http.put('http://localhost:53240/api/Client/' + this.ClientForm.firstname, this.ClientForm);
  }
   puttable2(){
    return this.http.put('http://localhost:53240/api/table2/' + this.ClientForm.firstname, this.ClientForm);
  }
}
