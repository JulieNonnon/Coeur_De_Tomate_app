import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LegalCgvComponent } from './legal-cgv.component';

describe('LegalCgvComponent', () => {
  let component: LegalCgvComponent;
  let fixture: ComponentFixture<LegalCgvComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LegalCgvComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LegalCgvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
