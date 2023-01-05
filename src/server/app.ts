import { Express } from "express";
import * as express from "express";
import router from "./router";

export default class Server {
  app: Express;
  constructor() {
    this.app = express();
    router(this.app);
  }
  start = (port: number) => {
    console.log("starting on port", port, "at", new Date().toString());
    this.app.listen(port, () => {
      console.log("it has begun");
    });
  };
}
