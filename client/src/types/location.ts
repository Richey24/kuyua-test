export type Location = {
  id: number;
  score: string;
  name: string;
  address: string;
  latitude: number;
  longitude: number;
  country: string;
};

export type LocationApiResult = {
  locations: Location[]
  currentPage: number,
  totalPages: number,
  totalLocations: number
}