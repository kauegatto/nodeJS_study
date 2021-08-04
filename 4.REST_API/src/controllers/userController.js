import User from '../models/User';

class UserController {
  // find all
  async findAll(req, res) {
    try {
      const users = await User.findAll({
        attributes: ['name', 'email'],
      });
      res.json(users);
    } catch (e) {
      res.send('error');
    }
  }

  // create
  async create(req, res) {
    const userData = req.body;
    if (!userData.typeId) { userData.typeId = 1; }
    // if there's no specified typeId, it's a student (unsafe for now, later we'll get an token )
    try {
      await User.create(userData).then((user) => {
        res.status(200);
        res.json(user);
      });
    } catch (e) {
      // eslint-disable-next-line prefer-const
      let msgArray = [];
      const errorArray = e.errors;
      if (errorArray) { // if it's an error that comes from sequelize validation
        errorArray.forEach((error) => {
          msgArray.push(error.message);
        });
        res.status(400);
        res.send(msgArray);
      } else {
        res.status(400);
        res.json('voce:fdp');
      }
    }
  }

  // find one - read
  async findOne(req, res) {
    try {
      const { id } = req.params;
      console.log(req.params);
      const user = await User.findByPk(id);
      res.json(user);
    } catch (e) {
      res.send('error');
    }
  }

  // update
  async update(req, res) {
    try {
      const { id } = req.params;
      const user = await User.findByPk(id);
      // req body validation;
      if (user) {
        await user.update(req.body).then(
          (updatedUser) => res.send(updatedUser),
        );
      } else {
        res.status(400);
        res.json({ errors: ["user doesn't exist"] });
      }
    } catch (e) {
      res.status(500);
      res.json({ errors: ['Server errror'] });
    }
  }

  // delete
  async delete(req, res) {
    try {
      const { id } = req.params;
      const user = await User.findByPk(id);
      if (user) {
        await user.destroy().then(
          (deleted) => res.send(deleted),
        );
      }
      res.status(400);
      res.json('this user doesn\'t exist');
    } catch (e) {
      res.send('error');
    }
  }
}
export default new UserController();
