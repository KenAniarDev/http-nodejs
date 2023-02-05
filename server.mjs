import { createServer } from 'http';
import dayjs from 'dayjs';

createServer((req, res) => {
  res.write(dayjs(new Date()).format("DD/MM/YYYY hh:mm:ss"));
  res.end();
}).listen(process.env.PORT);
