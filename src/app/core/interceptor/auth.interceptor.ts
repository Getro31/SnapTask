import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpHeaders
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/core/services/auth.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private token: AuthService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    //generation des headers qu'on va ajouter a la request 
    const headers = new HttpHeaders().append('Accept', `Bearer ${this.token.getToken()}`) 
    // clonage de la request parce la request initial est immuable en ajoutans en arguments les headers 
    const req = request.clone({headers})
    // on retourne la requette cloner
    return next.handle(req);
  }
}
