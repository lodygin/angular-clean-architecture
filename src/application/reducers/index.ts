import { ActionReducerMap } from '@ngrx/store';

import * as fromPosts from './posts.reducer';

export interface AppState {
  [fromPosts.FEATURE_KEY]: fromPosts.State;
}

export const REDUCERS: ActionReducerMap<AppState> = {
  [fromPosts.FEATURE_KEY]: fromPosts.reducer,
};

