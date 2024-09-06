import { createSelector } from '@ngrx/store';
import { AppState } from '../reducers';

const selectPostsFeature = (state: AppState) => state.posts;

export const selectPosts = createSelector(selectPostsFeature, posts => posts.items);
export const selectPostsIsLoading = createSelector(selectPostsFeature, posts => posts.isLoading);
export const selectPostsIsLoaded = createSelector(selectPostsFeature, posts => posts.isLoaded);
