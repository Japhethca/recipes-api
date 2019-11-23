const dotenv = require('dotenv');
const app = require('./app');

dotenv.config();

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
