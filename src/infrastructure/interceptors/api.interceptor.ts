import {
  HttpInterceptorFn,
  HttpRequest,
  HttpHandlerFn,
} from '@angular/common/http';

export const apiInterceptor: HttpInterceptorFn = (
  request: HttpRequest<unknown>,
  next: HttpHandlerFn
) => {
  if (/^(http|https):/.test(request.url)) {
    return next(request);
  }

  return next(
    request.clone({
      url: `https://jsonplaceholder.typicode.com/${request.url}`,
    })
  );
};
