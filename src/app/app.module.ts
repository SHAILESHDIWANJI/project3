import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OneComponent } from './one/one.component';
import { TwoComponent } from './two/two.component';
import { ThreeComponent } from './three/three.component';
import { FourComponent } from './four/four.component';
import { FiveComponent } from './five/five.component';
import { provideState, provideStore, StoreModule } from '@ngrx/store';
import { reducer } from './store/counter.reducer';
import { HttpClient, HttpClientModule, provideHttpClient } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    OneComponent,
    TwoComponent,
    ThreeComponent,
    FourComponent,
    FiveComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({},{ }),
    // HttpClientModule 
  ],

  providers: [
    provideHttpClient(),
    provideStore(),
    provideState({name:'counter',reducer:reducer})
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
