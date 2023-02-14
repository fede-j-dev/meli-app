import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { ProductDetailService } from '../apis/product-detail.service';
import {
  ProductData,
  ItemShipment,
  ItemPayment,
} from '../../interfaces/purchases';
import { ModalServiceInterface } from '../../interfaces/services/modal-service-interface';
import {
  shipmentIsLoading,
  paymentIsLoading,
  shipmentError,
  paymentError,
} from './modal.constants';

@Injectable({
  providedIn: 'root',
})
export class ModalService implements ModalServiceInterface {
  private readonly itemInfo$ = new Subject<ProductData>();
  private readonly itemPayment$ = new Subject<ItemPayment>();
  private readonly itemShipment$ = new Subject<ItemShipment>();
  private readonly showModal$ = new Subject<boolean>();

  productData: any;

  constructor(private productDetailService: ProductDetailService) {}

  setSelectedProduct(selectedProduct: ProductData): void {
    this.itemInfo$.next(selectedProduct);
    this.handleProductApiCalls(
      selectedProduct.id_envio,
      selectedProduct.id_transaccion
    ).then(() => {
      this.showModal$.next(true);
    });
  }

  async handleProductApiCalls(shipmentId: number, paymentId: number) {
    this.itemShipment$.next(shipmentIsLoading);
    this.itemPayment$.next(paymentIsLoading);
    this.handlePayment(paymentId);
    this.handleShipment(shipmentId);
  }

  handleShipment(shipmentId: number): void {
    this.productDetailService.getShipment(shipmentId).subscribe(
      (res: any) => {
        this.itemShipment$.next({ res, isLoading: false, isError: false });
      },
      (err) => {
        this.itemShipment$.next(shipmentError);
      }
    );
  }

  handlePayment(paymentId: number): void {
    this.productDetailService.getPayment(paymentId).subscribe(
      (res: any) => {
        this.itemPayment$.next({ res, isLoading: false, isError: false });
      },
      (err) => {
        this.itemPayment$.next(paymentError);
      }
    );
  }

  getProductData(): Observable<ProductData> {
    return this.itemInfo$.asObservable();
  }

  getItemPayment(): Observable<ItemPayment> {
    return this.itemPayment$.asObservable();
  }

  getItemShipment(): Observable<ItemShipment> {
    return this.itemShipment$.asObservable();
  }

  getShowModal(): Observable<boolean> {
    return this.showModal$.asObservable();
  }
}
