import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConfigComponent } from './components/config/config.component';

const routes: Routes = [
  { path: 'config', component: ConfigComponent }
];

@NgModule({
  exports: [
    RouterModule
  ],
  imports: [
    RouterModule.forRoot(routes)
  ]
})

export class AppRoutingModule {
}
