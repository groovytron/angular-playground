interface PaginationInput<T> {
  totalItems: number;
  previous: number | null;
  current: number;
  next: number | null;
  last: number;
  items: T[];
}

const DEFAULT_PAGINATION = {
  totalItems: 0,
  previous: null,
  current: 1,
  next: null,
  last: 1,
  items: [],
};

export class ApiPagination<T> {
  totalItems: number;
  previous: number | null;
  current: number;
  next: number | null;
  last: number;
  items: T[];

  constructor(pagination: PaginationInput<T> = DEFAULT_PAGINATION) {
    this.totalItems = pagination.totalItems;
    this.previous = pagination.previous;
    this.current = pagination.current;
    this.next = pagination.next;
    this.last = pagination.last;
    this.items = pagination.items;
  }
}
