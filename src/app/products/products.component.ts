import { Component } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  isHidden: boolean = true;
  public products: any;
  constructor(
    public productService: ProductService
  ) {
    
  }

  toggleClassModelAjoute(): void {
    this.isHidden = !this.isHidden;
  }
  loadProducts() {
    this.productService.getProducts().subscribe(
      data => {
        this.products= data;
      },
      (err: any) => {
        console.log(err);
      }
    );
  }
}
