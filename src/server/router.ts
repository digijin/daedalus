import { Express } from "express";
import routes from "./routes";

import * as express from "express";

export default function router(app: Express) {
  app.use(express.static("../static"));
  routes.forEach((route) => {
    route(app);
  });
}
