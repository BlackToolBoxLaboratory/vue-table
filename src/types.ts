export type TableHeadObj = {
  id: string,
  name: string,
  [key: string]: any
}

export type TableDataObj = {
  [key: string]: any
}

export type TableMode = 'list' | 'info' | 'compare'
