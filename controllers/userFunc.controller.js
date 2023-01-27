import UserService from '../services/user.service.js';

export function userController() {
  return {
    getAll: async function (_, res) {
      try {
        const users = UserService.getAll();

        return res.json(users);
      } catch (error) {
        return res.status(500).json(error);
      }
    },
    getOne: async function (req, res) {
      try {
        const user = await UserService.getOne(req.params.id);

        return res.json(user);
      } catch (error) {
        return res.status(500).json(error);
      }
    },
    add: async function (req, res) {
      try {
        const createdUser = await UserService.create(req.body);

        return res.json(createdUser);
      } catch (error) {
        return res.status(500).json(error);
      }
    },
    edit: async function (req, res) {
      try {
        const editedUser = UserService.edit(req.body);

        return editedUser;
      } catch (error) {
        return res.status(500).json(error);
      }
    },
    remove: async function (req, res) {
      try {
        await UserService.remove(req.params.id);

        return res.sendStatus(200);
      } catch (error) {
        return res.status(500).json(error);
      }
    },
  };
}
