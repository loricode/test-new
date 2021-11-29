import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
   {
     path:'',
     redirectTo:'auth',
     pathMatch:'full'
   },
   {
     path:'auth',
     loadChildren:() => import('./modules/auth/auth.module').then(m => m.AuthModule)
   },
   {
    path:'dashboard',
    canActivate:[AuthGuard],
    // canLoad:[AuthGuard],
    loadChildren:() => import('./modules/dashboard/dashboard.module').then(m => m.DashboardModule)
  },
   {
     path:'**', redirectTo:''
   }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
