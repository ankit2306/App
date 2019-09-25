import { catchError } from 'rxjs/operators';
import { AlertifyService } from './../_services/alertify.service';
import { UserService } from './../_services/user.service';
import { Injectable } from "@angular/core";
import { User } from '../_models/user';
import { Resolve, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';

@Injectable()
export class  MemberDetailsResolver implements Resolve<User> {
    
    constructor(private userService: UserService, private router: Router, private alertify: AlertifyService) { }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): User | Observable<User> | Promise<User> {
        return this.userService.getUser(route.params['id'])
            .pipe(catchError(error => {
                this.alertify.error('Problem retreiving user data');
                this.router.navigate(['/members']);
                return of(null);
            }));
    }
}