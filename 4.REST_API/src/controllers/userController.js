import User from '../models/User';

class UserController {
  async createUser(req, res) {
    const userData = req.body;
    if (!userData.typeId) { userData.typeId = 1; }
    // if there's no specified typeId, it's a student (unsafe for now, later we'll get an token )
    try {
      await User.create(userData).then((user) => {
        res.status(200);
        res.json(user);
      });
    } catch (e) {
      let msgArray = [];
      const errorArray = e.errors;
      errorArray.forEach((error) => {
        msgArray.push(error.message);
      });
      res.status(400);
      res.send(msgArray);
    }
  }
}
export default new UserController();
