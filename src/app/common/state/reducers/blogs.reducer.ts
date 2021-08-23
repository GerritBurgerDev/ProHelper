import {Blog} from "../../models/Blogs/blogs.model";
import {Action, createReducer, on} from "@ngrx/store";
import {resetStoreState} from "../actions/blogs.actions";

export const blogsFeatureKey = 'blogs';

export interface BlogsState {
  allBlogs: Blog[]
}

export const initialBlogsState: BlogsState = {
  allBlogs: []
}

const blogsReducer =  createReducer(
  initialBlogsState,
  on(resetStoreState, (state) => ({
    ...initialBlogsState
  }))
)

export function getBlogsState(): BlogsState {
  return { ...initialBlogsState };
}

export function BlogsReducer(state: BlogsState = initialBlogsState, action: Action) {
  return blogsReducer(state, action);
}
