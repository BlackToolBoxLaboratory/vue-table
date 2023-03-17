export type GetStyle = (
  classList: string[],
  styleObj?: Record<string, any>
) => Record<string, any>;

export type SearchStyleByClassName = (
  className: string,
  styleObj?: Record<string, any>
) => Record<string, any>;

export type TableHeadObj = {
  id: string,
  name: string,
  [key: string]: any
}

export type TableDataObj = {
  [key: string]: any
}

export type TableMode = 'list' | 'info' | 'compare'
