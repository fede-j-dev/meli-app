import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class UserApiService {
  constructor(private http: HttpClient) {}

  getUser() {
    const userUrl = '/api';
    return this.http.get(userUrl).toPromise();
  }

  getUserRestrictions(userId: number) {
    const userRestrictionsUrl = `/api/restrictions/${userId}`;
    return this.http.get(userRestrictionsUrl);
  }

  getUserPurchases(userId: number, limit = 5, page: number) {
    const userPurchasesUrl = `/api/purchases/${userId}/${limit}/${page}`;
    return this.http.get(userPurchasesUrl);
  }

  getLevel(levelId: string) {
    const levelUrl = `/api/level/${levelId}`;
    return this.http.get(levelUrl);
  }
}
