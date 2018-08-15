/**
 * ContactsController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {

	getAll: function(req, res) {
		Contacts.find({}).then((contacts) => res.ok(contacts)).catch(res.notFound);
	},

  listContacts: async function (req, res) {
    var contacts = await Contacts.find({}).sort("id DESC");

    res.view('pages/contacts-list', {baseUrl: sails.config.custom.baseUrl, contacts});
  },

  addContact: function (req, res) {
    res.view('pages/add-contact');
  },

	create: function(req, res) {
		Contacts.create({
			name: req.body.name,
			photo: req.body.photo,
			email: req.body.email,
			phone: req.body.phone,
		}).then(res.ok).catch((e) => {
		  res.status(400).json({error: true, error: e.message});
    });
	},

	getFullDetail: function(req, res) {
		Contacts.findOne({id:  req.param('id')}).then((contact) => res.view('pages/contact-details', {contact})).catch(res.notFound);
	}
};
