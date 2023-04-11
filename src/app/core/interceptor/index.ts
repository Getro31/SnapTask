import { HTTP_INTERCEPTORS } from "@angular/common/http";
import { AuthInterceptor } from "./auth.interceptor";
//Generation des providers pour que angular reconnaisse l'interceptor
export const HttpInterceptorProviders = [
    { provide : HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true}
];