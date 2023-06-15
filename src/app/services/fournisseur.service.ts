import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FournisseurService {

    
  constructor(private http: HttpClient) { }

  getFournisseurs(){
    return  this.http.get("http://localhost:8000/list_fournisseurs")
  }
  insertFournisseur(data:any){
      return this.http.post("http://localhost:8000/insert_fournisseur", data )
  }

  deleteFournisseur(id:number) {
    return this.http.delete('http://localhost:8000/delete_fournisseur?id='+id)
  }

  getOneFournisseur(id:number){
    return this.http.get('http://localhost:8000/getOneFournisseur?id='+id)
  }

  updateFournisseur(data:any) {
    return this.http.post("http://localhost:8000/update_fournisseur", data )
}
}