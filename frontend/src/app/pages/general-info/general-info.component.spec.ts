import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { Subscription } from 'rxjs';
import { GeneralInfoComponent } from './general-info.component';

describe('GeneralInfoComponent', () => {
  let component: GeneralInfoComponent;
  let fixture: ComponentFixture<GeneralInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule, HttpClientTestingModule],
      declarations: [GeneralInfoComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GeneralInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    component.subscriptions = new Subscription();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call handleSubscriptions method when component initialize', () => {
    const handleSubscriptions = jest.spyOn(component, 'handleSubscriptions');
    component.ngOnInit();
    expect(handleSubscriptions).toHaveBeenCalled();
  });

  it('should push a new restriction if it is available', () => {
    component.restrictions = [];
    component.userRestrictionsData = {
      isError: '',
      isLoading: '',
      0: {
        mensaje: 'New restriction',
        tipo: '',
      },
    };
    component.getRestrictions();
    expect(component.restrictions.length).toEqual(1);
  });

  it('should not push a new restriction if there are no restrictions available', () => {
    component.restrictions = [];
    component.userRestrictionsData = {
      isError: '',
      isLoading: '',
    };
    component.getRestrictions();
    expect(component.restrictions.length).toEqual(0);
  });

  it('should unsubscribe when onDestroy method is called', () => {
    component.ngOnDestroy();
    expect(component.subscriptions).toBeNull();
  });
});
