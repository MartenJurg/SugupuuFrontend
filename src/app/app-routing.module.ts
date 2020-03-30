import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from "./components/home/home.component";
import { PersonDetailedViewComponent} from "./components/person-detailed-view/person-detailed-view.component";


const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'person/:id', component: PersonDetailedViewComponent},
  { path: '**', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
