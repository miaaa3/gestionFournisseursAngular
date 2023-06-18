import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { LoginPageComponent } from './login-page/login-page.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SuppliersListComponent } from './suppliers-list/suppliers-list.component';
import { ProductsComponent } from './products/products.component';
import { CommandsComponent } from './commands/commands.component';

@NgModule({
  declarations: [
    AppComponent,
    SuppliersListComponent,
    NavbarComponent,
    LoginPageComponent,
    DashboardComponent,
    ProductsComponent,
    CommandsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
