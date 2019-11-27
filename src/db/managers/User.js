// eslint-disable-next-line max-classes-per-file
import models from '../models';

export default class UserManager {
  constructor() {
    this.model = models.user;
  }

  async getUserByEmail(email) {
    const user = await this.model.findOne({
      where: {
        email,
      },
    });
    return user;
  }

  async createUser(user) {
    const newUser = await this.model.create({
      ...user,
    });
    return newUser;
  }

  async getUserById(id) {
    const user = await this.model.findByPk(id);
    return user;
  }
}
