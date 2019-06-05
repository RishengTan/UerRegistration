import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Operator, Subject } from 'rxjs';
import { Router } from '@angular/router';
import { catchError, map, tap } from 'rxjs/operators';
@Injectable()
export class Authinterceptor implements HttpInterceptor {
    constructor(private route: Router) {

    }
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        if (localStorage.getItem('token') != null) {
            const clone = req.clone({
                headers: req.headers.set("Authorization", "Bearer " + localStorage.getItem("token"))
            });
            return next.handle(clone).pipe(
                tap(
                    succ => { },
                    err => {
                        if (err ) {
                            this.route.navigateByUrl('register')
                        }
                    }
                )
            )
        }
        else{
            return next.handle(req.clone());
        }
    }
}
