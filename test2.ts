import axios from "axios";
import Bottleneck from "bottleneck";

const limiter = new Bottleneck({
  maxConcurrent: 2
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
    request(2000 + idx);
  }
}

main();
