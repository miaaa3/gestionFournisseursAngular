import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SuppliersListComponent } from './suppliers-list/suppliers-list.component';
import { ProductsComponent } from './products/products.component';
import { CommandsComponent } from './commands/commands.component';
import { UserSettingsComponent } from './user-settings/user-settings.component';
import { LoginPageComponent } from './login-page/login-page.component';

const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'commands', component: CommandsComponent },
  { path: 'user-settings', component: UserSettingsComponent },
  { path: 'login', component: LoginPageComponent },
  {path: 'suppliers-list',component :SuppliersListComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
