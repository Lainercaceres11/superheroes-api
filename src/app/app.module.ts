import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SuperheroeComponent } from './components/superheroe/superheroe.component';
import { DetallesSuperheroeComponent } from './components/detalles-superheroe/detalles-superheroe.component';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import {MatCardModule} from '@angular/material/card';
import { SpinnerComponent } from './shared/spinner/spinner.component'; 
import { SpinnerInterceptorInterceptor } from './shared/spinner/spinner-interceptor.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    SuperheroeComponent,
    DetallesSuperheroeComponent,
    SpinnerComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatCardModule, 
  
  ],
  providers: [{provide: HTTP_INTERCEPTORS, useClass: SpinnerInterceptorInterceptor, multi: true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
