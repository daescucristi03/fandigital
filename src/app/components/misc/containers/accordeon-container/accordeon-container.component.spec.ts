import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccordeonContainerComponent } from './accordeon-container.component';

describe('AccordeonContainerComponent', () => {
  let component: AccordeonContainerComponent;
  let fixture: ComponentFixture<AccordeonContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AccordeonContainerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccordeonContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
