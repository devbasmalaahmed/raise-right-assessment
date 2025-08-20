import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'campaigns', pathMatch: 'full' },
  {
    path: 'campaigns',
    loadComponent: () => import('./features/Campaigns/campaigns-list/campaigns-list.component').then(m => m.CampaignsListComponent),
    title: 'Campaigns List'
  },
  {
    path: 'campaigns/:id',
    loadComponent: () => import('./features/Campaigns/campaigns-details/campaigns-details.component').then(m => m.CampaignsDetailsComponent),
    title: 'Campaign Details'
  },
];
