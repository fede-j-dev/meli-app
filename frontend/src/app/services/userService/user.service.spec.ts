import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { UserService } from './user.service';
import { UserApiService } from '../apis/user-api.service';
import { of } from 'rxjs';
import { initialUserData, purchasesError } from './user.constants';

describe('UserService', () => {
  let service: UserService;
  let userApiService: UserApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, HttpClientTestingModule],
    });
    service = TestBed.inject(UserService);
    userApiService = TestBed.inject(UserApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('Should update user info when handleUserGeneralInfo method is called', () => {
    jest.spyOn(service['userGeneralInfo$'], 'next');
    service.handleUserGeneralInfo(initialUserData);
    expect(service['userGeneralInfo$'].next).toHaveBeenCalledWith(
      initialUserData
    );
  });

  it('Should update userPurchases$ value when handleUserPurchases method is called', () => {
    jest
      .spyOn(userApiService, 'getUserPurchases')
      .mockReturnValue(of(purchasesError));
    jest.spyOn(service['userPurchases$'], 'next');

    service.handleUserPurchases(1);
    expect(service['userPurchases$'].next).toHaveBeenCalled();
  });

  it('Should update userLevel$ value when handleLevel method is called', () => {
    jest.spyOn(service['userLevel$'], 'next');

    service.handleLevel('ORO');
    expect(service['userLevel$'].next).toHaveBeenCalled();
  });

  it('Should update userRestrictions$ value when handleRestriction method is called', () => {
    jest.spyOn(service['userRestrictions$'], 'next');

    service.handleRestrictions(1);
    expect(service['userRestrictions$'].next).toHaveBeenCalled();
  });
});
