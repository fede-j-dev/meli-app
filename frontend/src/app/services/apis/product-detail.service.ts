import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ProductDetailService {
  constructor(private http: HttpClient) {}

  getShipment(shipmentId: number) {
    const shipmentUrl = `/api/shipment/${shipmentId}`;
    return this.http.get(shipmentUrl);
  }

  getPayment(paymentId: number) {
    const paymentUrl = `/api/payment/${paymentId}`;
    return this.http.get(paymentUrl);
  }
}
