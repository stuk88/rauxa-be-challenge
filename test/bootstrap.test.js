var sails = require('sails');

before(function(done) {

  // Increase the Mocha timeout so that Sails has enough time to lift.
  this.timeout(600000);

  sails.lift({
    // configuration for testing purposes
    port: '1337',
    log: {
      level: 'error'
    },
    hooks: {
      grunt: false
    }
  }, function(err) {
    if (err) return done(err);

    done(null, sails)
  });
});


// After all tests have finished...
after(function(done) {

  // here you can clear fixtures, etc.
  // (e.g. you might want to destroy the records you created above)

  sails.lower(done);

});

// beforeEach(function(done) {
//   // Drops database between each test.  This works because we use
//   // the memory database
//   sails.once('hook:orm:reloaded', done);
//   sails.emit('hook:orm:reload');
// });
