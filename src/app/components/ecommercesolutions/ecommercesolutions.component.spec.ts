import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EcommercesolutionsComponent } from './ecommercesolutions.component';

describe('EcommercesolutionsComponent', () => {
  let component: EcommercesolutionsComponent;
  let fixture: ComponentFixture<EcommercesolutionsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EcommercesolutionsComponent]
    });
    fixture = TestBed.createComponent(EcommercesolutionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
