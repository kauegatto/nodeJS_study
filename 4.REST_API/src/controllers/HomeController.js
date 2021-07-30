import User from '../models/User';

class HomeController {
  async index(req, res) {
    console.log('passou aqui!!');
    res.status(200);
    res.json({
      text: 'oi',
    });
  }

  async createUser(req, res) {
    const newUser = User.create({
      firstName: 'Kauê',
      lastName: 'Gatto',
      email: 'kauegatto123@gmail.com',
      phoneNumber: '13 991093667',
    });
    res.json(newUser);
  }
}
export default new HomeController();
