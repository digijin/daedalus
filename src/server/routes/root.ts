import { Express } from "express";
export default function rootRoute(app: Express) {
  app.get("/", (req, res) => {
    res.send("Hello World!");
  });
}
