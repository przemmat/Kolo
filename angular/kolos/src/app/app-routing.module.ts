import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MousesComponent } from './mouses/mouses.component';
import { KeyboardsComponent } from './keyboards/keyboards.component';

const routes: Routes = [
  { path: 'mouse', component: MousesComponent },
  { path: 'keyboard', component: KeyboardsComponent },
  { path: '', redirectTo: '/mouse', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
