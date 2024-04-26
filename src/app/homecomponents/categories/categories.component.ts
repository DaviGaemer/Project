import { Component } from '@angular/core';
import { Service2Service } from '../../service/service2.service';


@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.scss'
})
export class CategoriesComponent {
  categories: any = []
  products: any = []

  constructor(public service: Service2Service) {
    this.getAllProduct()
  }

  ngOnInit(){
    this.service.getAllCategories().subscribe((data: any) => {
      this.categories = data
    })

}
categoryFilter(id: any) {
  this.service.getCategoryById(id).subscribe((data: any) => {
    this.products = data.products
  })
}

getAllProduct() {
  this.service.getAllProduct().subscribe((data) => {
    this.products = data
  })
}
}
