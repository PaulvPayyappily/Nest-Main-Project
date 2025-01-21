import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  
  data: any;

  constructor(private http:HttpClient) { }

  getRecipes(){

    let data = this.http.get("https://dummyjson.com/recipes");
    return data; 

  }
  getRecipesById(id:any){

    return this.http.get(`https://dummyjson.com/recipes/${id}`)
    
    }

}
