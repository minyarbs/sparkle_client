import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { PartyComponent } from './party/party.component';

const routes: Routes = [
  {path:'register',component:RegisterComponent},
  {path:'home',component:HomeComponent},
  {path:'login',component:LoginComponent},
  {path:'', redirectTo:'/home',pathMatch:'full'},
  {path:'#',redirectTo:'/home',pathMatch:'full'},
  {path:'party/home',redirectTo:'/home',pathMatch:'full' },
  {path:'party/:partyname', component:PartyComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
