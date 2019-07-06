import * as moment from "moment";
import * as express from "express";
const app = express();
const sleep = msec => new Promise(resolve => setTimeout(resolve, msec));

app.get("/", async (req, res) => {
  console.log(moment().format("HH:mm:ss.SSS") + " Start " + req.query.sleep);
  await sleep(req.query.sleep);
  console.log(moment().format("HH:mm:ss.SSS") + " End   " + req.query.sleep);
  return res.send(req.query.sleep);
});

app.listen(3000, () => console.log("Example app listening on port 3000"));
