import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  constructor(){}
  isHidden: boolean = true; // Classe initiale : 'hidden'
  isActive: boolean =false;
  
  toggleClassMenuUser(): void {
    this.isActive = !this.isActive;
  }
  toggleClassMenu(): void {
    this.isHidden = !this.isHidden;
  }
}
