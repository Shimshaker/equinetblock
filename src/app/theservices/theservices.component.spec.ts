import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TheservicesComponent } from './theservices.component';

describe('TheservicesComponent', () => {
  let component: TheservicesComponent;
  let fixture: ComponentFixture<TheservicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TheservicesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TheservicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
