import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodoappComponent } from './todoapp/todoapp.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ZippyComponent } from './zippy/zippy.component';
@NgModule({
  declarations: [
    AppComponent,
    TodoappComponent,
    ZippyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
