import { TestBed, ComponentFixture } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { AppComponent } from './app.component';
import { HttpClient } from '@angular/common/http';

import { ModalService } from '../services/modalService/modal.service';
import { UserService } from '../services/userService/user.service';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let modalService: ModalService;
  let userService: UserService;
  let httpClient: HttpClient;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule, HttpClientTestingModule],
      declarations: [AppComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    httpClient = TestBed.get(HttpClient);
    modalService = TestBed.get(ModalService);
    userService = TestBed.get(UserService);
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });

  it('should call userService method when component is initialized', () => {
    const spy = jest.spyOn(userService, 'handleApiUserCalls');
    component.ngOnInit();
    expect(spy).toHaveBeenCalled();
  });
});
