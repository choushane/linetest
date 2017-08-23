var linebot = require('linebot');
var express = require('express');

var bot = linebot({
  channelId: 1531623444,
  channelSecret: 081362b49c1ddf20dd9e02dcae117475,
  channelAccessToken: z19SSmR1vbBv5idEQ50fTh5VIM8rYIfQJ8klf35oO3l7wuOei0J1TsO5rVWusSw4VOMxiSMXvsYjkvrdm1X5dAl2g0UcEcv6n0SH/aP7RTc7U2OXDQm08fAZxlP1PUwKGL0YuQGc1FSlYro/JwL4gQdB04t89/1O/w1cDnyilFU=
});

bot.on('message', function(event) {
  console.log(event); //把收到訊息的 event 印出來看看
});

const app = express();
const linebotParser = bot.parser();
app.post('/', linebotParser);

//因為 express 預設走 port 3000，而 heroku 上預設卻不是，要透過下列程式轉換
var server = app.listen(process.env.PORT || 8080, function() {
  var port = server.address().port;
  console.log("App now running on port", port);
});
