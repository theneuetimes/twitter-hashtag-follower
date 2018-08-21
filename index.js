const Twit = require('twit');
const config = require('./config');

const T = new Twit({
  consumer_key: config.consumer_key,
  consumer_secret: config.consumer_secret,
  access_token: config.access_token,
  access_token_secret: config.access_token_secret,
  timeout_ms: 60 * 1000,
  strictSSL: true
});

var stream = T.stream('statuses/filter', {track: '#persona5'});

stream.on('tweet', (tweet) => {
  console.log(tweet);
});