import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { IProduct } from "src/app/application/interfaces/product/IProduct";

export class ProductsList {
    constructor(private httpClient: HttpClient){}
    
    getProductList(): Observable<IProduct[]>{       
        return this.httpClient.get<IProduct[]>('https://api.escuelajs.co/api/v1/products');
    }
}