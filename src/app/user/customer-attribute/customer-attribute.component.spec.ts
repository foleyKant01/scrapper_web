import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerAttributeComponent } from './customer-attribute.component';

describe('CustomerAttributeComponent', () => {
  let component: CustomerAttributeComponent;
  let fixture: ComponentFixture<CustomerAttributeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CustomerAttributeComponent]
    });
    fixture = TestBed.createComponent(CustomerAttributeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
