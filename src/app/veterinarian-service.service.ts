import { Injectable } from '@angular/core';
import { HttpClient , HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { Vet } from './model/veterinarian';

@Injectable({
  providedIn: 'root'
})
export class VeterinarianServiceService {
  private veterinarianUrl!: string;

  constructor(private http : HttpClient) { 
    this.veterinarianUrl='http://localhost:8880/api/veterinarian/';
  }
  public findAll() :Observable<Vet[]>{
    return this.http.get<Vet[]>(this.veterinarianUrl);
   }
    
}
