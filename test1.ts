import axios from "axios";
import Bottleneck from "bottleneck";

const limiter = new Bottleneck({
  minTime: 200
});

async function request(sleep: number): Promise<void> {
  const res = await limiter.schedule(() =>
    axios({
      method: "get",
      url: `http://localhost:3000/?sleep=${sleep}`
    })
  );
  console.log(res.data);
}

function main() {
  for (let idx = 1; idx <= 20; idx++) {
    request(idx);
  }
}

main();
