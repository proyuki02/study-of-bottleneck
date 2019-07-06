import axios from "axios";

async function request(sleep: number): Promise<void> {
  const res = await axios({
    method: "get",
    url: `http://localhost:3000/?sleep=${sleep}`
  });
  console.log(res.data);
}

function main() {
  for (let idx = 1; idx <= 20; idx++) {
    request(idx);
  }
}

main();
