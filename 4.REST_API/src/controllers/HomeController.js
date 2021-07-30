import User from '../models/User';
import UserType from '../models/UserType';

class HomeController {
  async index(req, res) {
    console.log('passou aqui!!');
    res.status(200);
    res.json({
      text: 'oi',
    });
  }

  async createUser(req, res) {
    try {
      UserType.create({ typeText: 'student' });
      await User.create({
        firstName: 'Kauê',
        lastName: 'Gatto',
        email: 'kauegatto123@gmail.com',
        phoneNumber: '13 991093667',
        typeId: 1,
      }).then((user) => {
        res.status(200);
        res.json(user);
      });
    } catch {
      res.status(404);
      res.send();
    }
  }
}
export default new HomeController();
