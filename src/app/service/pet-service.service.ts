import { Injectable } from '@angular/core';
import { HttpClient , HttpHeaders} from '@angular/common/http';
import {Pet} from '../model/pet'
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class PetServiceService {
  private petUrl : string;

  constructor(private http : HttpClient) {
    this.petUrl='http://localhost:8880/api/pet/';
   }
   public findAll() :Observable<Pet[]>{
    return this.http.get<Pet[]>(this.petUrl);
   }
    
}
