import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProfileComponent } from './profile/profile.component';
import { DescriptonandlandmarksComponent } from './descriptonandlandmarks/descriptonandlandmarks.component';
import { FacilitiesComponent } from './facilities/facilities.component';
import { PhotosComponent } from './photos/photos.component';
import { VideosComponent } from './videos/videos.component';
import { UnitsandfacilitiesComponent } from './unitsandfacilities/unitsandfacilities.component';
import { TermsandcondtionsComponent } from './termsandcondtions/termsandcondtions.component';

@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    DescriptonandlandmarksComponent,
    FacilitiesComponent,
    PhotosComponent,
    VideosComponent,
    UnitsandfacilitiesComponent,
    TermsandcondtionsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
