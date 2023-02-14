import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { ProductData, ItemPayment, ItemShipment } from '../purchases';

@Injectable()
export abstract class ModalServiceInterface {
  abstract setSelectedProduct(selectedProduct: ProductData): void;

  abstract handleProductApiCalls(shipmentId: number, paymentId: number);

  abstract handleShipment(shipmentId: number): void;

  abstract handlePayment(paymentId: number): void;

  abstract getProductData(): Observable<ProductData>;

  abstract getItemPayment(): Observable<ItemPayment>;

  abstract getItemShipment(): Observable<ItemShipment>;

  abstract getShowModal(): Observable<boolean>;
}
