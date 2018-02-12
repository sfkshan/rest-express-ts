import "reflect-metadata";
import {
  getMetadataStorage,
  ExpressServer,
  ExpressServerArgs
} from "./libs/rest-framework";
import { clearScreenDown } from "readline";

const expressServerArgs: ExpressServerArgs = {
  controllers: __dirname + "/api/controllers/**/*.ts"
};

const server = new ExpressServer(expressServerArgs);

const app = server.createServer();

app.listen(3000, () => {
  console.log("Rest server is running at 3000");
});
