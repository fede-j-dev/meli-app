import { Component, OnInit, OnDestroy } from '@angular/core';
import { UserService } from '../../services/userService/user.service';
import { Subscription } from 'rxjs';
import { UserInfo } from '../../interfaces/userInfo';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  subscriptions = new Subscription();
  userInfo: UserInfo;
  selectedSection: number = 1; // 1 -> general info | 2 -> purchases

  constructor(private userService: UserService, private router: Router) {}

  ngOnInit(): void {
    this.handleSubscriptions();
    this.checkSection();
  }

  handleSubscriptions(): void {
    this.subscriptions.add(
      this.userService.getUserGeneralInfo().subscribe((res: UserInfo) => {
        this.userInfo = res;
      })
    );
  }

  checkSection() {
    if (this.router.url == '/profile/purchases') {
      this.selectedSection = 2;
    }
  }

  ngOnDestroy(): void {
    if (this.subscriptions) {
      this.subscriptions.unsubscribe();
      this.subscriptions = null;
    }
  }
}
