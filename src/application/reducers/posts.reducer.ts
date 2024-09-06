import { createReducer, on } from '@ngrx/store';
import { getAllPostsAction, getAllPostsErrorAction, getAllPostsSuccessAction } from '../actions/get-all-posts.action';
import { Post } from '../../domain/post';

export const FEATURE_KEY = 'posts' as const;

export interface State {
  isLoading: boolean;
  isLoaded: boolean;
  items: Post[];
}

const INITIAL_STATE: State = {
  isLoading: false,
  isLoaded: false,
  items: [],
};

export const reducer = createReducer(
  INITIAL_STATE,

  on(getAllPostsAction, (state) => ({
    ...state,
    isLoaded: false,
    isLoading: true,
    items: [],
  })),

  on(getAllPostsSuccessAction, (state, { items }) => ({
    ...state,
    isLoaded: true,
    isLoading: false,
    items,
  })),

  on(getAllPostsErrorAction, (state) => ({
    ...state,
    isLoaded: true,
    isLoading: false,
  })),
);
