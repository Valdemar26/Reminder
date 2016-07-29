const client = require('twilio')('AC951de222c8288f13fbe6e3364bc1314d', '4371d13d444bc10ca1dd8913a8b51fef');


class Task {
  constructor(taskText, time) {
    this.time = time,
    this.text = taskText
  }
  initialize() {
    setTimeout(() => {
      client.sendMessage({
          to:'+380974459972',
          from: '+12404282360',
          body: 'test message'
      }, function(err, responseData) { //this function is executed when a response is received from Twilio

    if (!err) {
        console.log(responseData.from); // outputs "+14506667788"0
        console.log(responseData.body); // outputs "word to your mother."

    } else {
      console.log(err)
    }
});
    }, this.time)
  }
}

const set = (taskText, taskTime) => {
  return new Task(taskText, taskTime).initialize();
}

module.exports = {
  set: set
}
