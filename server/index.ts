import express from "express";
import cors from "cors";

import withinRangeRouter from "./routes/withinRangeRouter";
const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static(`${__dirname}/public`));

///ROUTES
app.use("/api/v1/within", withinRangeRouter);

app.listen(3002, () => {
  console.log("server is running on port 3002");
});
