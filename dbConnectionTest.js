/*
if (Meteor.isClient) {
  // counter starts at 0
  Session.setDefault('counter', 0);

  Template.hello.helpers({
    counter: function () {
      return Session.get('counter');
    }
  });

  Template.hello.events({
    'click button': function () {
      // increment the counter when button is clicked
      Session.set('counter', Session.get('counter') + 1);
    }
  });
}
*/

if (Meteor.isServer) {
  Meteor.startup(function () {
      /*
      var mongoConn = new MongoConnection(Meteor.settings.DbConnections['MONGO']);
      mongoConn.open(function(err) {
          if(err)
              console.log('MongoConnection. open fail');
          else
              console.log('MongoConnection.open success');
      });
      var sqlConn = new SequelizeConnection(Meteor.settings.DbConnections['LINK01']);
      sqlConn.open(function(err) {
          if(err)
            console.log('SequelizeConnection.open fail');
          else
          console.log('SequelizeConnection.open success');
       });
*/
  });
}
Router.map(function() {
    this.route('home', {path: '/'} );
});

/*
Router.route('/', { where: 'server' })
    .put(function () {
        // GET /webhooks/stripe
    })
    .post(function () {
        // POST /webhooks/stripe
    })
    .put(function () {
        // PUT /webhooks/stripe
    })
*/

Router.route('/MongoConnection', function () {
       var self = this;
        var mongoConn = new MongoConnection(Meteor.settings.DbConnections['TEX']);
        mongoConn.open(function(err) {
            if (err) {
                console.log('MongoConnection. open fail');
                self.response.end('MongoConnection.open fail');
            }
            else {

                console.log('MongoConnection.open success');
            self.response.end('MongoConnection.open success');
          }
        });


}, {where : 'server'});


Router.route('/SequelizeConnection', function () {
    var sqlConn = new SequelizeConnection(Meteor.settings.DbConnections['LINK01']);
    var self = this;
    sqlConn.open(function(err) {
        if(err) {
            //console.log('SequelizeConnection.open fail');
            self.response.end('SequelizeConnection.open fail');
        }

        else
            //console.log('SequelizeConnection.open success');
            self.response.end('SequelizeConnection.open success');
    });
}, {where : 'server'});


