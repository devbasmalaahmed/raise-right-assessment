export interface Donor {
  name: string;
  amount: number;
}

export interface Campaign {
  id: number;
  name: string;
  goal: number;
  currentAmount: number;
  description?: string;
  imageUrl: string;
  donors?: Donor[];
}
