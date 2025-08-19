import { Component, inject, OnInit, DestroyRef } from '@angular/core';
import { Campaign } from '../../../shared/models/campaign.models';
import { CampaignService } from '../../../core/services/campaign.service';
import { CommonModule } from '@angular/common';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-campaigns-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './campaigns-list.component.html',
  styleUrl: './campaigns-list.component.scss',
})
export class CampaignsListComponent implements OnInit {
  campaigns: Campaign[] = [];
  loading = true;
  private readonly campaignService = inject(CampaignService);
  private readonly destroyRef = inject(DestroyRef);
  
  ngOnInit(): void {
    this.campaignService.getCampaigns()
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe({
        next: (res: Campaign[]) => {
          this.campaigns = res ?? [];
          this.loading = false;
        },
        error: () => {
          this.loading = false;
        }
      });
  }
}
