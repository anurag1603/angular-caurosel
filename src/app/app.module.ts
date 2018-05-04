import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { MainImageComponent } from './main-image/main-image.component';
import { ImageServiceService } from './services/image-service.service';
import { SelectedImageComponent } from './selected-image/selected-image.component';


@NgModule({
  declarations: [
    AppComponent,
    MainImageComponent,
    SelectedImageComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [ImageServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
