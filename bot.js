var HTTPS = require('https');
var cool = require('cool-ascii-faces');

var botID = process.env.BOT_ID;

function respond() {
  var request = JSON.parse(this.req.chunks[0]),
      botRegex = /^\/cool guy/; botRegexPOSITION =/^\/pos/i; botRegexFORUM = /^\/forum/; botRegexSTRIKE = /^\/chicken/; botRegexFUCK = /^\/idgaf/; botRegexSHOTS = /^\/shots fired/; botRegexDAMN = /^\/damn/; botRegexMIND = /^\/mind blown/; botRegexSORRY = /^\/sorry/; botRegexOK = /^\/ok/; botRegexLOL = /^\/lol/; botRegexARCHER = /^\/manfred/; botRegexPLAYER = /^\/player stats/; botRegexSTATS = /^\/team stats/; botRegexSTANDINGS = /^\/standings/; botRegexPOWER = /^\/power/; botRegexSTATEMENT = /^\/rules/; botRegexTRADES =/^\/trades/;  botRegexOWNERS = /^\/owner/; botRegexDADDY = /^\/dl/;botRegexSalt = /^\/salt/;botRegexYub = /^\/yubnub/
      botRegexAd=/^\/advance/; 
      botRegexP = /^\/PDL/i;  botRegexTw = /^\/twitch/i; 
  var teamAb = ["YANKEES","NO","ARI","PHI","CLE","TEN","OAK","DAL","IND","SEA","CIN","PIT","JAC"
                ,"BAL","SD","DEN","MIN","ATL","KC","NYG","GB","DET","HOU","STL","CHI","CAR",
                "MIA","BUF","SF","WAS","NYJ","TB"]
  if(request.text && botRegex.test(request.text)) {
    this.res.writeHead(200);
    postMessage(cool());
    this.res.end();
  }
  else if(request.text && botRegexPOSITION.test(request.text)) {
    this.res.writeHead(200);
    var req = request.text.substring(5,request.text.length);
    var rep = req.replace(/ /,"+");
    postMessage("http://daddyleagues.com/sebl/players?name=&position="+rep+"&team=all");
    this.res.end();
  }
  else if(request.text && botRegexFORUM.test(request.text)) {
    this.res.writeHead(200);
    postMessage("http://www.daddyleagues.com/sebl/forum");
    this.res.end();
  }
  else if(request.text && botRegexSTRIKE.test(request.text)) {
    this.res.writeHead(200);
    postMessage("http://media.giphy.com/media/HFReWqu8qU5mU/giphy.gif");
    this.res.end();
  }
  else if(request.text && botRegexFUCK.test(request.text)) {
    this.res.writeHead(200);
    postMessage("http://media.giphy.com/media/sRmCHLizC6dkA/giphy.gif");
    this.res.end();
  }
  else if(request.text && botRegexSHOTS.test(request.text)) {
    this.res.writeHead(200);
    postMessage("http://media.giphy.com/media/13sRJH9ZJmJz5C/giphy.gif");
    this.res.end();
  }
  else if(request.text && botRegexDAMN.test(request.text)) {
    this.res.writeHead(200);
    postMessage("http://media.giphy.com/media/ddd0HBTakik00/giphy.gif");
    this.res.end();
  }
  else if(request.text && botRegexMIND.test(request.text)) {
    this.res.writeHead(200);
    postMessage("http://media.giphy.com/media/FVgxG3xlhzHC8/giphy.gif");
    this.res.end();
  }
  else if(request.text && botRegexSORRY.test(request.text)) {
    this.res.writeHead(200);
    postMessage("http://i251.photobucket.com/albums/gg294/wafpaf/graphics/sorry/sorry6.jpg");
    this.res.end();
  }
  else if(request.text && botRegexOK.test(request.text)) {
    this.res.writeHead(200);
    postMessage("http://i.imgur.com/42G7fd8.jpg");
    this.res.end();
  }
  else if(request.text && botRegexLOL.test(request.text)) {
    this.res.writeHead(200);
    postMessage("http://media.giphy.com/media/oIR6xeOffCEBa/giphy.gif");
    this.res.end();
  }
  else if(request.text && botRegexARCHER.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://docs.google.com/document/d/16a0fcm_rijQS0X60wBM7bjn_gfEddDXAMmepVYZo7jU/edit?usp=sharing");
    this.res.end();
  }
  else if(request.text && botRegexPLAYER.test(request.text)) {
    this.res.writeHead(200);
    postMessage("http://www.daddyleagues.com/sebl/stats/player");
    this.res.end();
  }
  else if(request.text && botRegexSTATS.test(request.text)) {
    this.res.writeHead(200);
    postMessage("http://www.daddyleagues.com/sebl/stats/team");
    this.res.end();
  }
  else if(request.text && botRegexSTANDINGS.test(request.text)) {
    this.res.writeHead(200);
    postMessage("http://www.daddyleagues.com/sebl/standings/league");
    this.res.end();
  }
  else if(request.text && botRegexPOWER.test(request.text)) {
    this.res.writeHead(200);
    postMessage("http://www.daddyleagues.com/sebl/standing/ranking");
    this.res.end();
  } 
  else if(request.text && botRegexSTATEMENT.test(request.text)) {
    this.res.writeHead(200);
    postMessage("www.daddyleagues.com/sebl/rules");
    this.res.end();
  } 
  else if(request.text && botRegexTRADES.test(request.text)) {
    this.res.writeHead(200);
    postMessage("FIX");
    this.res.end();
  } 
  else if(request.text && botRegexOWNERS.test(request.text)) {
    this.res.writeHead(200);
    postMessage("FIX");
    this.res.end();
  } 
  else if(request.text && botRegexDADDY.test(request.text)) {
    this.res.writeHead(200);
    postMessage("http://daddyleagues.com/sebl");
    this.res.end();
  } 
  else if(request.text && botRegexSalt.test(request.text)) {
    this.res.writeHead(200);
    postMessage("http://i.imgur.com/q3ohLtD.gif");
    this.res.end();
  } 
  else if(request.text && botRegexAd.test(request.text)) {
    this.res.writeHead(200);
    postMessage("http://www.kno.com/images/store/knoadvance/overview.png");
    this.res.end();
  }
  else if(request.text && botRegexYub.test(request.text)) {
    this.res.writeHead(200);
    postMessage("http://www.quickmeme.com/img/9f/9f3720469d1ce6c2d20130ed0750935a394df80ffcddec6d16e091d95efea854.jpg");
    this.res.end();
  }
  else if(request.text && botRegexP.test(request.text)) {
    this.res.writeHead(200);
    var req = request.text.substring(5,request.text.length);
    var rep = req.replace(/ /,"+");
    postMessage("http://daddyleagues.com/sebl/players?name="+rep+"&position=all&team=all");
    this.res.end();
  } 

  else if(request.text && botRegexTw.test(request.text)) {
    this.res.writeHead(200);
    postMessage("http://www.twitch.tv/"+request.text.substring(8,request.text.length));
    this.res.end();
  } 
  else {
    console.log("don't care");
    this.res.writeHead(200);
    this.res.end();
  }
}

function postMessage(response) {
  var botResponse,options, body, botReq;

  botResponse = response

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

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}


exports.respond = respond;
