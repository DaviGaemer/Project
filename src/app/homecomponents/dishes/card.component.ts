import { Component } from '@angular/core';
import { ServiceService } from '../../service/service.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {
  [x: string]: any;
  products: any
  
  constructor(public service: ServiceService) {}

  ngOnInit() {
    this.service.getAllProducts().subscribe((data: any) => {
      this.products = data
    });
  }
  

}
