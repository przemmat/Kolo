import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MousesComponent } from './mouses/mouses.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { KeyboardsComponent } from './keyboards/keyboards.component';

@NgModule({
  declarations: [AppComponent, MousesComponent, KeyboardsComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
