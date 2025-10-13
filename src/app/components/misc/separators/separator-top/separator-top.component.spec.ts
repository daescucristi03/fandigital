import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeparatorTopComponent } from './separator-top.component';

describe('SeparatorTopComponent', () => {
  let component: SeparatorTopComponent;
  let fixture: ComponentFixture<SeparatorTopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SeparatorTopComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SeparatorTopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
