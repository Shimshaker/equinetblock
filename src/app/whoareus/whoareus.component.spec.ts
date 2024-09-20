import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhoareusComponent } from './whoareus.component';

describe('WhoareusComponent', () => {
  let component: WhoareusComponent;
  let fixture: ComponentFixture<WhoareusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WhoareusComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WhoareusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
