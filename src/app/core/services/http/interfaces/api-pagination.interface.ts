export interface ApiPaginationInterface<T> {
  totalItems: number;
  previous: number | null;
  current: number;
  next: number | null;
  last: number;
  items: T[];
}
