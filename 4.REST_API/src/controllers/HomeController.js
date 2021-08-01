class HomeController {
  async index(req, res) {
    console.log('passou aqui!!');
    res.status(200);
    res.json({
      text: 'oi',
    });
  }
}
export default new HomeController();
