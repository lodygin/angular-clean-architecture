import { Actions, createEffect, ofType } from '@ngrx/effects';
import { inject } from '@angular/core';
import { catchError, map, of, switchMap } from 'rxjs';
import { PostRepository } from '../repositories/post.repository';
import { getAllPostsAction, getAllPostsErrorAction, getAllPostsSuccessAction } from '../actions/get-all-posts.action';

export const getAllPostsEffect = createEffect(
  (actions$ = inject(Actions), postsRepository = inject(PostRepository)) => {
    return actions$.pipe(
      ofType(getAllPostsAction),
      switchMap(() => postsRepository.getAll().pipe(
        map(items => getAllPostsSuccessAction({ items })),
        catchError(() => of(getAllPostsErrorAction())),
      )),
    );
  }, { functional: true },
);
