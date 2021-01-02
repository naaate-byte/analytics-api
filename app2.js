const express = require('express');
let app = express();
const cors = require('cors');
app.use(cors());
app.options('*', cors());
var path = require('path')
var fs = require('fs')
let fetch = require('node-fetch');
let ejs = require('ejs');
app.set('view engine', 'ejs');
var prot = require('./conf.json');
var userslist = require('./users.json');

var userids = []

app.get("/youtube/estimated/user/:channelid", (req, resp) => {

  fetch('https://mixerno.space/api/youtube/estimated/user/'+req.params.channelid).then(res => res.text()).then(data => {
    resp.send(data)
  }).catch(err => {
    resp.json({
      error: err
    })
  })




});
console.log(fs.readdirSync(`roblox`))
app.get('/:platform/:id', (reqq, ress) => {
  var p = reqq.params.platform
  var c = reqq.params.id
  var g = []
  if (p == "roblox") {
      if (isNaN(c) == true) return ress.status(400).send("ID please.")
      var files = fs.readdirSync(`${p}`);

      var files = fs.readdirSync(`${p}`);
      for (var i = 0; i < files.length; i++) {
          if (files[i].split('.json')[0] == c) {
              var history = fs.readFileSync(`${p}/${c}.json`, 'utf8')
              ress.send(history)
              return;
          }
      }
      fs.writeFileSync(`${p}/${c}.json`, JSON.stringify(g), function (err) {
          if (err) {
              console.log(err)
          };
      })
      return ress.send('added');
  }
  if (p == "youtubeuser") {
      if (c.startsWith("UC") == false) return ress.status(400).send("Channel ID.")
      var files = fs.readdirSync(`${p}`);
      for (var i = 0; i < files.length; i++) {
          if (files[i].split('.json')[0] == c) {
              var history = fs.readFileSync(`${p}/${c}.json`, 'utf8')
              ress.send(history)
              return;
          }
      }
      fs.writeFileSync(`${p}/${c}.json`, JSON.stringify(g), function (err) {
          if (err) {
              console.log(err)
          };
      })/*
      youtubeuser.push(c)*/
      return ress.send('added');
  }
  if (p == "youtubevideoview") {
      var files = fs.readdirSync(`${p}`);
      for (var i = 0; i < files.length; i++) {
          if (files[i].split('.json')[0] == c) {
              var history = fs.readFileSync(`${p}/${c}.json`, 'utf8')
              ress.send(history)
              return;
          }
      }
      fs.writeFileSync(`youtubevideoview/${c}.json`, JSON.stringify(g), function (err) {
          if (err) {
              console.log(err)
          };
      })
      fs.writeFileSync(`youtubevideolike/${c}.json`, JSON.stringify(g), function (err) {
          if (err) {
              console.log(err)
          };
      })
      fs.writeFileSync(`youtubevideodislike/${c}.json`, JSON.stringify(g), function (err) {
          if (err) {
              console.log(err)
          };
      })
      fs.writeFileSync(`youtubevideocomment/${c}.json`, JSON.stringify(g), function (err) {
          if (err) {
              console.log(err)
          };
      })
      return ress.send('added');
  }
  if (p == "youtubevideolike") {
      var files = fs.readdirSync(`${p}`);
      for (var i = 0; i < files.length; i++) {
          if (files[i].split('.json')[0] == c) {
              var history = fs.readFileSync(`${p}/${c}.json`, 'utf8')
              ress.send(history)
              return;
          }
      }
      fs.writeFileSync(`youtubevideoview/${c}.json`, JSON.stringify(g), function (err) {
          if (err) {
              console.log(err)
          };
      })
      fs.writeFileSync(`youtubevideolike/${c}.json`, JSON.stringify(g), function (err) {
          if (err) {
              console.log(err)
          };
      })
      fs.writeFileSync(`youtubevideodislike/${c}.json`, JSON.stringify(g), function (err) {
          if (err) {
              console.log(err)
          };
      })
      fs.writeFileSync(`youtubevideocomment/${c}.json`, JSON.stringify(g), function (err) {
          if (err) {
              console.log(err)
          };
      })
      return ress.send('added');
  }
  if (p == "youtubevideodislike") {
      var files = fs.readdirSync(`${p}`);
      for (var i = 0; i < files.length; i++) {
          if (files[i].split('.json')[0] == c) {
              var history = fs.readFileSync(`${p}/${c}.json`, 'utf8')
              ress.send(history)
              return;
          }
      }
      fs.writeFileSync(`youtubevideoview/${c}.json`, JSON.stringify(g), function (err) {
          if (err) {
              console.log(err)
          };
      })
      fs.writeFileSync(`youtubevideolike/${c}.json`, JSON.stringify(g), function (err) {
          if (err) {
              console.log(err)
          };
      })
      fs.writeFileSync(`youtubevideodislike/${c}.json`, JSON.stringify(g), function (err) {
          if (err) {
              console.log(err)
          };
      })
      fs.writeFileSync(`youtubevideocomment/${c}.json`, JSON.stringify(g), function (err) {
          if (err) {
              console.log(err)
          };
      })
      return ress.send('added');
  }
  if (p == "youtubevideocomment") {
      var files = fs.readdirSync(`${p}`);
      for (var i = 0; i < files.length; i++) {
          if (files[i].split('.json')[0] == c) {
              var history = fs.readFileSync(`${p}/${c}.json`, 'utf8')
              ress.send(history)
              return;
          }
      }
      fs.writeFileSync(`youtubevideoview/${c}.json`, JSON.stringify(g), function (err) {
          if (err) {
              console.log(err)
          };
      })
      fs.writeFileSync(`youtubevideolike/${c}.json`, JSON.stringify(g), function (err) {
          if (err) {
              console.log(err)
          };
      })
      fs.writeFileSync(`youtubevideodislike/${c}.json`, JSON.stringify(g), function (err) {
          if (err) {
              console.log(err)
          };
      })
      fs.writeFileSync(`youtubevideocomment/${c}.json`, JSON.stringify(g), function (err) {
          if (err) {
              console.log(err)
          };
      })
      return ress.send('added');
  }
  if (p == "wikipedia") {
      if (c != "wikipedia") return ress.status(400).send("No. Im not dumb.")
      var files = fs.readdirSync(`${p}`);
      for (var i = 0; i < files.length; i++) {
          if (files[i].split('.json')[0] == c) {
              var history = fs.readFileSync(`${p}/${c}.json`, 'utf8')
              ress.send(history)
              return;
          }
      }
      fs.writeFileSync(`${p}/${c}.json`, JSON.stringify(g), function (err) {
          if (err) {
              console.log(err)
          };
      })
      return ress.send('added');
  }
  if (p == "ecosia") {
      if (c != "ecosia") return ress.status(400).send("No. Im not dumb.")
      var files = fs.readdirSync(`${p}`);
      for (var i = 0; i < files.length; i++) {
          if (files[i].split('.json')[0] == c) {
              var history = fs.readFileSync(`${p}/${c}.json`, 'utf8')
              ress.send(history)
              return;
          }
      }
      fs.writeFileSync(`${p}/${c}.json`, JSON.stringify(g), function (err) {
          if (err) {
              console.log(err)
          };
      })
      return ress.send('added');
  }
  if (p == "vkgroup") {
      var files = fs.readdirSync(`${p}`);
      for (var i = 0; i < files.length; i++) {
          if (files[i].split('.json')[0] == c) {
              var history = fs.readFileSync(`${p}/${c}.json`, 'utf8')
              ress.send(history)
              return;
          }
      }
      fs.writeFileSync(`${p}/${c}.json`, JSON.stringify(g), function (err) {
          if (err) {
              console.log(err)
          };
      })
      return ress.send('added');
  }
  if (p == "twitteruser") {
      var files = fs.readdirSync(`${p}`);
      for (var i = 0; i < files.length; i++) {
          if (files[i].split('.json')[0] == c) {
              var history = fs.readFileSync(`${p}/${c}.json`, 'utf8')
              ress.send(history)
              return;
          }
      }
      fs.writeFileSync(`${p}/${c}.json`, JSON.stringify(g), function (err) {
          if (err) {
              console.log(err)
          };
      })/*
      twitteruser.push(c)*/
      return ress.send('added');
  }
  if (p == "twittertweet") {
      var files = fs.readdirSync(`${p}`);
      for (var i = 0; i < files.length; i++) {
          if (files[i].split('.json')[0] == c) {
              var history = fs.readFileSync(`${p}/${c}.json`, 'utf8')
              ress.send(history)
              return;
          }
      }
      fs.writeFileSync(`${p}/${c}.json`, JSON.stringify(g), function (err) {
          if (err) {
              console.log(err)
          };
      })/*
      twittertweet.push(c)*/
      return ress.send('added');
  }
  if (p == "twitchuser") {
      var files = fs.readdirSync(`${p}`);
      for (var i = 0; i < files.length; i++) {
          if (files[i].split('.json')[0] == c) {
              var history = fs.readFileSync(`${p}/${c}.json`, 'utf8')
              ress.send(history)
              return;
          }
      }
      fs.writeFileSync(`${p}/${c}.json`, JSON.stringify(g), function (err) {
          if (err) {
              console.log(err)
          };
      })/*
      twitchuser.push(c)*/
      return ress.send('added');
  }
  if (p == "trilleruser") {
      var files = fs.readdirSync(`${p}`);
      for (var i = 0; i < files.length; i++) {
          if (files[i].split('.json')[0] == c) {
              var history = fs.readFileSync(`${p}/${c}.json`, 'utf8')
              ress.send(history)
              return;
          }
      }
      fs.writeFileSync(`${p}/${c}.json`, JSON.stringify(g), function (err) {
          if (err) {
              console.log(err)
          };
      })/*
      trilleruser.push(c)*/
      return ress.send('added');
  }
  if (p == "storyfirevideo") {
      var files = fs.readdirSync(`${p}`);
      for (var i = 0; i < files.length; i++) {
          if (files[i].split('.json')[0] == c) {
              var history = fs.readFileSync(`${p}/${c}.json`, 'utf8')
              ress.send(history)
              return;
          }
      }
      fs.writeFileSync(`${p}/${c}.json`, JSON.stringify(g), function (err) {
          if (err) {
              console.log(err)
          };
      })/*
      storyfirevideo.push(c)*/
      return ress.send('added');
  }
  if (p == "storyfireuser") {
      var files = fs.readdirSync(`${p}`);
      for (var i = 0; i < files.length; i++) {
          if (files[i].split('.json')[0] == c) {
              var history = fs.readFileSync(`${p}/${c}.json`, 'utf8')
              ress.send(history)
              return;
          }
      }
      fs.writeFileSync(`${p}/${c}.json`, JSON.stringify(g), function (err) {
          if (err) {
              console.log(err)
          };
      })/*
      storyfireuser.push(c)*/
      return ress.send('added');
  }
  if (p == "spotify") {
      var files = fs.readdirSync(`${p}`);
      for (var i = 0; i < files.length; i++) {
          if (files[i].split('.json')[0] == c) {
              var history = fs.readFileSync(`${p}/${c}.json`, 'utf8')
              ress.send(history)
              return;
          }
      }
      fs.writeFileSync(`${p}/${c}.json`, JSON.stringify(g), function (err) {
          if (err) {
              console.log(err)
          };
      })/*
      spotify.push(c)*/
      return ress.send('added');
  }
  if (p == "robloxgroup") {
      var files = fs.readdirSync(`${p}`);
      for (var i = 0; i < files.length; i++) {
          if (files[i].split('.json')[0] == c) {
              var history = fs.readFileSync(`${p}/${c}.json`, 'utf8')
              ress.send(history)
              return;
          }
      }
      fs.writeFileSync(`${p}/${c}.json`, JSON.stringify(g), function (err) {
          if (err) {
              console.log(err)
          };
      })/*
      robloxgroup.push(c)*/
      return ress.send('added');
  }
  if (p == "robloxgame") {
      var files = fs.readdirSync(`${p}`);
      for (var i = 0; i < files.length; i++) {
          if (files[i].split('.json')[0] == c) {
              var history = fs.readFileSync(`${p}/${c}.json`, 'utf8')
              ress.send(history)
              return;
          }
      }
      fs.writeFileSync(`${p}/${c}.json`, JSON.stringify(g), function (err) {
          if (err) {
              console.log(err)
          };
      })/*
      robloxgame.push(c)*/
      return ress.send('added');
  }
  if (p == "redditsubreddit") {
      var files = fs.readdirSync(`${p}`);
      for (var i = 0; i < files.length; i++) {
          if (files[i].split('.json')[0] == c) {
              var history = fs.readFileSync(`${p}/${c}.json`, 'utf8')
              ress.send(history)
              return;
          }
      }
      fs.writeFileSync(`${p}/${c}.json`, JSON.stringify(g), function (err) {
          if (err) {
              console.log(err)
          };
      })/*
      redditsubreddit.push(c)*/
      return ress.send('added');
  }
  if (p == "globalclicker1") {
      if (c != "globalclicker1") return ress.status(400).send("No. Im not dumb.")
      var files = fs.readdirSync(`${p}`);
      for (var i = 0; i < files.length; i++) {
          if (files[i].split('.json')[0] == c) {
              var history = fs.readFileSync(`${p}/${c}.json`, 'utf8')
              ress.send(history)
              return;
          }
      }
      fs.writeFileSync(`${p}/${c}.json`, JSON.stringify(g), function (err) {
          if (err) {
              console.log(err)
          };
      })/*
      globalclicker1.push(c)*/
      return ress.send('added');
  }
  if (p == "geometrydashuser") {
      var files = fs.readdirSync(`${p}`);
      for (var i = 0; i < files.length; i++) {
          if (files[i].split('.json')[0] == c) {
              var history = fs.readFileSync(`${p}/${c}.json`, 'utf8')
              ress.send(history)
              return;
          }
      }
      fs.writeFileSync(`${p}/${c}.json`, JSON.stringify(g), function (err) {
          if (err) {
              console.log(err)
          };
      })/*
      geometrydashuser.push(c)*/
      return ress.send('added');
  }
  if (p == "discordserver") {
      var files = fs.readdirSync(`${p}`);
      for (var i = 0; i < files.length; i++) {
          if (files[i].split('.json')[0] == c) {
              var history = fs.readFileSync(`${p}/${c}.json`, 'utf8')
              ress.send(history)
              return;
          }
      }
      fs.writeFileSync(`${p}/${c}.json`, JSON.stringify(g), function (err) {
          if (err) {
              console.log(err)
          };
      })/*
      discordserver.push(c)*/
      return ress.send('added');
  }
  if (p == "discordmessage") {
      var files = fs.readdirSync(`${p}`);
      for (var i = 0; i < files.length; i++) {
          if (files[i].split('.json')[0] == c) {
              var history = fs.readFileSync(`${p}/${c}.json`, 'utf8')
              ress.send(history)
              return;
          }
      }
      fs.writeFileSync(`${p}/${c}.json`, JSON.stringify(g), function (err) {
          if (err) {
              console.log(err)
          };
      })/*
      discordmessage.push(c)*/
      return ress.send('added');
  }
  if (p == "deviantart") {
      var files = fs.readdirSync(`${p}`);
      for (var i = 0; i < files.length; i++) {
          if (files[i].split('.json')[0] == c) {
              var history = fs.readFileSync(`${p}/${c}.json`, 'utf8')
              ress.send(history)
              return;
          }
      }
      fs.writeFileSync(`${p}/${c}.json`, JSON.stringify(g), function (err) {
          if (err) {
              console.log(err)
          };
      })/*
      deviantart.push(c)*/
      return ress.send('added');
  }
  if (p == "dailymotionuser") {
      var files = fs.readdirSync(`${p}`);
      for (var i = 0; i < files.length; i++) {
          if (files[i].split('.json')[0] == c) {
              var history = fs.readFileSync(`${p}/${c}.json`, 'utf8')
              ress.send(history)
              return;
          }
      }
      fs.writeFileSync(`${p}/${c}.json`, JSON.stringify(g), function (err) {
          if (err) {
              console.log(err)
          };
      })/*
      dailymotionuser.push(c)*/
      return ress.send('added');
  }
  if (p == "tiktok") {
      var files = fs.readdirSync(`${p}`);
      for (var i = 0; i < files.length; i++) {
          if (files[i].split('.json')[0] == c) {
              var history = fs.readFileSync(`${p}/${c}.json`, 'utf8')
              ress.send(history)
              return;
          }
      }
      fs.writeFileSync(`${p}/${c}.json`, JSON.stringify(g), function (err) {
          if (err) {
              console.log(err)
          };
      })/*
      tiktok.push(c)*/
      return ress.send('added');
  }
  if (p == "coronavirusworld") {
      if (c != "coronavirusworld") return ress.status(400).send("No. Im not dumb.")
      var files = fs.readdirSync(`${p}`);
      for (var i = 0; i < files.length; i++) {
          if (files[i].split('.json')[0] == c) {
              var history = fs.readFileSync(`${p}/${c}.json`, 'utf8')
              ress.send(history)
              return;
          }
      }
      fs.writeFileSync(`${p}/${c}.json`, JSON.stringify(g), function (err) {
          if (err) {
              console.log(err)
          };
      })/*
      coronavirusworld.push(c)*/
      return ress.send('added');
  }
  if (p == "coronaviruscountry") {
      var files = fs.readdirSync(`${p}`);
      for (var i = 0; i < files.length; i++) {
          if (files[i].split('.json')[0] == c) {
              var history = fs.readFileSync(`${p}/${c}.json`, 'utf8')
              ress.send(history)
              return;
          }
      }
      fs.writeFileSync(`${p}/${c}.json`, JSON.stringify(g), function (err) {
          if (err) {
              console.log(err)
          };
      })/*
      coronaviruscountry.push(c)*/
      return ress.send('added');
  }
})


setInterval(function () {
  if (userids.length == 0) return;
  var g = JSON.stringify(userslist)
  fs.writeFileSync(`users.json`, g, function (err) {
    if (err) {
      console.log(err)
    };
  })
  var i = 0;
  lolxd()
  function lolxd() {
    if (i < userids.length) {
      f(i, userids[i].platform, userids[i].cid);
      i++
      lolxd()
    } else {
      console.log("nice")
      userids = []
      console.log(userids)
    }
  }
  function f(cont, platform, cid) {
    var s = JSON.stringify([])
    userslist[`${platform}`].push(cid)
    if(platform == "youtubevideo") {
      fs.writeFileSync(`${platform}view/${cid}.json`, s, function (err) {
        if (err) {
          console.log(err)
        };
      })
      fs.writeFileSync(`${platform}like/${cid}.json`, s, function (err) {
        if (err) {
          console.log(err)
        };
      })
      fs.writeFileSync(`${platform}dislike/${cid}.json`, s, function (err) {
        if (err) {
          console.log(err)
        };
      })
      fs.writeFileSync(`${platform}comment/${cid}.json`, s, function (err) {
        if (err) {
          console.log(err)
        };
      })
    } else {
      fs.writeFileSync(`${platform}/${cid}.json`, s, function (err) {
        if (err) {
          console.log(err)
        };
      })
    }

  }
}, 2000);
var apiurls = {
  roblox: 'https://mixerno.space/api/roblox/user/',
  youtubeuser: 'https://mixerno.space/api/youtube/estimated/user/',
  youtubevideo: 'https://mixerno.space/api/yt/video/',
  youtubecomment: 'https://mixerno.space/api/yt/video/',
  wikipedia: 'https://mixerno.space/api/wikipedia/',
  vkgroup: 'https://mixerno.space/api/vk/group/',
  twitteruser: 'https://mixerno.space/api/twitter/user/',
  twittertweet: 'https://mixerno.space/api/twitter/tweet/',
  twitchuser: 'https://mixerno.space/api/twitch/user/',
  trilleruser: 'https://mixerno.space/api/triller/user/',
  storyfirevideo: 'https://storyfire.com/app/videoDetail/',
  storyfireuser: 'https://mixerno.space/api/storyfire/user/',
  spotify: 'https://mixerno.space/api/spotify/',
  robloxgroup: 'https://cors.mixerno.space/https://groups.roblox.com/v1/groups/',
  robloxgame: 'https://mixerno.space/api/roblox/gamestats/',
  redditsubreddit: 'https://api.reddit.com/r/',
  globalclicker1: 'https://cors.mixerno.space/http://global-clicker.mrcode.io/getpoints',
  geometrydashuser: 'https://gdbrowser.com/api/profile/',
  ecosia: 'https://cors.mixerno.space/https://api.ecosia.org/v1/trees/count',
  discordserver: 'https://discord.com/api/v6/invites/',
  discordmessage: 'https://mixerno.space/api/dc/message/',
  deviantart: 'https://cors.mixerno.space/https://www.deviantart.com/_napi/da-user-profile/api/init/about?username=',
  dailymotionuser: 'https://mixerno.space/api/dailymotion/user/',
  coronavirusworld: 'https://mixerno.space/api/vk/coronavirus',
  coronaviruscountry: 'https://mixerno.space/api/coronavirus/country/',
  tiktok: 'https://mixerno.space/api2_priv/tiktok_api/'
}
var tried = false
console.log(((new Date()).getHours()))
var Da = Date.now()
var checkdate = 15
setInterval(function () {
  if (tried == false && ((new Date()).getHours()) == checkdate) {
    Da = Date.now()
    //roblox
    var roblox = fs.readdirSync(`roblox`);
    var youtubeuser = fs.readdirSync(`youtubeuser`);
    var youtubevideo = fs.readdirSync(`youtubevideoview`);
    var wikipedia = fs.readdirSync(`wikipedia`);
    var twitteruser = fs.readdirSync(`twitteruser`);
    var twittertweet = fs.readdirSync(`twittertweet`);
    var redditsubreddit = fs.readdirSync(`redditsubreddit`);
    var geometrydashuser = fs.readdirSync(`geometrydashuser`);
    var trilleruser = fs.readdirSync(`trilleruser`);
    var twitchuser = fs.readdirSync(`twitchuser`);
    var robloxgame = fs.readdirSync(`robloxgame`);
    var robloxgroup = fs.readdirSync(`robloxgroup`);
    var storyfireuser = fs.readdirSync(`storyfireuser`);
    var storyfirevideo = fs.readdirSync(`storyfirevideo`);
    var ecosia = fs.readdirSync(`ecosia`);
    var discordserver = fs.readdirSync(`discordserver`);
    var discordmessage = fs.readdirSync(`discordmessage`);
    var dailymotionuser = fs.readdirSync(`dailymotionuser`);
    var vkgroup = fs.readdirSync(`vkgroup`);
    var coronavirusworld = fs.readdirSync(`coronavirusworld`);
    var coronaviruscountry = fs.readdirSync(`coronaviruscountry`);
    var globalclicker1 = fs.readdirSync(`globalclicker1`);
    var deviantart = fs.readdirSync(`deviantart`);
    var spotify = fs.readdirSync(`spotify`);
    var tiktok = fs.readdirSync(`tiktok`);
    for (var i = 0; i < roblox.length; i++) {
      get('roblox', roblox[i]);
    }
    //youtubeuser
    for (var i = 0; i < youtubeuser.length; i++) {
      get('youtubeuser', youtubeuser[i]);
    }
    //youtubevideo
    for (var i = 0; i < youtubevideo.length; i++) {
      get('youtubevideo', youtubevideo[i]);
    }
    //youtubevideo
    get('wikipedia', 'wikipedia');
    //youtubevideo
    for (var i = 0; i < twitteruser.length; i++) {
      get('twitteruser', twitteruser[i]);
    }
    //youtubevideo
    for (var i = 0; i < twittertweet.length; i++) {
      get('twittertweet', twittertweet[i]);
    }
    //youtubevideo
    for (var i = 0; i < redditsubreddit.length; i++) {
      get('redditsubreddit', redditsubreddit[i]);
    }
    //youtubevideo
    for (var i = 0; i < geometrydashuser.length; i++) {
      get('geometrydashuser', geometrydashuser[i]);
    }
    //youtubevideo
    for (var i = 0; i < trilleruser.length; i++) {
      get('trilleruser', trilleruser[i]);
    }
    //youtubevideo
    for (var i = 0; i < twitchuser.length; i++) {
      get('twitchuser', twitchuser[i]);
    }
    //youtubevideo
    for (var i = 0; i < robloxgame.length; i++) {
      get('robloxgame', robloxgame[i]);
    }
    //youtubevideo
    for (var i = 0; i < robloxgroup.length; i++) {
      get('robloxgroup', robloxgroup[i]);
    }
    //youtubevideo
    for (var i = 0; i < storyfireuser.length; i++) {
      get('storyfireuser', storyfireuser[i]);
    }
    //youtubevideo
    for (var i = 0; i < storyfirevideo.length; i++) {
      get('storyfirevideo', storyfirevideo[i]);
    }
    //youtubevideo
    get('ecosia', 'ecosia');
    //youtubevideo
    for (var i = 0; i < discordserver.length; i++) {
      get('discordserver', discordserver[i]);
    }
    //youtubevideo
    for (var i = 0; i < discordmessage.length; i++) {
      get('discordmessage', discordmessage[i]);
    }
    //youtubevideo
    for (var i = 0; i < dailymotionuser.length; i++) {
      get('dailymotionuser', dailymotionuser[i]);
    }
    //youtubevideo
    for (var i = 0; i < vkgroup.length; i++) {
      get('vkgroup', vkgroup[i]);
    }
    //youtubevideo
    get('coronavirusworld', 'coronavirusworld');
    //youtubevideo
    for (var i = 0; i < coronaviruscountry.length; i++) {
      get('coronaviruscountry', coronaviruscountry[i]);
    }
    //youtubevideo
    get('globalclicker1', 'globalclicker1');
    //youtubevideo
    for (var i = 0; i < deviantart.length; i++) {
      get('deviantart', deviantart[i]);
    }
    //youtubevideo
    for (var i = 0; i < spotify.length; i++) {
      get('spotify', spotify[i]);
    }
    //youtubevideo
    for (var i = 0; i < tiktok.length; i++) {
      get('tiktok', tiktok[i]);
    }
    tried = true
  } else {
    if (((new Date()).getHours()) == checkdate) { } else {
      tried = false
    }
  }
}, 2000);
var dev = false
async function get(platform, cidr) {
  try {

  
  console.log(cidr, platform)
  var cid = cidr.split('.json')[0]
  if (dev == true) return
  if (platform == 'roblox') {
    var c = await JSON.parse(fs.readFileSync(`${platform}/${cid}.json`, 'utf8'));
    fetch(apiurls[`${platform}`] + cid, {
      headers: {
        'origin': 'https://mixerno.space'
      }
    }).then(res => res.json()).then(data => {
      if (!data.followers) return;
      if (!data.followers) return;
      c.push([Da, parseFloat(data.followers)])
      if (c.length >= 365) {
        c.shift();
      }
      var f = JSON.stringify(c)
      fs.writeFileSync(`${platform}/${cid}.json`, f, function (err) {
        if (err) {
          console.log(err)
        };
      })
    })
  }
  if (platform == 'youtubeuser') {
    var c = await JSON.parse(fs.readFileSync(`${platform}/${cid}.json`, 'utf8'));
    fetch(apiurls[`${platform}`] + cid, {
      headers: {
        'origin': 'https://mixerno.space'
      }
    }).then(res => res.json()).then(data => {
      if (!data.subsapi) return;
      if (!data.subsapi) return;
      c.push([Da, parseFloat(data.subsapi)])
      if (c.length >= 365) {
        c.shift();
      }
      var f = JSON.stringify(c)
      fs.writeFileSync(`${platform}/${cid}.json`, f, function (err) {
        if (err) {
          console.log(err)
        };
      })
    })
  }
  if (platform == 'redditsubreddit') {
    var c = await JSON.parse(fs.readFileSync(`${platform}/${cid}.json`, 'utf8'));
    fetch(apiurls[`${platform}`] + cid + '/about', {
      headers: {
        'origin': 'https://mixerno.space'
      }
    }).then(res => res.json()).then(data => {
      if (!data.data) return;
      if (!data.data.subscribers) return;
      c.push([Da, parseFloat(data.data.subscribers)])
      if (c.length >= 365) {
        c.shift();
      }
      var f = JSON.stringify(c)
      fs.writeFileSync(`${platform}/${cid}.json`, f, function (err) {
        if (err) {
          console.log(err)
        };
      })
    })
  }
  if (platform == 'discordserver') {
    var c = await JSON.parse(fs.readFileSync(`${platform}/${cid}.json`, 'utf8'));
    fetch(apiurls[`${platform}`] + cid + '?with_counts=true', {
      headers: {
        'origin': 'https://mixerno.space'
      }
    }).then(res => res.json()).then(data => {
      if (!data.approximate_member_count) return;
      if (!data.approximate_member_count) return;
      c.push([Da, parseFloat(data.approximate_member_count)])
      if (c.length >= 365) {
        c.shift();
      }
      var f = JSON.stringify(c)
      fs.writeFileSync(`${platform}/${cid}.json`, f, function (err) {
        if (err) {
          console.log(err)
        };
      })
    })
  }
  if (platform == 'youtubevideo') {
    var c = await JSON.parse(fs.readFileSync(`${platform}view/${cid}.json`, 'utf8'));
    var c2 = await JSON.parse(fs.readFileSync(`${platform}like/${cid}.json`, 'utf8'));
    var c3 = await JSON.parse(fs.readFileSync(`${platform}dislike/${cid}.json`, 'utf8'));
    var c4 = await JSON.parse(fs.readFileSync(`${platform}comment/${cid}.json`, 'utf8'));
    fetch(apiurls[`${platform}`] + cid, {
      headers: {
        'origin': 'https://mixerno.space'
      }
    }).then(res => res.json()).then(data => {
      if (!data.items) return;
      if (!data.items[0]) return;
      c.push([Da, parseFloat(data.items[0].statistics.viewCount)])
      if (c.length >= 365) {
        c.shift();
      }
      var f = JSON.stringify(c)
      fs.writeFileSync(`${platform}view/${cid}.json`, f, function (err) {
        if (err) {
          console.log(err)
        };
      })
      //A
      c2.push([Da, parseFloat(data.items[0].statistics.likeCount)])
      if (c2.length >= 365) {
        c2.shift();
      }
      var f2 = JSON.stringify(c2)
      fs.writeFileSync(`${platform}like/${cid}.json`, f2, function (err) {
        if (err) {
          console.log(err)
        };
      })
      //A
      c3.push([Da, parseFloat(data.items[0].statistics.dislikeCount)])
      if (c3.length >= 365) {
        c3.shift();
      }
      var f3 = JSON.stringify(c3)
      fs.writeFileSync(`${platform}dislike/${cid}.json`, f3, function (err) {
        if (err) {
          console.log(err)
        };
      })
      //A
      c4.push([Da, parseFloat(data.items[0].statistics.commentCount)])
      if (c4.length >= 365) {
        c4.shift();
      }
      var f4 = JSON.stringify(c4)
      fs.writeFileSync(`${platform}comment/${cid}.json`, f4, function (err) {
        if (err) {
          console.log(err)
        };
      })
    })
  }
  if (platform == 'wikipedia') {
    var c = await JSON.parse(fs.readFileSync(`${platform}/${cid}.json`, 'utf8'));
    fetch(apiurls[`${platform}`] + cid, {
      headers: {
        'origin': 'https://mixerno.space'
      }
    }).then(res => res.json()).then(data => {
      if (!data.subsapi) return;
      if (!data.subsapi) return;
      c.push([Da, parseFloat(data.subsapi)])
      if (c.length >= 365) {
        c.shift();
      }
      var f = JSON.stringify(c)
      fs.writeFileSync(`${platform}/${cid}.json`, f, function (err) {
        if (err) {
          console.log(err)
        };
      })
    })
  }
  if (platform == 'twitteruser') {
    var c = await JSON.parse(fs.readFileSync(`${platform}/${cid}.json`, 'utf8'));
    fetch(apiurls[`${platform}`] + cid, {
      headers: {
        'origin': 'https://mixerno.space'
      }
    }).then(res => res.json()).then(data => {
      if (!data.followers) return;
      if (!data.followers) return;
      c.push([Da, parseFloat(data.followers)])
      if (c.length >= 365) {
        c.shift();
      }
      var f = JSON.stringify(c)
      fs.writeFileSync(`${platform}/${cid}.json`, f, function (err) {
        if (err) {
          console.log(err)
        };
      })
    })
  }
  if (platform == 'twittertweet') {
    var c = await JSON.parse(fs.readFileSync(`${platform}/${cid}.json`, 'utf8'));
    fetch(apiurls[`${platform}`] + cid, {
      headers: {
        'origin': 'https://mixerno.space'
      }
    }).then(res => res.json()).then(data => {
      if (!data.favorite_count) return;
      if (!data.favorite_count) return;
      c.push([Da, parseFloat(data.favorite_count)])
      if (c.length >= 365) {
        c.shift();
      }
      var f = JSON.stringify(c)
      fs.writeFileSync(`${platform}/${cid}.json`, f, function (err) {
        if (err) {
          console.log(err)
        };
      })
    })
  }
  if (platform == 'geometrydashuser') {
    var c = await JSON.parse(fs.readFileSync(`${platform}/${cid}.json`, 'utf8'));
    fetch(apiurls[`${platform}`] + cid, {
      headers: {
        'origin': 'https://mixerno.space'
      }
    }).then(res => res.json()).then(data => {
      if (!data.stars) return;
      if (!data.stars) return;
      c.push([Da, parseFloat(data.stars)])
      if (c.length >= 365) {
        c.shift();
      }
      var f = JSON.stringify(c)
      fs.writeFileSync(`${platform}/${cid}.json`, f, function (err) {
        if (err) {
          console.log(err)
        };
      })
    })
  }
  if (platform == 'trilleruser') {
    var c = await JSON.parse(fs.readFileSync(`${platform}/${cid}.json`, 'utf8'));
    fetch(apiurls[`${platform}`] + cid, {
      headers: {
        'origin': 'https://mixerno.space'
      }
    }).then(res => res.json()).then(data => {
      if (!data.users) return;
      if (!data.users[0]) return;
      c.push([Da, parseFloat(data.users[0].followed_count)])
      if (c.length >= 365) {
        c.shift();
      }
      var f = JSON.stringify(c)
      fs.writeFileSync(`${platform}/${cid}.json`, f, function (err) {
        if (err) {
          console.log(err)
        };
      })
    })
  }
  if (platform == 'twitchuser') {
    var c = await JSON.parse(fs.readFileSync(`${platform}/${cid}.json`, 'utf8'));
    fetch(apiurls[`${platform}`] + cid, {
      headers: {
        'origin': 'https://mixerno.space'
      }
    }).then(res => res.json()).then(data => {
      if (!data.channels) return;
      if (!data.channels[0]) return;
      c.push([Da, parseFloat(data.channels[0].followers)])
      if (c.length >= 365) {
        c.shift();
      }
      var f = JSON.stringify(c)
      fs.writeFileSync(`${platform}/${cid}.json`, f, function (err) {
        if (err) {
          console.log(err)
        };
      })
    })
  }
  if (platform == 'twitchuser') {
    var c = await JSON.parse(fs.readFileSync(`${platform}/${cid}.json`, 'utf8'));
    fetch(apiurls[`${platform}`] + cid, {
      headers: {
        'origin': 'https://mixerno.space'
      }
    }).then(res => res.json()).then(data => {
      if (!data.channels) return;
      if (!data.channels[0]) return;
      c.push([Da, parseFloat(data.channels[0].followers)])
      if (c.length >= 365) {
        c.shift();
      }
      var f = JSON.stringify(c)
      fs.writeFileSync(`${platform}/${cid}.json`, f, function (err) {
        if (err) {
          console.log(err)
        };
      })
    })
  }
  if (platform == 'robloxgame') {
    var c = await JSON.parse(fs.readFileSync(`${platform}/${cid}.json`, 'utf8'));
    fetch(apiurls[`${platform}`] + cid, {
      headers: {
        'origin': 'https://mixerno.space'
      }
    }).then(res => res.json()).then(data => {
      if (!data.data) return;
      if (!data.data[0]) return;
      c.push([Da, parseFloat(data.data[0].visits)])
      if (c.length >= 365) {
        c.shift();
      }
      var f = JSON.stringify(c)
      fs.writeFileSync(`${platform}/${cid}.json`, f, function (err) {
        if (err) {
          console.log(err)
        };
      })
    })
  }
  if (platform == 'robloxgroup') {
    var c = await JSON.parse(fs.readFileSync(`${platform}/${cid}.json`, 'utf8'));
    fetch(apiurls[`${platform}`] + cid, {
      headers: {
        'origin': 'https://mixerno.space'
      }
    }).then(res => res.json()).then(data => {
      if (!data.memberCount) return;
      if (!data.memberCount) return;
      c.push([Da, parseFloat(data.memberCount)])
      if (c.length >= 365) {
        c.shift();
      }
      var f = JSON.stringify(c)
      fs.writeFileSync(`${platform}/${cid}.json`, f, function (err) {
        if (err) {
          console.log(err)
        };
      })
    })
  }
  if (platform == 'storyfireuser') {
    var c = await JSON.parse(fs.readFileSync(`${platform}/${cid}.json`, 'utf8'));
    fetch(apiurls[`${platform}`] + cid, {
      headers: {
        'origin': 'https://mixerno.space'
      }
    }).then(res => res.json()).then(data => {
      if (!data.followers) return;
      if (!data.followers) return;
      c.push([Da, parseFloat(data.followers)])
      if (c.length >= 365) {
        c.shift();
      }
      var f = JSON.stringify(c)
      fs.writeFileSync(`${platform}/${cid}.json`, f, function (err) {
        if (err) {
          console.log(err)
        };
      })
    })
  }
  if (platform == 'storyfirevideo') {
    var c = await JSON.parse(fs.readFileSync(`${platform}/${cid}.json`, 'utf8'));
    fetch(apiurls[`${platform}`] + cid, {
      headers: {
        'origin': 'https://mixerno.space'
      }
    }).then(res => res.json()).then(data => {
      if (!data.video) return;
      if (!data.video.views) return;
      c.push([Da, parseFloat(data.video.views)])
      if (c.length >= 365) {
        c.shift();
      }
      var f = JSON.stringify(c)
      fs.writeFileSync(`${platform}/${cid}.json`, f, function (err) {
        if (err) {
          console.log(err)
        };
      })
    })
  }
  if (platform == 'ecosia') {
    var c = await JSON.parse(fs.readFileSync(`${platform}/${cid}.json`, 'utf8'));
    fetch(apiurls[`${platform}`], {
      headers: {
        'origin': 'https://mixerno.space'
      }
    }).then(res => res.json()).then(data => {
      if (!data.count) return;
      if (!data.count) return;
      c.push([Da, parseFloat(data.count)])
      if (c.length >= 365) {
        c.shift();
      }
      var f = JSON.stringify(c)
      fs.writeFileSync(`${platform}/${cid}.json`, f, function (err) {
        if (err) {
          console.log(err)
        };
      })
    })
  }
  if (platform == 'discordmessage') {
    var c = await JSON.parse(fs.readFileSync(`${platform}/${cid}.json`, 'utf8'));
    fetch(apiurls[`${platform}`]+cid, {
      headers: {
        'origin': 'https://mixerno.space'
      }
    }).then(res => res.json()).then(data => {
      if (!data.messageCount) return;
      if (!data.messageCount) return;
      c.push([Da, parseFloat(data.messageCount)])
      if (c.length >= 365) {
        c.shift();
      }
      var f = JSON.stringify(c)
      fs.writeFileSync(`${platform}/${cid}.json`, f, function (err) {
        if (err) {
          console.log(err)
        };
      })
    })
  }
  if (platform == 'dailymotionuser') {
    var c = await JSON.parse(fs.readFileSync(`${platform}/${cid}.json`, 'utf8'));
    fetch(apiurls[`${platform}`]+cid, {
      headers: {
        'origin': 'https://mixerno.space'
      }
    }).then(res => res.json()).then(data => {
      if (!data.list) return;
      if (!data.list[0]) return;
      c.push([Da, parseFloat(data.list[0].followers_total)])
      if (c.length >= 365) {
        c.shift();
      }
      var f = JSON.stringify(c)
      fs.writeFileSync(`${platform}/${cid}.json`, f, function (err) {
        if (err) {
          console.log(err)
        };
      })
    })
  }
  if (platform == 'vkgroup') {
    var c = await JSON.parse(fs.readFileSync(`${platform}/${cid}.json`, 'utf8'));
    fetch(apiurls[`${platform}`]+cid, {
      headers: {
        'origin': 'https://mixerno.space'
      }
    }).then(res => res.json()).then(data => {
      if (!data.response) return;
      if (!data.response[0]) return;
      c.push([Da, parseFloat(data.response[0].members_count)])
      if (c.length >= 365) {
        c.shift();
      }
      var f = JSON.stringify(c)
      fs.writeFileSync(`${platform}/${cid}.json`, f, function (err) {
        if (err) {
          console.log(err)
        };
      })
    })
  }
  if (platform == 'coronavirusworld') {
    var c = await JSON.parse(fs.readFileSync(`${platform}/${cid}.json`, 'utf8'));
    fetch(apiurls[`${platform}`], {
      headers: {
        'origin': 'https://mixerno.space'
      }
    }).then(res => res.json()).then(data => {
      if (!data.data) return;
      if (!data.data[0]) return;
      c.push([Da, parseFloat(data.data[0].totalcases)])
      if (c.length >= 365) {
        c.shift();
      }
      var f = JSON.stringify(c)
      fs.writeFileSync(`${platform}/${cid}.json`, f, function (err) {
        if (err) {
          console.log(err)
        };
      })
    })
  }
  if (platform == 'coronaviruscountry') {
    var c = await JSON.parse(fs.readFileSync(`${platform}/${cid}.json`, 'utf8'));
    fetch(apiurls[`${platform}`]+cid, {
      headers: {
        'origin': 'https://mixerno.space'
      }
    }).then(res => res.json()).then(data => {
      if (!data.data) return;
      if (!data.data[0]) return;
      c.push([Da, parseFloat(data.data[0].totalcases)])
      if (c.length >= 365) {
        c.shift();
      }
      var f = JSON.stringify(c)
      fs.writeFileSync(`${platform}/${cid}.json`, f, function (err) {
        if (err) {
          console.log(err)
        };
      })
    })
  }
  if (platform == 'globalclicker1') {
    var c = await JSON.parse(fs.readFileSync(`${platform}/${cid}.json`, 'utf8'));
    fetch(apiurls[`${platform}`], {
      headers: {
        'origin': 'https://mixerno.space'
      }
    }).then(res => res.json()).then(data => {
      if (!data) return;
      if (!data) return;
      c.push([Da, parseFloat(data)])
      if (c.length >= 365) {
        c.shift();
      }
      var f = JSON.stringify(c)
      fs.writeFileSync(`${platform}/${cid}.json`, f, function (err) {
        if (err) {
          console.log(err)
        };
      })
    })
  }
  if (platform == 'deviantart') {
    var c = await JSON.parse(fs.readFileSync(`${platform}/${cid}.json`, 'utf8'));
    fetch(apiurls[`${platform}`]+cid, {
      headers: {
        'origin': 'https://mixerno.space'
      }
    }).then(res => res.json()).then(data => {
      if (!data.pageData) return;
      if (!data.pageData.stats) return;
      c.push([Da, parseFloat(data.pageData.stats.watchers)])
      if (c.length >= 365) {
        c.shift();
      }
      var f = JSON.stringify(c)
      fs.writeFileSync(`${platform}/${cid}.json`, f, function (err) {
        if (err) {
          console.log(err)
        };
      })
    })
  }
  if (platform == 'spotify') {
    var c = await JSON.parse(fs.readFileSync(`${platform}/${cid}.json`, 'utf8'));
    fetch(apiurls[`${platform}`]+cid, {
      headers: {
        'origin': 'https://mixerno.space'
      }
    }).then(res => res.json()).then(data => {
      if (!data.followers) return;
      if (!data.followers.total) return;
      c.push([Da, parseFloat(data.followers.total)])
      if (c.length >= 365) {
        c.shift();
      }
      var f = JSON.stringify(c)
      fs.writeFileSync(`${platform}/${cid}.json`, f, function (err) {
        if (err) {
          console.log(err)
        };
      })
    })
  }
  if (platform == 'tiktok') {
    var c = await JSON.parse(fs.readFileSync(`${platform}/${cid}.json`, 'utf8'));
    fetch(apiurls[`${platform}`]+cid, {
      headers: {
        'origin': 'https://mixerno.space'
      }
    }).then(res => res.json()).then(data => {
      if (!data.followerCount) return;
      if (!data.followerCount) return;
      c.push([Da, parseFloat(data.followerCount)])
      if (c.length >= 365) {
        c.shift();
      }
      var f = JSON.stringify(c)
      fs.writeFileSync(`${platform}/${cid}.json`, f, function (err) {
        if (err) {
          console.log(err)
        };
      })
    })
  }
} catch(err) {
  console.log(err, platform, cidr)
}
}






var listener;
try {
  listener = app.listen(prot.port, () => {
    console.log("Your app is listening on port " + listener.address().port);
  });
} catch (err) {

}