import { BrowserModule } 		from '@angular/platform-browser';
import { NgModule } 			from '@angular/core';

import { AppComponent } 		from './app.component';

import { ProfileService }		from './services/profile.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
  	ProfileService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
