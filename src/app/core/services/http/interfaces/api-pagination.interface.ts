export interface ApiPaginationInterface<T> {
  count: number;
  previous: number | null;
  current: number;
  next: number | null;
  last: number;
  items: T[];
}
