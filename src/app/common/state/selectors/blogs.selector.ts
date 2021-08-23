import {createFeatureSelector, createSelector} from "@ngrx/store";
import {blogsFeatureKey, BlogsState} from "../reducers/blogs.reducer";

export const selectBlogsState = createFeatureSelector<BlogsState>(
  blogsFeatureKey
);

export const getAllBlogs = createSelector(
  selectBlogsState,
  (state: BlogsState) => state.allBlogs
);
