import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { RegisterComponent } from './register/register.component';
import { UserprofileComponent } from './userprofile/userprofile.component';

const routes: Routes = [
  { path:'', redirectTo:'homepage',pathMatch:'full' },
  { path: '', component: HomepageComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'profile', component: UserprofileComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
}) 
export class AppRoutingModule { }
