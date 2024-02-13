import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeliveryInfosComponent } from './delivery-infos.component';

describe('DeliveryInfosComponent', () => {
  let component: DeliveryInfosComponent;
  let fixture: ComponentFixture<DeliveryInfosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DeliveryInfosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DeliveryInfosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
