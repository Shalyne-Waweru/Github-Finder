import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { FooterComponent } from './footer/footer.component';
import { DateCountPipe } from './date-count.pipe';
import { HoverColorDirective } from './hover-color.directive';

@NgModule({
  declarations: [
    AppComponent,
    UserProfileComponent,
    FooterComponent,
    DateCountPipe,
    HoverColorDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
