import { Routes } from '@angular/router';
import { CampaignsListComponent } from './features/Campaigns/campaigns-list/campaigns-list.component';
import { CampaignsDetailsComponent } from './features/Campaigns/campaigns-details/campaigns-details.component';

export const routes: Routes = [
  { path: '', redirectTo: 'campaigns', pathMatch: 'full' },
  { path: 'campaigns', component: CampaignsListComponent },
  { path: 'campaigns/:id', component: CampaignsDetailsComponent },
];
