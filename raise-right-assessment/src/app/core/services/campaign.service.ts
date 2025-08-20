import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';
import { map, Observable } from 'rxjs';
import { Campaign } from '../../shared/models/campaign.models';

@Injectable({
  providedIn: 'root'
})
export class CampaignService {
private REST_API = 'https://raise-right-assessment-mocks.up.railway.app/api/campaigns';
  constructor(private http: HttpClient, private apollo: Apollo) { }

// Fetches a list of all campaigns from the REST API.
  getCampaigns(): Observable<Campaign[]> {
    return this.http.get<Campaign[]>(this.REST_API);
  }

  /**
   * Fetches detailed information about a specific campaign using GraphQL.
   * @param id The unique identifier of the campaign to retrieve.
   * @returns An Observable emitting the campaign's details, including donor information.
   */
  getCampaignDetails(id: number): Observable<any> {
    return this.apollo.watchQuery({
      query: gql`
        query getCampaignDetails($id: ID!) {
          campaign(id: $id) {
            id
            name
            goal
            currentAmount
            description
            imageUrl
          }
        }
      `,
      variables: { id }
    }).valueChanges;
  }
getDonors(id: number): Observable<any[]> {
  return this.http.get<any>(`${this.REST_API}/${id}`)
    .pipe(map(res => res.donors ?? []));
}

}
