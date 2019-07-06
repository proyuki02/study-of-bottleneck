import axios from "axios";
import Bottleneck from "bottleneck";

const limiter = new Bottleneck({
  maxConcurrent: 2,
  highWater: 10
});

async function request(sleep: number): Promise<void> {
  try {
    const res = await limiter.schedule(() =>
      axios({
        method: "get",
        url: `http://localhost:3000/?sleep=${sleep}`
      })
    );
    console.log(res.data);
  } catch (e) {
    console.log(sleep, e.message);
  }
}

function main() {
  for (let idx = 1; idx <= 20; idx++) {
    request(2000 + idx);
  }
}

main();
