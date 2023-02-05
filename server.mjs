import { createServer } from "http";
import dayjs from "dayjs";
const PORT = process.env.PORT || "8080";
console.log(PORT);
createServer((req, res) => {
  res.write(dayjs(new Date()).format("DD/MM/YYYY hh:mm:ss"));
  res.end();
}).listen(PORT);
