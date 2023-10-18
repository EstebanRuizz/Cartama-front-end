import { CanActivateFn } from '@angular/router';

export const jwtAuthGuard: CanActivateFn = (route, state) => {
  const jwt = sessionStorage.getItem('jwt');
  if (jwt) {
    return true;
  } else {
    return false;
  }
};
