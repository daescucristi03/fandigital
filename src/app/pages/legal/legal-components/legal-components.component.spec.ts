import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LegalComponentsComponent } from './legal-components.component';

describe('LegalComponentsComponent', () => {
  let component: LegalComponentsComponent;
  let fixture: ComponentFixture<LegalComponentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LegalComponentsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LegalComponentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
