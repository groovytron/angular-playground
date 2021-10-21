import { ApiPaginationInterface } from 'src/app/core/services/http/interfaces/api-pagination.interface';
import { TodoInterface } from 'src/app/core/services/http/interfaces/todo.interface';

const TODO_PAGES =
  [
    [
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
    ],
    [
      {
        id: 3,
        name: "Housework",
        description: "Housework description",
        owner: "jay"
      },
      {
        id: 4,
        name: "Music",
        description: "Music",
        owner: "jay"
      },
    ],
];

export function getTodoPageMock(params: any): ApiPaginationInterface<TodoInterface> {
  const totalPages = 2;
  let page: number = (params.page === undefined ?  1 : params.page) as number;
  page = Math.min(page, totalPages);

  const items = TODO_PAGES[page - 1];
  const totalItems = TODO_PAGES.reduce((accumulator, items) => accumulator + items.length, 0);

  console.log('items', items);

  return {
    count: totalItems,
    previous: page - 1 < 0 ? null : page - 1,
    current: page,
    next: page === totalPages ? null : page + 1,
    last: totalPages,
    items
  };
}
