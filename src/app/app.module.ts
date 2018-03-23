import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';



import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import {AboutService} from "../services/about.service";
import {RouterModule, Routes} from "@angular/router";
import { GalleryComponent } from './gallery/gallery.component';
import {HttpModule} from "@angular/http";
import {GalleryService} from "../services/gallery.service";


const  routes:Routes=[
  { path:'about' , component:AboutComponent },
  {path:'contacts' , component:ContactComponent} ,
  {path:'gallery' , component:GalleryComponent} ,
  {path:'' , redirectTo:'/about' , pathMatch:'full'}

];

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ContactComponent,
    GalleryComponent
  ],
  imports: [
    BrowserModule,FormsModule , RouterModule.forRoot(routes) ,HttpModule

  ],
  providers: [AboutService,GalleryService],
  bootstrap: [AppComponent],
  exports:[AppComponent]
})
export class AppModule { }
