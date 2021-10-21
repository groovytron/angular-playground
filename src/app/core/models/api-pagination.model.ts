interface PaginationInput<T> {
  previous: number;
  current: number;
  next: number;
  last: number;
  items: T[];
}

export class ApiPagination<T> {
  previous: number;
  current: number;
  next: number;
  last: number;
  items: T[];

  constructor(pagination: PaginationInput<T>) {
    this.previous = pagination.previous;
    this.current = pagination.current;
    this.next = pagination.next;
    this.last = pagination.last;
    this.items = pagination.items;
  }
}
