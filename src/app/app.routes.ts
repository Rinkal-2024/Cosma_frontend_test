import { Routes } from '@angular/router';
import { ErrorComponent } from 'src/app/ui/templates/error/error.component';
import { DashboardComponent } from 'src/app/pages/dashboard/dashboard.component';
import { LoginComponent } from './pages/login/login.component';
import { authGuard } from './guard/auth.guard';
import { SettingsComponent } from './pages/settings/settings.component';
import { DashboardLayoutComponent } from './ui/templates/dashboard-layout/dashboard-layout.component';
import { ProfileComponent } from './pages/profile/profile.component';

export const ROUTE_PATHS = {
  DASHBOARD: 'dashboard',
  LOGIN: 'login',
  SETTINGS: 'settings',
}

export const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  {
    path: ROUTE_PATHS.DASHBOARD,
    component: DashboardLayoutComponent, canActivate :[authGuard],
    children: [
      { path: '', component: DashboardComponent },
      { path: 'settings', component: SettingsComponent },
      { path: 'profile' , component: ProfileComponent}
    ],
  },
  { path : ROUTE_PATHS.LOGIN , component :LoginComponent , canActivate :[authGuard]},
  { path : ROUTE_PATHS.SETTINGS , component :SettingsComponent},
  { path: '**', component: ErrorComponent },
];
