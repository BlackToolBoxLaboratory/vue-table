import type { App } from "vue";

import { GetStyle, SearchStyleByClassName, TableHeadObj, TableDataObj, TableMode } from './types';
import { Table, TableList, TableListHead, TableListBody, TableInfo, TableCompare } from "./table/index";


export default function install(app: App) {
  app.component(Table.name, Table);
  app.component(TableList.name, TableList);
  app.component(TableListHead.name, TableListHead);
  app.component(TableListBody.name, TableListBody);
  app.component(TableInfo.name, TableInfo);
  app.component(TableCompare.name, TableCompare);
};

export {
  install,

  Table,
  TableList,
  TableListHead,
  TableListBody,
  TableInfo,
  TableCompare,

  GetStyle, 
  SearchStyleByClassName, 
  TableHeadObj, 
  TableDataObj,
  TableMode
}
