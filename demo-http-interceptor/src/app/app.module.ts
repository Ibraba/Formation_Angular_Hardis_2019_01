import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { HeaderInteceptorConfig } from './header-inteceptor-config';
import { UserComponent } from './user/user.component';
import { FormModelComponent } from './form-model/form-model.component';
import { from } from 'rxjs';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    FormModelComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HeaderInteceptorConfig,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
