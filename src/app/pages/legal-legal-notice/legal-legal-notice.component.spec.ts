import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LegalLegalNoticeComponent } from './legal-legal-notice.component';

describe('LegalLegalNoticeComponent', () => {
  let component: LegalLegalNoticeComponent;
  let fixture: ComponentFixture<LegalLegalNoticeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LegalLegalNoticeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LegalLegalNoticeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
