import { CanActivateFn } from '@angular/router';

export const redirectGuard: CanActivateFn = (route, state) => {
  window.location.href = route.data['externalUrl'];
  return false;
};
