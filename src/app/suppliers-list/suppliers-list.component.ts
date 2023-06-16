import { Component } from '@angular/core';
import { SupplierService } from 'src/app/services/supplier.service';
import { Router } from '@angular/router';
import { Modal } from 'bootstrap';
import * as bootstrap from 'bootstrap';
import { ReactiveFormsModule } from '@angular/forms';



@Component({
  selector: 'app-suppliers-list',
  templateUrl: './suppliers-list.component.html',
  styleUrls: ['./suppliers-list.component.css']
})
export class SuppliersListComponent {
  formData: FormData = new FormData();
  public suppliers : any
  deleteModal: Modal | undefined;
  supplierToBeDeleted: number = 0;
  isHidden: boolean = true ;
  constructor(public SupplierService : SupplierService, public router: Router) { }

  ngOnInit(): void {
    this.loadSuppliers();
    }
    loadSuppliers(){
      this.SupplierService.getSuppliers().subscribe(data =>{
          this.suppliers=data
        },
        (err:any) => {
          console.log(err)
        })
        }
        deleteSupplier(id:number) {
          this.SupplierService.deleteSupplier(id).subscribe((data:any) => {
            this.suppliers = this.suppliers.filter((s:any) => {
              return s.id !== id;
          })
          this.deleteModal!.hide();
          this.showToast();
          console.log('supplier deleted')
          })}
          updateSupplier(id: number) {
            this.router.navigate(['update_supplier',id]);
          }
          openModal(id:number) {
            this.supplierToBeDeleted = id
            this.deleteModal = new bootstrap.Modal(document.getElementById('deleteModal')!, {
              keyboard : false
            })
            this.deleteModal!.show();
          }

          toggleClassModelAjoute(): void {
            this.isHidden = !this.isHidden;
          }
        
          showToast() {
            const toastLiveExample = document.getElementById('confirmationToast')!;
            const toast = new bootstrap.Toast(toastLiveExample)
            toast.show()
          }
                 
          onSubmit(formData: FormData) {
            this.SupplierService.insertSupplier(formData).subscribe(() => {
              this.showToast();
              setTimeout(() => {
                this.router.navigate(['']);
              }, 1000);
              console.log('Supplier added successfully');
            });
          }
          
          
        
      }
