import { Component } from '@angular/core';
import { SupplierService } from 'src/app/services/supplier.service';
import { Router } from '@angular/router';
import { Modal } from 'bootstrap';
import * as bootstrap from 'bootstrap';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-suppliers-list',
  templateUrl: './suppliers-list.component.html',
  styleUrls: ['./suppliers-list.component.css']
})
export class SuppliersListComponent {
  supplierForm: FormGroup;
  deleteModal: Modal | undefined;
  supplierToBeDeleted: number = 0;
  isHidden: boolean = true;
  public suppliers: any;
  public supplier: any = {}; // Define the supplier object

  constructor(
    public supplierService: SupplierService,
    public router: Router,
    private formBuilder: FormBuilder
  ) {
    this.supplierForm = this.formBuilder.group({
      name: '',
      email: '',
      address: '',
      phone: '',
      city: '',
      picture: null
    });
  }

  ngOnInit(): void {
    this.loadSuppliers();
  }

  loadSuppliers() {
    this.supplierService.getSuppliers().subscribe(
      data => {
        this.suppliers = data;
      },
      (err: any) => {
        console.log(err);
      }
    );
  }

  deleteSupplier(id: number) {
    this.supplierService.deleteSupplier(id).subscribe((data: any) => {
      this.suppliers = this.suppliers.filter((s: any) => {
        return s.id !== id;
      });
      this.deleteModal!.hide();
      this.showToast();
      console.log('supplier deleted');
    });
  }

  updateSupplier(id: number) {
    this.router.navigate(['update_supplier', id]);
  }

  openModal(id: number) {
    this.supplierToBeDeleted = id;
    this.deleteModal = new bootstrap.Modal(document.getElementById('deleteModal')!, {
      keyboard: false
    });
    this.deleteModal!.show();
  }

  toggleClassModelAjoute(): void {
    this.isHidden = !this.isHidden;
  }

  showToast() {
    const toastLiveExample = document.getElementById('confirmationToast')!;
    const toast = new bootstrap.Toast(toastLiveExample);
    toast.show();
  }

  onFileSelected(event: any) {
    const file = event.target.files[0];
    this.supplierForm.patchValue({ picture: file });
  }

  onSubmit() {
    console.log('Form submitted');
    const formData = new FormData();
    formData.append('name', this.supplierForm.value.name);
    formData.append('email', this.supplierForm.value.email);
    formData.append('address', this.supplierForm.value.address);
    formData.append('phone', this.supplierForm.value.phone);
    formData.append('city', this.supplierForm.value.city);
    formData.append('picture', this.supplierForm.value.picture);

    this.supplierService.insertSupplier(formData).subscribe(() => {
      this.showToast();
      console.log(formData);
      setTimeout(() => {
        this.router.navigate(['']);
      }, 1000);
      console.log('Supplier added successfully');
    });
  }
}
