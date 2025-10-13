import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeparatorBottomComponent } from './separator-bottom.component';

describe('SeparatorBottomComponent', () => {
  let component: SeparatorBottomComponent;
  let fixture: ComponentFixture<SeparatorBottomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SeparatorBottomComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SeparatorBottomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
