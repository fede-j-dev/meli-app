import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { UserInfo } from '../userInfo';

@Injectable()
export abstract class UserServiceInterface {
  abstract handleApiUserCalls(): void;

  abstract handleUserGeneralInfo(res: UserInfo): void;

  abstract handleUserPurchases(userId: number): void;

  abstract handleLevel(level: string): void;

  abstract handleRestrictions(userId: number): void;

  abstract getUserPurchases(): Observable<any>;

  abstract getUserGeneralInfo(): Observable<any>;

  abstract getUserLevel(): Observable<any>;

  abstract getUserRestrictions(): Observable<any>;
}
