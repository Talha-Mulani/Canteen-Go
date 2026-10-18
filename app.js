const express = require("express");

const app = express();
const port = Number(process.env.PORT) || 3000;

app.get("/health", (_request, response) => {
  response.json({
    service: "CanteenGo API",
    status: "ok",
    stage: "foundation",
  });
});

app.listen(port, () => {
  console.log(`CanteenGo API listening on port ${port}`);
});
