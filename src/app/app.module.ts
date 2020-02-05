import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LaunchComponent } from './launch/launch.component';
import { SmartComponent } from './smart/smart.component';

@NgModule({
  declarations: [
    AppComponent,
    LaunchComponent,
    SmartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
