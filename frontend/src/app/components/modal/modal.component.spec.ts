import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClient } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { Subscription } from 'rxjs';
import { ModalComponent } from './modal.component';

describe('ModalComponent', () => {
  let httpClient: HttpClient;
  let component: ModalComponent;
  let fixture: ComponentFixture<ModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [ModalComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    component.subscriptions = new Subscription();
    httpClient = TestBed.get(HttpClient);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should unsubscribe when onDestroy method is called', () => {
    component.ngOnDestroy();
    expect(component.subscriptions).toBeNull();
  });

  it('should call method handleSubscriptions when component is initialized', () => {
    const spySubs = jest.spyOn(component, 'handleSubscriptions');
    component.ngOnInit();
    expect(spySubs).toHaveBeenCalled();
  });
});
