var supertest = require('supertest');


describe('ContactsController', function() {

  describe('/contacts/create', function() {
    it('should reject email not valid', function () {
      supertest(sails.hooks.http.app)
        .post('/contacts/create')
        .send({ name: 'test', email: 'test' })
        .expect(400);
    });

    it('should reject name empty', function () {
      return supertest(sails.hooks.http.app)
        .post('/contacts/create')
        .send({ email: 'test', phone: '+64512541454' })
        .expect(400);
    });

    it('should succeed if all form is ok', function () {
      return supertest(sails.hooks.http.app)
        .post('/contacts/create')
        .send({ name: 'test', phone: '+9897532425', email: 'test@test.com' })
        .expect(200);
    });
  });

  describe('/contacts/', function () {
    it('Should load without problems', function () {
      return supertest(sails.hooks.http.app)
        .get('/contacts/')
        .expect(200);
    })
  })

  describe('/contacts/new', function () {
    it('Should load without problems', function () {
      return supertest(sails.hooks.http.app)
        .get('/contacts/new')
        .expect(200);
    })
  })

  describe('/contacts/:id', function () {
    it('Should load without problems', async function () {
      var contacts = await Contacts.find().limit(1);
      var contact = contacts[0];
      return supertest(sails.hooks.http.app)
        .get('/contacts/'+contact.id)
        .expect(200);
    })
  })
});
