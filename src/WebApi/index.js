const dotenv = require('dotenv');
const { AddExpress } = require('./Modules/Common/ExpressExtensions');

dotenv.config();
const app = AddExpress();
const port = process.env.PORT;

app.get('/', (req, res) => {
  res.send('Express + TypeScript Server');
});

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});