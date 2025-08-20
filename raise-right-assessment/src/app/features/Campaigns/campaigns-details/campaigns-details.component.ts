import { CommonModule } from '@angular/common';
import { Component, DestroyRef, inject, OnInit } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Apollo, gql } from 'apollo-angular';
import { CampaignService } from '../../../core/services/campaign.service';
import { NotificationComponent } from "../../../shared/components/notification/notification.component";

@Component({
  selector: 'app-campaigns-details',
  standalone: true,
  imports: [CommonModule, NotificationComponent,RouterLink],
  templateUrl: './campaigns-details.component.html',
  styleUrl: './campaigns-details.component.scss'
})
export class CampaignsDetailsComponent implements OnInit{
  private readonly route = inject(ActivatedRoute);
  private readonly apollo = inject(Apollo);
  private readonly destroyRef = inject(DestroyRef);
private readonly campaignService = inject(CampaignService)
   campaignId!: number;
campaign: any;
  donors: any[] = [];
  loading = true;
error = false;

/**
 * Angular lifecycle hook that is called after data-bound properties of a component are initialized.
 * Fetches the campaign details and list of donors for the given campaign ID from the route.
 * Handles loading and error state management.
 */
ngOnInit(): void {
  this.campaignId = +this.route.snapshot.paramMap.get('id')!;
  this.loading = true;

  this.campaignService.getCampaignDetails(this.campaignId)
    .pipe(takeUntilDestroyed(this.destroyRef))
    .subscribe({
      next: (res: any) => {
        this.campaign = res.data?.campaign;
        this.loading = false;
      },
      error: (err) => {
        this.error = true;
        this.loading = false;
      }
    });

  this.campaignService.getDonors(this.campaignId)
    .pipe(takeUntilDestroyed(this.destroyRef))
    .subscribe({
      next: (donors: any[]) => this.donors = donors,
      error: (err) => {
        this.donors = [];
      }
    });
}
}


