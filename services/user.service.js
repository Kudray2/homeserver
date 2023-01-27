import { v4 } from 'uuid';
import { User } from '../models/user.model.js';
import { Token } from '../helpers/generateTokens.js';

class UserService {
  async getAll() {
    const allUsers = await User.find();

    return allUsers;
  }

  async getOne(userId) {
    const user = await User.find({ id: userId });

    return user;
  }

  async create(user) {
    if (!user) throw new Error('no user recieved');
    const newUserID = v4();
    const token = Token.generateAccesstoken({
      username: user.userName,
    });
    const userToAdd = { ...user, id: newUserID };
    const createdUser = await User.create(userToAdd);

    return { user: createdUser, userToken: token };
  }

  async edit(user) {
    if (!user) throw new Error('no user recieved');
    const filter = { id: user.id };
    const editedUser = await User.findOneAndUpdate(filter, user, { new: true });

    return editedUser;
  }

  async remove(userId) {
    if (!userId) throw new Error('no user recieved');
    await User.deleteOne(userId);
  }
}

export default new UserService();
