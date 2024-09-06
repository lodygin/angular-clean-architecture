import { createAction, props } from '@ngrx/store';
import { Post } from '../../domain/post';

const SCOPE = 'POSTS';

enum GetAllPostsAction {
  GET_ALL = `[${SCOPE}] Get all posts`,
  GET_ALL_SUCCESS = `[${SCOPE}] Get all posts SUCCESS`,
  GET_ALL_ERROR = `[${SCOPE}] Get all posts ERROR`,
}

export const getAllPostsAction = createAction(GetAllPostsAction.GET_ALL);
export const getAllPostsSuccessAction = createAction(
  GetAllPostsAction.GET_ALL_SUCCESS,
  props<{ items: Post[] }>(),
);
export const getAllPostsErrorAction = createAction(GetAllPostsAction.GET_ALL_ERROR);
