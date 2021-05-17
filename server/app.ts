import express from "express";

const app = express();
const PORT = process.env.PORT || 8081;

app.get("/", (req, res) => {
  res.send("Hello world edit");
});

app.listen(PORT, () => {
  console.log(
    `express server running in ${process.env.NODE_ENV} at http://localhost:${PORT}`
  );
});
