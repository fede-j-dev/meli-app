import { Component, OnInit, OnDestroy } from '@angular/core';
import { UserService } from '../../services/userService/user.service';
import { Subscription } from 'rxjs';
import {
  UserInfo,
  Level,
  RestrictionsResponse,
  Restrictions,
} from '../../interfaces/userInfo';

@Component({
  selector: 'app-general-info',
  templateUrl: './general-info.component.html',
  styleUrls: ['./general-info.component.scss'],
})
export class GeneralInfoComponent implements OnInit, OnDestroy {
  userInfo: UserInfo;
  userLevel: Level;
  userRestrictionsData: any;
  viewMore: boolean = false;
  restrictions: Restrictions[] = [];
  subscriptions = new Subscription();

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.handleSubscriptions();
  }

  handleSubscriptions(): void {
    this.subscriptions.add(
      this.userService.getUserGeneralInfo().subscribe((info: UserInfo) => {
        this.userInfo = info;
      })
    );
    this.subscriptions.add(
      this.userService.getUserLevel().subscribe((level: Level) => {
        this.userLevel = level;
      })
    );

    this.subscriptions.add(
      this.userService.getUserRestrictions().subscribe((restrictionsData) => {
        this.userRestrictionsData = restrictionsData;
        this.getRestrictions();
      })
    );
  }

  getRestrictions(): void {
    for (const property in this.userRestrictionsData) {
      const dataProperty = this.userRestrictionsData[property];
      if (typeof dataProperty == 'object') {
        this.restrictions.push(dataProperty);
      }
    }
  }

  ngOnDestroy(): void {
    if (this.subscriptions) {
      this.subscriptions.unsubscribe();
      this.subscriptions = null;
    }
  }
}
