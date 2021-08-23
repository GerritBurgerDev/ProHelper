import {NgModule} from "@angular/core";
import {StoreModule} from "@ngrx/store";
import {EffectsModule} from "@ngrx/effects";
import {blogsFeatureKey, BlogsReducer} from "../../../../common/state/reducers/blogs.reducer";
import {BlogsEffects} from "../../../../common/state/effects/blogs.effects";
import {BlogsFacade} from "../../../../common/state/facades/blogs.facade";
import {BlogsServices} from "../../../../common/state/services/blogs.services";

@NgModule({
  imports: [
    StoreModule.forFeature(blogsFeatureKey, BlogsReducer),
    EffectsModule.forFeature([BlogsEffects])
  ],
  providers: [
    BlogsFacade,
    BlogsServices
  ]
})
export class BlogsModule {}
