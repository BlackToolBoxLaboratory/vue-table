import type { DefineComponent } from 'vue';

export declare type GetStyle = (
  classList: string[],
  styleObj?: Record<string, any>
) => Record<string, any>;

export declare type SearchStyleByClassName = (
  className: string,
  styleObj?: Record<string, any>
) => Record<string, any>;

export declare type TableHeadObj = {
  id: string,
  name: string,
  [key: string]: any
}

export declare type TableDataObj = {
  [key: string]: any
}

export declare type TableMode = 'list' | 'info' | 'compare'

export declare const BtbVueTable: DefineComponent<{
  headData: {
    type: TableHeadObj[],
    default: []
  },
  bodyData: {
    type: TableDataObj[],
    default: []
  },
  mode: {
    type: TableMode,
    default: 'list'
  },
  identity: {
    type: String,
    default: 'id'
  },
  emptyText: {
    type: String,
    default: 'Empty'
  },
  styleObj: {
    type: Record<string, any>,
    default: undefined
  },
}>

export declare const BtbVueTableListHead: DefineComponent<{
  headData: {
    type: TableHeadObj[],
    default: []
  },
  styleObj: {
    type: Record<string, any>,
    default: undefined
  },
}>
export declare const BtbVueTableListBody: DefineComponent<{
  headData: {
    type: TableHeadObj[],
    default: []
  },
  bodyData: {
    type: TableDataObj[],
    default: []
  },
  identity: {
    type: String,
    default: 'id'
  },
  styleObj: {
    type: Record<string, any>,
    default: undefined
  },
}>

export declare const BtbVueTableList: BtbVueTable
export declare const BtbVueTableInfo: BtbVueTable
export declare const BtbVueTableCompare: BtbVueTable

declare interface BTBTable {
  install(app: App): void;
}

declare const BtbTableComponents: BTBTable;

export default BtbTableComponents;