import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpCounterPanelComponent } from './up-counter-panel.component';

describe('UpCounterPanelComponent', () => {
  let component: UpCounterPanelComponent;
  let fixture: ComponentFixture<UpCounterPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UpCounterPanelComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpCounterPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
