import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuickSendsComponent } from './quick-sends.component';

describe('QuickSendsComponent', () => {
  let component: QuickSendsComponent;
  let fixture: ComponentFixture<QuickSendsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QuickSendsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(QuickSendsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
