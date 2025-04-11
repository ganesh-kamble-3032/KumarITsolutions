import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DomiansComponent } from './domians.component';

describe('DomiansComponent', () => {
  let component: DomiansComponent;
  let fixture: ComponentFixture<DomiansComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DomiansComponent]
    });
    fixture = TestBed.createComponent(DomiansComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
