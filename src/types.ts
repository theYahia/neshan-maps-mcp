export interface NeshanGeocodeResult {
  location: { x: number; y: number };
  neighbourhood: string;
  municipality_zone: string;
  in_traffic_zone: boolean;
  in_odd_even_zone: boolean;
  city: string;
  state: string;
  formatted_address: string;
}

export interface NeshanSearchResult {
  title: string;
  address: string;
  category: string;
  region: string;
  type: string;
  location: { x: number; y: number };
}

export interface NeshanDirectionsResult {
  routes: Array<{
    legs: Array<{
      summary: string;
      distance: { value: number; text: string };
      duration: { value: number; text: string };
      steps: Array<{
        name: string;
        instruction: string;
        distance: { value: number; text: string };
        duration: { value: number; text: string };
      }>;
    }>;
  }>;
}

export interface NeshanDistanceMatrixResult {
  rows: Array<{
    elements: Array<{
      status: string;
      distance: { value: number; text: string };
      duration: { value: number; text: string };
    }>;
  }>;
}
