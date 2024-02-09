import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { ValentineTitleComponent } from './valentine-title/valentine-title.component';
import { ValentineOptionsComponent } from './valentine-options/valentine-options.component';

@NgModule({
  declarations: [
    AppComponent,
    ValentineTitleComponent,
    ValentineOptionsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
