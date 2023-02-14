import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { PurchasesComponent } from './purchases.component';
import { ModalService } from '../../services/modalService/modal.service';
import { Subscription } from 'rxjs';

describe('PurchasesComponent', () => {
  let component: PurchasesComponent;
  let fixture: ComponentFixture<PurchasesComponent>;
  let modalService: ModalService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule, HttpClientTestingModule],
      declarations: [PurchasesComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PurchasesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    modalService = TestBed.get(ModalService);
    component.subscriptions = new Subscription();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should unsubscribe when onDestroy method is called', () => {
    component.ngOnDestroy();
    expect(component.subscriptions).toBeNull();
  });

  it('should call handleSubscriptions when component is initialized', () => {
    const spy = jest.spyOn(component, 'handleSubscriptions');
    component.ngOnInit();
    expect(spy).toHaveBeenCalled();
  });

  it('should update paginator property fromResult  when changing paginator page', () => {
    component.paginator.fromResult = 0;
    component.paginator.toResult = 5;

    const mockEvent = { pageIndex: 1, pageSize: 5 };
    component.changePage(mockEvent);
    expect(component.paginator.fromResult).toEqual(5);
  });

  it('should update paginator properties toResult when changing paginator page', () => {
    component.paginator.fromResult = 0;
    component.paginator.toResult = 5;

    const mockEvent = { pageIndex: 1, pageSize: 5 };
    component.changePage(mockEvent);
    expect(component.paginator.toResult).toEqual(10);
  });
});
