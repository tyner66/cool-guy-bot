var HTTPS = require('https');
var cool = require('cool-ascii-faces');

var botID = process.env.BOT_ID;

function respond() {
  var request = JSON.parse(this.req.chunks[0]),
      botRegex = /^\/cool guy$/; botRegexRULES = /^\/rules/; botRegexOWNER = /^\/owners/; botRegexNEW = /^\/new/; botRegexBLOCK = /^\/block/; botRegexSELL = /^\/sell/;  botRegexCOMPLETED = /^\/completed/; botRegexTRADE = /^\/trade/; botRegexCOMMAND = /^\/command/; 
}
  else if(request.text && botRegexRULES.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://docs.google.com/document/d/1pBCDenl4hQjc5T9ZNX4OYmRhqMhsVLyPzzi-K3gN1Kc/edit?usp=sharing");
    this.res.end();
}
  else if(request.text && botRegexOWNER.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://docs.google.com/spreadsheets/d/1_saEfwCioR93CvRG8-ToDB-WsUyLs3_ehhsGaJpAl24/edit?usp=sharing");
    this.res.end();
}
  else if(request.text && botRegexNEW.test(request.text)) {
    this.res.writeHead(200);
    postMessage("http://goo.gl/forms/CCxuCunKOw");
    this.res.end();
}
  else if(request.text && botRegexBLOCK.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://docs.google.com/spreadsheets/d/1nWUXxMOjGZdfz_fEuL-163t1DQfYQngZBwyxICWD4VU/edit?usp=sharing");
    this.res.end();
}
  else if(request.text && botRegexSELL.test(request.text)) {
    this.res.writeHead(200);
    postMessage("http://goo.gl/forms/WchWg9BklI");
    this.res.end();
}
  else if(request.text && botRegexCOMPLETED.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://docs.google.com/spreadsheets/d/1_saEfwCioR93CvRG8-ToDB-WsUyLs3_ehhsGaJpAl24/edit?usp=sharing");
    this.res.end();
}
  else if(request.text && botRegexTRADE.test(request.text)) {
    this.res.writeHead(200);
    postMessage("http://goo.gl/forms/5Vc4qx41Kx");
    this.res.end();
}
  else if(request.text && botRegexCOMMAND.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://docs.google.com/document/d/16a0fcm_rijQS0X60wBM7bjn_gfEddDXAMmepVYZo7jU/edit?usp=sharing");
    this.res.end();
  }
  if(request.text && botRegex.test(request.text)) {
    this.res.writeHead(200);
    postMessage();
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
