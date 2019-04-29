import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WithInputComponent } from './with-input/with-input.component';
import { WithEventComponent } from './with-event/with-event.component';
import { WithManualComponent } from './with-manual/with-manual.component';

@NgModule({
  declarations: [
    AppComponent,
    WithInputComponent,
    WithEventComponent,
    WithManualComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
