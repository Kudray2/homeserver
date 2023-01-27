import UserService from '../services/user.service.js';

class UserController {
  async getAll(_, res) {
    try {
      const users = await UserService.getAll();

      return res.json(users);
    } catch (error) {
      return res.status(500).json(error);
    }
  }

  async getOne(req, res) {
    try {
      const user = await UserService.getOne(req.params.id);

      return res.json(user);
    } catch (error) {
      return res.status(500).json(error);
    }
  }

  async add(req, res) {
    try {
      const createdUser = await UserService.create(req.body);

      return res.json(createdUser);
    } catch (error) {
      return res.status(500).json(error);
    }
  }

  async edit(req, res) {
    try {
      const editedUser = UserService.edit(req.body);

      return editedUser;
    } catch (error) {
      return res.status(500).json(error);
    }
  }

  async remove(req, res) {
    try {
      await UserService.remove(req.params.id);

      return res.sendStatus(200);
    } catch (error) {
      return res.status(500).json(error);
    }
  }
}

export default new UserController();
