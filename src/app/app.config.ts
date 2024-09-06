import { ApplicationConfig, provideZoneChangeDetection, isDevMode } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { apiInterceptor } from '../infrastructure/interceptors/api.interceptor';
import { UserRepository } from '../application/repositories/user.repository';
import { PostRepository } from '../application/repositories/post.repository';
import { PostRestService } from '../infrastructure/services/post-rest.service';
import { UserRestService } from '../infrastructure/services/user-rest.service';
import { provideStore } from '@ngrx/store';
import { REDUCERS } from '../application/reducers';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { provideEffects } from '@ngrx/effects';

import * as postsEffects from '../application/effects/posts.effect';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideHttpClient(withInterceptors([apiInterceptor])),
    { provide: UserRepository, useClass: UserRestService },
    { provide: PostRepository, useClass: PostRestService },
    provideStore(REDUCERS),
    provideStoreDevtools({ maxAge: 25, logOnly: !isDevMode() }),
    provideEffects(postsEffects)
],
};
