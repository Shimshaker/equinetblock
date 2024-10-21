import { Component, ElementRef, ViewChild } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-concept',
  templateUrl: './concept.component.html',
  styleUrl: './concept.component.scss'
})
export class ConceptComponent {
@ViewChild('infoSection') infoSection!: ElementRef;

scroolToSection() {

  this.infoSection.nativeElement.scrollIntoView({ Behavior: 'smooth'});

}

}
