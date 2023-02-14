import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { Router } from '@angular/router';
import { ProfileComponent } from './profile.component';
import { Subscription } from 'rxjs';

describe('ProfileComponent', () => {
  let component: ProfileComponent;
  let fixture: ComponentFixture<ProfileComponent>;
  let router: Router;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule, HttpClientTestingModule],
      declarations: [ProfileComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    router = TestBed.get(Router);
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

  it('should call checkSection when component is initialized', () => {
    const spy = jest.spyOn(component, 'checkSection');
    component.ngOnInit();
    expect(spy).toHaveBeenCalled();
  });
});
