import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SupplierService {
  constructor(private http: HttpClient) { }
insertSupplier(data:any){
  return  this.http.get("http://localhost:8000/insert_supplier",data)
}
getOneSupplier(id:number){
  return  this.http.get("http://localhost:8000/getOneSupplier?id="+id)
}
deleteSupplier(id:number){
  return  this.http.get("http://localhost:8000/delete_supplier?id="+id)
}
updateSupplier(data:any){
  return  this.http.get("http://localhost:8000/update_supplier",data)
}
getSuppliers(){
  return this.http.get("http://localhost:8000/list_suppliers")
}
}
