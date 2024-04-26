import { Component } from '@angular/core';
import { ServiceService } from '../../service/service.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss'
})
export class ProductComponent {
  products: any
  
  constructor(public service: ServiceService) {}

  ngOnInit() {
    this.service.getBasket().subscribe((data: any) => {
      this.products = data
    });
  }

}
