export interface Location {
  lat: number;
  lon: number;
}

export interface City {
  name: string;
  local_names: any;
  lat: number;
  lon: number;
  country: string;
  state?: string;
}
