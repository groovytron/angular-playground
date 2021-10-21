import { ApiPaginationInterface } from 'src/app/core/services/http/interfaces/api-pagination.interface';
import { TodoInterface } from 'src/app/core/services/http/interfaces/todo.interface';

export const TODO_PAGINATION_MOCK: ApiPaginationInterface<TodoInterface> = {
  previous: 1,
  current: 2,
  next: 3,
  last: 4,
  items: [
    {
      id: 1,
      name: "Groceries",
      description: "Groceries description",
      owner: "jay"
    },
    {
      id: 2,
      name: "Ikea",
      description: "Ikea",
      owner: "jay"
    },
  ]
};
