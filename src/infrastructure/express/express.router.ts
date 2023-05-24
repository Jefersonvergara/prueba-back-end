import express from 'express';

import authentication from '../../router/auth.router';

import users from '../../router/users.router';

const router = express.Router();

export default (): express.Router => {
  authentication(router);
  users(router);

  return router;
};
