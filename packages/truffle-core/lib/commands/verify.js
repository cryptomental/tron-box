var command = {
  command: 'verify',
  description: 'Runs MythX analyses on tronbox contracts.',
  builder: {},
  run: function(options, done) {
    var Security = require("truffle-security");
    var Config = require("truffle-config");

    var config = Config.default().with({
      logger: console
    });

    options.logger = config.logger;
    options.build_directory = ".";

    Security(options)
      .then(function(options) {
        done();
      })
      .catch(done);
  }
}

module.exports = command;
