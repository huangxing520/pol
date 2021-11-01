import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebsiteAnalysisComponent } from './website-analysis.component';

describe('WebsiteAnalysisComponent', () => {
  let component: WebsiteAnalysisComponent;
  let fixture: ComponentFixture<WebsiteAnalysisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WebsiteAnalysisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WebsiteAnalysisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
