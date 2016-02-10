/**
 * Created by ZE on 26/09/15.
 */

function handler(req, res) {
    res.writeHead(200);
    res.end('');
}
var app = require('http').createServer(handler);
var io = require('socket.io')(app);

var Redis = require('ioredis');
var redis = new Redis();

app.listen(6001, function () {
    console.log('Server is running! at Port:' + String(6001));
});


io.on('connection', function (socket) {

});

redis.psubscribe('*', function (err, count) {
    //全てチャンネルを監視する
});
//
redis.on('pmessage', function (subscribed, channel, message) {

    //JSON化する
    message = JSON.parse(message);

    //メッセージをemitする：
    //to_user_id.1:App\Events\Chat => to_user_id.1 = channel; App\Events\Chat = message event
    io.emit(channel + ':' + message.event, message.data);//

});