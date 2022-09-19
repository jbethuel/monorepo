import express from 'express';
import { userUtils } from '@monorepo/core';
import type { User } from '@monorepo/core';

const app = express();
const port = 3000;

app.get('/', (_req, res) => {
  const user: User = {
    firstName: 'first',
    lastName: 'last',
  };

  res.send(userUtils.formatName(user));
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
