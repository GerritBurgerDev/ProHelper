import {NgModule} from "@angular/core";
import {NavComponent} from "./nav/nav.component";
import {FooterComponent} from "./footer/footer.component";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import {MatCardModule} from "@angular/material/card";
import {CarouselComponent} from "./carousel/carousel.component";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";

@NgModule({
  declarations: [NavComponent, FooterComponent, CarouselComponent],
  imports: [
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    CommonModule,
    RouterModule,
  ],
  exports: [NavComponent, FooterComponent, CarouselComponent],
})
export class AppCommonModule {}
