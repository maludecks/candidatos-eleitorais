import * as express from 'express';
import { getAll } from './src/index';

const app = express();
const PORT = process.env.PORT || 3000;

app.get('/candidato', async (req, res) => {
  const response = await getAll(req);
  res
    .header('Content-Type', 'application/json')
    .status(response.statusCode)
    .send(response.body);
});

app.listen(PORT, () => console.log(`Server listening on port: ${PORT}`));
