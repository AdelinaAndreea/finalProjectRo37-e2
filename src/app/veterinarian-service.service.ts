import { Injectable } from '@angular/core';
import { HttpClient , HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { Veterinarian } from './model/veterinarian';

@Injectable({
  providedIn: 'root'
})
export class VeterinarianServiceService {
  addVeterinarianById(veterinarian: Veterinarian) {
    throw new Error('Method not implemented.');
  }
  private veterinarianUrl :string;
  constructor(private http : HttpClient) {
    this.veterinarianUrl='http://localhost:8880/api/veterinarian/';
  }
  public findAll() :Observable<Veterinarian[]>{
    return this.http.get<Veterinarian[]>(this.veterinarianUrl);
   }
  public deleteVeterinarianById(id:any){
     return this.http.delete<Veterinarian>(this.veterinarianUrl+id);
   }
  public updateVeterinarianById(veterinarian:Veterinarian){
    console.log("this.updateVeterinarianById")
     return this.http.put<Veterinarian>(this.veterinarianUrl,veterinarian);
   }
   public createVeterinarian(veterinarian:Veterinarian){
         return this.http.post<Veterinarian>(this.veterinarianUrl,veterinarian);
     
   }
   
}
