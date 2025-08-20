import { Component, inject, OnInit, DestroyRef } from '@angular/core';
import { Campaign } from '../../../shared/models/campaign.models';
import { CampaignService } from '../../../core/services/campaign.service';
import { CommonModule } from '@angular/common';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { Router } from '@angular/router';
import { NotificationComponent } from "../../../shared/components/notification/notification.component";

@Component({
  selector: 'app-campaigns-list',
  standalone: true,
  imports: [CommonModule, NotificationComponent],
  templateUrl: './campaigns-list.component.html',
  styleUrl: './campaigns-list.component.scss',
})
export class CampaignsListComponent implements OnInit {

  campaigns: Campaign[] = [];
  loading = true;
  private readonly campaignService = inject(CampaignService);
  private readonly destroyRef = inject(DestroyRef);
  private readonly router= inject(Router)
  /**
   * Angular lifecycle hook that runs after component construction.
   * Fetches the list of campaigns and manages loading state for the UI.
   */
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
  /**
   * Navigates to the campaign details page for a given campaign ID.
   * @param id - The unique identifier of the campaign.
   */
  goToDetails(id: number) { this.router.navigate(['/campaigns', id]); }
}
