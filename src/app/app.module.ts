import { CoreModule } from "./modules/core/core.module";
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HomeModule } from "./modules/home/home.module";

@NgModule({
  declarations: [AppComponent],
  imports: [CoreModule, BrowserModule, AppRoutingModule, HomeModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
