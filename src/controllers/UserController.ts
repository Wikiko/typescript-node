/* eslint-disable class-methods-use-this */
import { Request, Response } from 'express';

// eslint-disable-next-line import/no-unresolved
import User from '../schemas/User';

class UserController {
  public async index(req: Request, res: Response): Promise<Response> {
    const users = await User.find();

    users.map(user => user.fullName());

    return res.json(users);
  }
}

export default new UserController();
