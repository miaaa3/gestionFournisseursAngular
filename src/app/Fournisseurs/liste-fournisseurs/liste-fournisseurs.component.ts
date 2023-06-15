import { Component } from '@angular/core';
import { FournisseurService } from 'src/app/services/fournisseur.service';
import { Router } from '@angular/router';
import { Modal } from 'bootstrap';
import * as bootstrap from 'bootstrap';

@Component({
  selector: 'app-liste-fournisseurs',
  templateUrl: './liste-fournisseurs.component.html',
  styleUrls: ['./liste-fournisseurs.component.css']
})
export class ListeFournisseursComponent {
  public fournisseurs: any;
  deleteModal: Modal | undefined;
  fournisseurToBeDeleted: number = 0;
  isHidden: boolean = true; 

  constructor(public fournisseurService: FournisseurService, public router: Router) { }

  ngOnInit(): void {
    this.loadFournisseurs();
  }

  loadFournisseurs() {
    this.fournisseurService.getFournisseurs().subscribe(data => {
      this.fournisseurs = data;
    },
    (err:any) => {
      console.log(err);
    });
  }

  deleteFournisseur(id: number) {
    this.fournisseurService.deleteFournisseur(id).subscribe((data:any) => {
      this.fournisseurs = this.fournisseurs.filter((f:any) => {
        return f.id !== id;
      });
      this.deleteModal!.hide();
      this.showToast();
      console.log('Fournisseur supprimé');
    });
  }

  updateFournisseur(id: number) {
    this.router.navigate(['update_fournisseur', id]);
  }

  openModal(id: number) {
    this.fournisseurToBeDeleted = id;
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
}

