import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileComponent } from './pages/profile/profile.component';
import { GeneralInfoComponent } from './pages/general-info/general-info.component';
import { PurchasesComponent } from './pages/purchases/purchases.component';

const routes: Routes = [
  {
    path: 'profile',
    component: ProfileComponent,
    children: [
      {
        path: '',
        component: GeneralInfoComponent,
      },
      {
        path: 'purchases',
        component: PurchasesComponent,
      },
    ],
  },
  { path: 'generalInfo', component: GeneralInfoComponent },
  { path: '**', redirectTo: '/profile' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
