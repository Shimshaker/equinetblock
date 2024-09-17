import { NgModule } from '@angular/core';
import { ExtraOptions, RouterModule, Routes } from '@angular/router';
import { BoardingComponent } from './boarding/boarding.component';
import { ConceptComponent } from './concept/concept.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
  { path: '', component: BoardingComponent},
  { path: 'boarding', component: BoardingComponent},
  { path: 'concept', component: ConceptComponent},
  { path: 'contact', component: ContactComponent}
];

const routerOptions:ExtraOptions={
  scrollPositionRestoration: 'enabled',
  anchorScrolling: 'enabled'
};

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
