import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfileComponent } from 'app/profile/profile.component';
import { DescriptonandlandmarksComponent } from 'app/descriptonandlandmarks/descriptonandlandmarks.component';
import { FacilitiesComponent } from 'app/facilities/facilities.component';
import { PhotosComponent } from 'app/photos/photos.component';
import { VideosComponent } from 'app/videos/videos.component';
import { UnitsandfacilitiesComponent } from 'app/unitsandfacilities/unitsandfacilities.component';
import { TermsandcondtionsComponent } from 'app/termsandcondtions/termsandcondtions.component';

const routes: Routes = [
  
    { path: 'profile', component: ProfileComponent },
  { path: 'descandland', component: DescriptonandlandmarksComponent },
  { path: 'facilities', component: FacilitiesComponent },
  { path: 'photos', component: PhotosComponent },
  { path: 'videos', component: VideosComponent },
  { path: 'unitsandfacilities', component: UnitsandfacilitiesComponent },
  { path: 'termsandconditions', component: TermsandcondtionsComponent },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
