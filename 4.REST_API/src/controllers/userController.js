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
        if ((User.isTypeAdmin(req.userTypeId)) || (user.getDataValue('id') === req.userId)) {
          await user.update(req.body).then(
            (updatedUser) => res.send(updatedUser),
          );
          return;
        } // check if logged user is admin or the user that is being updated

        res.status(401).json({ errors: ["You're not authorized to update another user's infomation unless you're an administrator or the user itself"] });
        return;
      }
      res.status(400);
      res.json({ errors: ["user doesn't exist"] });
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
        if (!User.isTypeAdmin(req.userTypeId)) {
          res.status(401).json({ errors: ["You're not authorized to delete another user unless you're an administrator"] });
          return;
        } // check if logged user is admin
        await user.destroy().then(
          (deleted) => res.send(deleted),
        );
      } else {
        res.status(400);
        res.json('this user doesn\'t exist');
        return;
      }
    } catch (e) {
      console.log(e);
      res.status(500).json({ error: ['server error'] });
    }
  }
}
export default new UserController();
