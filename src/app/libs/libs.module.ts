import { NgModule } from '@angular/core';
import { HomepageComponent } from './libs-container/libs/home-page/homepage.component';
import { ContainerComponent } from './libs-container/container.component';
import { AppCommonModule } from '../common/app-common.module';
import { AppRouterModule } from '../common/app-router.module';
import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { BlogsModule } from './libs-container/libs/blogs/blogs.module';
import { ContactUsModule } from './libs-container/libs/contact-us/contact-us.module';
import { OurServicesModule } from './libs-container/libs/ph-services/ContainerPage/our-services.module';

@NgModule({
  declarations: [HomepageComponent, ContainerComponent],
  imports: [
    AppCommonModule,
    AppRouterModule,
    BlogsModule,
    ContactUsModule,
    FlexLayoutModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    OurServicesModule,
    RouterModule,
  ],
  exports: [HomepageComponent, ContainerComponent],
})
export class LibsModule {}
