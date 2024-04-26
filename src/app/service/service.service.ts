import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  apiURL = "https://restaurant.stepprojects.ge/api/"

  constructor(public http: HttpClient) { }

  getAllProducts() {
    return this.http.get(this.apiURL + "Products/GetAll")
  }

  getBasket() {
    return this.http.get(this.apiURL + "Baskets/GetAll")
  }

  addToBasket(id: number) {
    let postReq = {
      "quantity": 0,
      "price": 0,
      "productId": id
    }
    return this.http.post(this.apiURL + "Baskets/AddToBasket", postReq).subscribe((data) => {
      console.log(data)
    })
  }

  deleteProduct(id: any) {
    return this.http.delete(this.apiURL + `Baskets/DeleteProduct/${id}`).subscribe((data) => {
      console.log(data)
    })
  }

  editProduct(quantity: any, id: any) {
    let putReq = {
      "quantity": quantity,
      "price": 0,
      "productId": id
    }
    return this.http.put(this.apiURL + `Baskets/UpdateBasket`, putReq).subscribe((data) => {
      console.log(data)
    })
  }
}
