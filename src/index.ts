// interface LabelledValue {
//   label: string;
// }

// function printLabel(labelledObj: LabelledValue) {
//   console.log(labelledObj.label);
// }

// setTimeout(() => {
//   let myObj = { size: 10, label: "Size 10 Object" };
//   printLabel(myObj);
// }, 1000);

import {
  getMetadataStorage,
  ExpressServer,
  ExpressServerArgs
} from "./libs/rest-framework";

const expressServerArgs: ExpressServerArgs = {
  controllers: __dirname + "/controllers/**/*.js"
};

const server = new ExpressServer(expressServerArgs);
const app = server.createServer();
