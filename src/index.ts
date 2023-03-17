import type { App } from "vue";

import { Table, TableList, TableListHead, TableListBody, TableInfo, TableCompare } from "./table/index";

const install = function (app: App) {
  if (install.installed) {
    /* istanbul ignore next */
    return;
  }
  install.installed = true;

  app.component(Table.name, Table);
  app.component(TableList.name, TableList);
  app.component(TableListHead.name, TableListHead);
  app.component(TableListBody.name, TableListBody);
  app.component(TableInfo.name, TableInfo);
  app.component(TableCompare.name, TableCompare);
};

install.installed = false;

const componentInstaller = {
  install
};

export default componentInstaller;

export {
  install,
  
  Table, 
  TableList, 
  TableListHead, 
  TableListBody, 
  TableInfo, 
  TableCompare
}
