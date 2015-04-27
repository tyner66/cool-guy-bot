var HTTPS = require('https');
var cool = require('cool-ascii-faces');

var botID = process.env.BOT_ID;

function respond() {
  var request = JSON.parse(this.req.chunks[0]),
      botRegex = /^\/cool guy$/; botRegexSDL = /^\/sdl/i; botRegexDL = /^\/dl/; botRegexCOMMAND = /^\/command/; 
}
  if(request.text && botRegex.test(request.text)) {
    this.res.writeHead(200);
    postMessage();
    this.res.end();
}
else if(request.text && botRegexSDL.test(request.text)) {
    this.res.writeHead(200);
    postMessage("http://daddyleagues.com/sebl/team/"+request.text.substring(5,8)+"/schedule");
    this.res.end();
}
else if(request.text && botRegexDL.test(request.text)) {
    this.res.writeHead(200);
    postMessage("www.daddyleagues.com/sebl");
    this.res.end();
}
  else if(request.text && botRegexCOMMAND.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://docs.google.com/document/d/16a0fcm_rijQS0X60wBM7bjn_gfEddDXAMmepVYZo7jU/edit?usp=sharing");
    this.res.end();
  } else {
    console.log("don't care");
    this.res.writeHead(200);
    this.res.end();
  }
}

function postMessage() {
  var botResponse, options, body, botReq;

  botResponse = cool();

  options = {
    hostname: 'api.groupme.com',
    path: '/v3/bots/post',
    method: 'POST'
  };

  body = {
    "bot_id" : botID,
    "text" : botResponse
  };

  console.log('sending ' + botResponse + ' to ' + botID);

  botReq = HTTPS.request(options, function(res) {
      if(res.statusCode == 202) {
        //neat
      } else {
        console.log('rejecting bad status code ' + res.statusCode);
      }
  });

  botReq.on('error', function(err) {
    console.log('error posting message '  + JSON.stringify(err));
  });
  botReq.on('timeout', function(err) {
    console.log('timeout posting message '  + JSON.stringify(err));
  });
  botReq.end(JSON.stringify(body));
}


exports.respond = respond;
