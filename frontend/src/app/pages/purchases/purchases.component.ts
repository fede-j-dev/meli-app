import { Component, OnInit } from '@angular/core';
import { ModalService } from '../../services/modalService/modal.service';
import { UserService } from '../../services/userService/user.service';
import { Subscription } from 'rxjs';
import { PurchasesResponse, ProductData } from 'src/app/interfaces/purchases';

@Component({
  selector: 'app-purchases',
  templateUrl: './purchases.component.html',
  styleUrls: ['./purchases.component.scss'],
})
export class PurchasesComponent implements OnInit {
  productsData: PurchasesResponse;
  products: ProductData[];
  subscriptions = new Subscription();
  paginator = { fromResult: 0, toResult: 5 };

  constructor(
    private modalService: ModalService,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    this.handleSubscriptions();
  }

  handleSubscriptions(): void {
    this.subscriptions.add(
      this.userService
        .getUserPurchases()
        .subscribe((res: PurchasesResponse) => {
          this.productsData = res;
          this.products = res.data;
        })
    );
  }

  handleClickProduct(event): void {
    const productName =
      event.target.parentElement.parentElement.children[1].innerHTML;
    const selectedItem = this.products.find(
      (item: ProductData) => item.titulo == productName
    );
    this.modalService.setSelectedProduct(selectedItem);
  }

  changePage(e): void {
    //PageIndex -> Page number (starting from 0);
    //PageSize -> Items per page
    this.paginator.fromResult = e.pageIndex * e.pageSize;
    this.paginator.toResult = this.paginator.fromResult + e.pageSize;
  }

  ngOnDestroy(): void {
    if (this.subscriptions) {
      this.subscriptions.unsubscribe();
      this.subscriptions = null;
    }
  }
}
