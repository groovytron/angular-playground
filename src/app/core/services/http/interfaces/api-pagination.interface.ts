export interface ApiPaginationInterface<T> {
  previous: number;
  current: number;
  next: number;
  last: number;
  items: T[];
}
