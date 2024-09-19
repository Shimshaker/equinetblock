import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationbarComponent } from './navigationbar/navigationbar.component';
import { BoardingComponent } from './boarding/boarding.component';
import { ConceptComponent } from './concept/concept.component';
import { ContactComponent } from './contact/contact.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { NetworkComponent } from './network/network.component';
import { EvolutionComponent } from './evolution/evolution.component';
import { TechnologyComponent } from './technology/technology.component';
import { CapacityComponent } from './capacity/capacity.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    NavigationbarComponent,
    BoardingComponent,
    ConceptComponent,
    ContactComponent,
    HeaderComponent,
    FooterComponent,
    NetworkComponent,
    EvolutionComponent,
    TechnologyComponent,
    CapacityComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
