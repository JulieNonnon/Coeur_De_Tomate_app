import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LegalPrivacyPolicyComponent } from './legal-privacy-policy.component';

describe('LegalPrivacyPolicyComponent', () => {
  let component: LegalPrivacyPolicyComponent;
  let fixture: ComponentFixture<LegalPrivacyPolicyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LegalPrivacyPolicyComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LegalPrivacyPolicyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
