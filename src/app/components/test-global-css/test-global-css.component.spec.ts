import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestGlobalCSSComponent } from './test-global-css.component';

describe('TestGlobalCSSComponent', () => {
  let component: TestGlobalCSSComponent;
  let fixture: ComponentFixture<TestGlobalCSSComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TestGlobalCSSComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TestGlobalCSSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
