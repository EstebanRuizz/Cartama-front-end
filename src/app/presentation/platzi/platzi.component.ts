import { Component, OnInit } from '@angular/core';
import { IProduct } from 'src/app/application/interfaces/product/IProduct';
import { ProductsList } from 'src/app/application/features/product/queries/ProductsList';
import { HttpMediator } from 'src/app/application/mediator/HttpMediator';

@Component({
  selector: 'app-platzi',
  templateUrl: './platzi.component.html',
  styleUrls: ['./platzi.component.css']
})
export class PlatziComponent implements OnInit {
  constructor(
    private httpMediator: HttpMediator,
  ) { }

  productsList: IProduct[] | null = null;
  ngOnInit(): void {
    this.getProductList()
  }

  private getProductList() {
    const params = {
      commandClass: ProductsList,
      method: ProductsList.prototype.getProductList,
      callbacks: {
        success: this.onProductListSuccess.bind(this),
        error: this.onHttpError.bind(this),
      },
    };
    this.httpMediator.execNoPayload(params);
  }

  onProductListSuccess(productsArray: IProduct[]) {
    this.productsList = productsArray
  }

  onHttpError(error: string) {
    console.log(error);
  }

}