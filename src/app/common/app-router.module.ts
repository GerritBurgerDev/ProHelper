import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HomepageComponent } from '../libs/libs-container/libs/home-page/homepage.component';
import { ContactUsComponent } from '../libs/libs-container/libs/contact-us/contact-us.component';

@NgModule({
  imports: [
    RouterModule.forRoot([
      { path: 'home', component: HomepageComponent },
      { path: 'services', component: HomepageComponent },
      { path: 'contact-us', component: ContactUsComponent },
      { path: 'about-us', component: HomepageComponent },
      { path: '', redirectTo: '/home', pathMatch: 'full' },
      // {path: '**', component: PageNotFoundComponent}
    ]),
  ],
})
export class AppRouterModule {}
