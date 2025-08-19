import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CampaignsDetailsComponent } from './campaigns-details.component';

describe('CampaignsDetailsComponent', () => {
  let component: CampaignsDetailsComponent;
  let fixture: ComponentFixture<CampaignsDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CampaignsDetailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CampaignsDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
