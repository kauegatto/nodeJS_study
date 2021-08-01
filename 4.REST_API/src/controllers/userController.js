import User from '../models/User';

class UserController {
  async createUser(req, res) {
    const userData = req.body;
    if (!userData.typeId) { userData.typeId = 1; }
    // if there's no specified typeId, it's a student (unsafe for now, later we'll get a auth token)
    try {
      await User.create(userData).then((user) => {
        res.status(200);
        res.json(user);
      });
    } catch {
      res.status(404);
      res.send();
    }
  }
}
export default new UserController();
