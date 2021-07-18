const ContactService = require('../services/ContactService.js');

module.exports.index = async (req,res) =>
{
    const Contact = new ContactService();
    const contacts = await Contact.findContacts(req.session.user.id);
    console.log(contacts);
    res.render('index',{contacts});
}
