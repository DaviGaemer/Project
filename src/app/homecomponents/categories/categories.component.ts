import { Component} from '@angular/core';
import { ServiceService } from '../../service/service.service';


@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.scss'
})
export class CategoriesComponent {
  categories: any = []
  products: any = []
  nut: boolean = false
  veg: boolean = false
  range: number = 0
  rangeForShow: string | number = "Not Chosen"
  productsForShow: any = []


  constructor(public service: ServiceService) {
    this.getAllProducts()
  }

  ngOnInit(){
    this.service.getAllCategories().subscribe((data: any) => {
      this.categories = data
    })
    this.service.getAllProducts().subscribe((data) => {
      this.products = data
      this.productsForShow = data
    })
}
categoryFilter(id: any) {
  this.service.getCategoryById(id).subscribe((data: any) => {
    this.productsForShow = data.products
  })
}

getAllProducts() {
  this.service.getAllProducts().subscribe((data) => {
    this.productsForShow = data
  })
}



filter() {
  this.productsForShow = []
  for(let i = 0; i < this.products.length; i++){
    if(this.rangeForShow == "Not Chosen"){
      if(this.products[i].nuts == this.nut && this.products[i].vegeterian == this.veg){
        this.productsForShow.push(this.products[i])
      }
    }else {
      if(this.products[i].nuts == this.nut && this.products[i].vegeterian == this.veg && this.products[i].spiciness == this.range - 1){
        this.productsForShow.push(this.products[i])
      }
    }

  }

}

reset() {
  this.productsForShow = this.products
  this.nut = false
  this.veg = false
  this.rangeForShow = "Not Chosen"
  this.range = 0
}

rangechange(){
  if(this.range == 0){
    this.rangeForShow = "Not Chosen"
  }else{
    this.range--

    this.rangeForShow = this.range
  }
}
}
