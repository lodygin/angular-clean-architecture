import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { apiInterceptor } from '../infrastructure/interceptors/api.interceptor';
import { UserRepository } from '../application/repositories/user.repository';
import { PostRepository } from '../application/repositories/post.repository';
import { PostRestService } from '../infrastructure/services/post-rest.service';
import { UserRestService } from '../infrastructure/services/user-rest.service';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideHttpClient(withInterceptors([apiInterceptor])),
    { provide: UserRepository, useClass: UserRestService },
    { provide: PostRepository, useClass: PostRestService },
  ],
};
