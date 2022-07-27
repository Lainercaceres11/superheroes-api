import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetallesSuperheroeComponent } from './components/detalles-superheroe/detalles-superheroe.component';
import { SuperheroeComponent } from './components/superheroe/superheroe.component';

const routes: Routes = [
  {path: "superheroe", component: SuperheroeComponent},
  {path: "superheroe", component: SuperheroeComponent},
  {path: "superheroe/:id", component: DetallesSuperheroeComponent},
  {path: "**", redirectTo: 'superheroe', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
