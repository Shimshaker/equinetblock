import { NgModule } from '@angular/core';
import { ExtraOptions, RouterModule, Routes } from '@angular/router';
import { BoardingComponent } from './boarding/boarding.component';
import { ConceptComponent } from './concept/concept.component';
import { ContactComponent } from './contact/contact.component';
import { NetworkComponent } from './network/network.component';
import { EvolutionComponent } from './evolution/evolution.component';
import { TechnologyComponent } from './technology/technology.component';
import { CapacityComponent } from './capacity/capacity.component';
import { WhoareusComponent } from './whoareus/whoareus.component';
import { TheservicesComponent } from './theservices/theservices.component';
import { HelptousesiteComponent } from './helptousesite/helptousesite.component';
import { LocationStrategy, PathLocationStrategy } from '@angular/common';

const routes: Routes = [
  { path: '', redirectTo: '/fr', pathMatch: 'full'},
  {
    path: ':lang',
    children: [
      { path: '', component: BoardingComponent},
      { path: 'boarding', component: BoardingComponent},
      { path: 'concept', component: ConceptComponent},
      { path: 'contact', component: ContactComponent},
      { path: 'boarding/contact', component: ContactComponent},
      { path: 'network', component: NetworkComponent},
      { path: 'concept/network', component: NetworkComponent},
      { path: 'evolution', component: EvolutionComponent},
      { path: 'concept/evolution', component: EvolutionComponent},
      { path: 'technology', component: TechnologyComponent},
      { path: 'concept/technology', component: TechnologyComponent},
      { path: 'capacity', component: CapacityComponent},
      { path: 'concept/capacity', component: CapacityComponent},
      { path: 'whoareus', component: WhoareusComponent},
      { path: 'theservice', component: TheservicesComponent},
      { path: 'helptousesite', component: HelptousesiteComponent}
    ]
  },

  { path: '**', redirectTo: 'fr' }
 
];

const routerOptions:ExtraOptions={
  scrollPositionRestoration: 'enabled',
  anchorScrolling: 'enabled'
};

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: false})],
  providers: [{provide: LocationStrategy, useClass: PathLocationStrategy}],
  exports: [RouterModule]
})
export class AppRoutingModule { }
