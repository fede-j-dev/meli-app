import { Component, OnInit } from '@angular/core';
import { ModalService } from '../../services/modalService/modal.service';
import { Subscription } from 'rxjs';
import {
  ProductData,
  ItemPayment,
  ItemShipment,
} from 'src/app/interfaces/purchases';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent implements OnInit {
  productData: ProductData;
  itemShipment: ItemShipment;
  itemPayment: ItemPayment;
  showModal: boolean = false;
  subscriptions = new Subscription();

  constructor(private modalService: ModalService) {}

  ngOnInit(): void {
    this.handleSubscriptions();
  }

  handleSubscriptions(): void {
    this.subscriptions.add(
      this.modalService.getProductData().subscribe((res: ProductData) => {
        this.productData = res;
      })
    );
    this.subscriptions.add(
      this.modalService.getShowModal().subscribe((res: boolean) => {
        this.showModal = res;
      })
    );
    this.subscriptions.add(
      this.modalService.getItemShipment().subscribe((res: ItemShipment) => {
        this.itemShipment = res;
      })
    );
    this.subscriptions.add(
      this.modalService.getItemPayment().subscribe((res: ItemPayment) => {
        this.itemPayment = res;
      })
    );
  }

  ngOnDestroy(): void {
    if (this.subscriptions) {
      this.subscriptions.unsubscribe();
      this.subscriptions = null;
    }
  }
}
