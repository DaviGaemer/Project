import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Service2Service {

  constructor(public http: HttpClient) { }
    getAllCategories() {
    return this.http.get("https://restaurant.stepprojects.ge/api/Categories/GetAll")
  }
  
  getCategoryById(id: any) {
    return this.http.get(`https://restaurant.stepprojects.ge/api/Categories/GetCategory/${id}`)
  }

  getAllProduct() {
    return this.http.get("https://restaurant.stepprojects.ge/api/Products/GetAll")
  }

  
}
