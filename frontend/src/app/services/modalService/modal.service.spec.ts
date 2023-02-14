import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { of } from 'rxjs';

import { ModalService } from './modal.service';
import { ProductDetailService } from '../apis/product-detail.service';
import {
  productDataMock,
  paymentError,
  shipmentError,
} from './modal.constants';

describe('ModalService', () => {
  let service: ModalService;
  let productDetailService: ProductDetailService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, HttpClientTestingModule],
    });
    service = TestBed.inject(ModalService);
    productDetailService = TestBed.inject(ProductDetailService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should call handleProductApiCalls when setSelectedProduct is called', () => {
    const spyApis = jest.spyOn(service, 'handleProductApiCalls');
    service.setSelectedProduct(productDataMock);
    expect(spyApis).toHaveBeenCalled();
  });

  it('Should call getShipment method from productDetail service when handleShipment method is called', () => {
    const spyGetShipment = jest.spyOn(productDetailService, 'getShipment');
    service.handleShipment(123);
    expect(spyGetShipment).toHaveBeenCalled();
  });

  it('Should call getPayment method from productDetail service when handlePayment method is called', () => {
    const spyGetPayment = jest.spyOn(productDetailService, 'getPayment');
    service.handlePayment(123);
    expect(spyGetPayment).toHaveBeenCalled();
  });

  it('Should return productData when getProductData method is called', () => {
    const dataMockObs = of(productDataMock);
    jest.spyOn(service, 'getProductData').mockReturnValue(dataMockObs);
    const getProductData = service.getProductData();

    expect(getProductData).toEqual(dataMockObs);
  });

  it('Should return itemPayment when getItemPayment method is called', () => {
    const itemPaymentMockObs = of(paymentError);
    jest.spyOn(service, 'getItemPayment').mockReturnValue(itemPaymentMockObs);
    const getItemPayment = service.getItemPayment();

    expect(getItemPayment).toEqual(itemPaymentMockObs);
  });

  it('Should return itemShipment when getItemShipment method is called', () => {
    const itemShipmentMockObs = of(shipmentError);
    jest.spyOn(service, 'getItemShipment').mockReturnValue(itemShipmentMockObs);
    const getItemShipment = service.getItemShipment();

    expect(getItemShipment).toEqual(itemShipmentMockObs);
  });

  it('Should return showModal (true/false) when getShowmodal method is called', () => {
    const showModalMock = of(true);
    jest.spyOn(service, 'getShowModal').mockReturnValue(showModalMock);
    const getShowModal = service.getShowModal();

    expect(getShowModal).toEqual(service.getShowModal());
  });
});
