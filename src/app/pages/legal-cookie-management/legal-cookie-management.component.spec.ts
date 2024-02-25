import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LegalCookieManagementComponent } from './legal-cookie-management.component';

describe('LegalCookieManagementComponent', () => {
  let component: LegalCookieManagementComponent;
  let fixture: ComponentFixture<LegalCookieManagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LegalCookieManagementComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LegalCookieManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
