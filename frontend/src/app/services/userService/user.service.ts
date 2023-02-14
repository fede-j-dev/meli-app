import { Injectable } from '@angular/core';
import { UserApiService } from '../apis/user-api.service';
import { BehaviorSubject, Observable } from 'rxjs';
import {
  UserInfo,
  Level,
  LevelResponse,
  RestrictionsResponse,
} from '../../interfaces/userInfo';
import { UserServiceInterface } from '../../interfaces/services/user-service-interface';
import {
  PurchasesResponse,
  PurchasesApiResponse,
} from '../../interfaces/purchases';
import {
  purchasesLoading,
  purchasesError,
  initialUserData,
  levelLoading,
  levelError,
  restrictionsLoading,
  restrictionsError,
} from './user.constants';

@Injectable({
  providedIn: 'root',
})
export class UserService implements UserServiceInterface {
  private readonly userLevel$ = new BehaviorSubject<Level>(levelLoading);
  private readonly userRestrictions$ = new BehaviorSubject<any>(
    restrictionsLoading
  );
  private readonly userGeneralInfo$ = new BehaviorSubject<UserInfo>(
    initialUserData
  );
  private readonly userPurchases$ = new BehaviorSubject<PurchasesResponse>(
    purchasesLoading
  );

  constructor(private userApiService: UserApiService) {}

  ngOnInit() {}

  async handleApiUserCalls() {
    await this.userApiService.getUser().then(async (res: UserInfo) => {
      this.handleUserGeneralInfo(res);
      //server requests that depend on userData. Handle success, loading and error.
      this.handleUserPurchases(res.id_usuario);
      this.handleRestrictions(res.id_usuario);
      this.handleLevel(res.nivel);
    });
  }

  handleUserGeneralInfo(res: UserInfo): void {
    this.userGeneralInfo$.next(res);
  }

  handleUserPurchases(userId: number): void {
    this.userPurchases$.next(purchasesLoading);
    const limitResults = 100; // Limit number of user purchases (open to change if needed).
    const page = 1;
    this.userApiService.getUserPurchases(userId, limitResults, page).subscribe(
      (res: PurchasesApiResponse) => {
        this.userPurchases$.next({ ...res, isError: false, isLoading: false });
      },
      (error: Error) => {
        this.userPurchases$.next(purchasesError);
        console.log(error);
      }
    );
  }

  handleLevel(level: string): void {
    this.userLevel$.next(levelLoading);
    this.userApiService.getLevel(level).subscribe(
      (res: LevelResponse) => {
        this.userLevel$.next({ ...res, isError: false, isLoading: false });
      },
      (error: Error) => {
        this.userLevel$.next(levelError);
        console.log(error);
      }
    );
  }

  handleRestrictions(userId: number): void {
    this.userRestrictions$.next(restrictionsLoading);
    this.userApiService.getUserRestrictions(userId).subscribe(
      (res: RestrictionsResponse[]) => {
        this.userRestrictions$.next({
          ...res,
          isError: false,
          isLoading: false,
        });
      },
      (error: Error) => {
        this.userRestrictions$.next(restrictionsError);
        console.log(error);
      }
    );
  }

  getUserPurchases(): Observable<PurchasesResponse> {
    return this.userPurchases$.asObservable();
  }

  getUserGeneralInfo(): Observable<UserInfo> {
    return this.userGeneralInfo$.asObservable();
  }

  getUserLevel(): Observable<Level> {
    return this.userLevel$.asObservable();
  }

  getUserRestrictions(): Observable<any> {
    return this.userRestrictions$.asObservable();
  }
}
