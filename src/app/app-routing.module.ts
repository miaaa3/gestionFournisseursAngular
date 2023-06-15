import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListeFournisseursComponent } from './Fournisseurs/liste-fournisseurs/liste-fournisseurs.component';
import { DashboardComponent } from './dashboard/dashboard.component';



const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  {path: 'liste-fournisseurs',component :ListeFournisseursComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
