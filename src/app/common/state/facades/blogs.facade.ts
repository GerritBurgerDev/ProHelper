import {Injectable} from "@angular/core";
import {BlogsState} from "../reducers/blogs.reducer";
import {select, Store} from "@ngrx/store";
import * as BlogsSelectors from '../selectors/blogs.selector';

@Injectable()
export class BlogsFacade {
  allBlogs$ = this.store.pipe(select(BlogsSelectors.getAllBlogs));

  constructor(private store: Store<BlogsState>) {}
}
