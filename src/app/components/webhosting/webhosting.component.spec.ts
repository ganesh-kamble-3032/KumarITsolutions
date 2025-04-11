import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebhostingComponent } from './webhosting.component';

describe('WebhostingComponent', () => {
  let component: WebhostingComponent;
  let fixture: ComponentFixture<WebhostingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WebhostingComponent]
    });
    fixture = TestBed.createComponent(WebhostingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
