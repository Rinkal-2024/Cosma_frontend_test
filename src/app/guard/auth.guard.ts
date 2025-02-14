import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = (route) => {
  const router = inject(Router);
  const token = localStorage.getItem('token');

  if (route.routeConfig?.path === 'login') {
    if (token) {
      router.navigate(['/dashboard']);
      return false;
    }
  }
  if (route.routeConfig?.path === 'dashboard') {
    if (!token) {
      router.navigate(['/login']);
      return false;
    }
  }
  return true;
};
