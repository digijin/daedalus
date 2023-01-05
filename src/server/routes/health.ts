import { Express } from "express";
export default function healthRoute(app: Express) {
  app.get("/health", (req, res) => {
    res.send("OK");
  });
}
