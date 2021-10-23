export interface PaginationParameters {
  [param: string]:
    | string
    | number
    | boolean
    | readonly (string | number | boolean)[];
}
