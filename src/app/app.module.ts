import { BrowserModule } 		from '@angular/platform-browser';
import { NgModule } 			from '@angular/core';

import { AppComponent } 		from './app.component';

import { ProfileService }		from './services/profile.service';
import { MapService }			from './services/map.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
  	ProfileService,
  	MapService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
