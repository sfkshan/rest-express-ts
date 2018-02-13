import "reflect-metadata";
import {
  getMetadataStorage,
  ExpressServer,
  ExpressServerArgs
} from "./libs/rest-framework";
import { createConnection } from "typeorm";

const expressServerArgs: ExpressServerArgs = {
  controllers: __dirname + "/api/controllers/**/*.ts"
};

const server = new ExpressServer(expressServerArgs);

const app = server.createServer();

createConnection().then(connection => {
  app.listen(3000, () => {
    console.log("Rest server is running at 3000");
  });
});
