import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LaunchComponent } from './launch/launch.component';
import { SmartComponent } from './smart/smart.component';


const routes: Routes = [
  {
    path: 'launch', component: LaunchComponent
  },
  {
    path: '', component: SmartComponent
  },
  {
    path: '**', redirectTo: '/'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
