import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { map } from 'rxjs';
import { AccountService } from '../_services/account.service';
import { ToastrService } from 'ngx-toastr';

export const authGuard: CanActivateFn = (_route, _state) => {
  const accoountService = inject(AccountService);
  const toastr = inject(ToastrService)

  return accoountService.currentUser$.pipe(
    map((user: any) => {
      if (user) return true;
      else {
        toastr.error("You shall not pass!");
        return false;
      }
    })
  )
};