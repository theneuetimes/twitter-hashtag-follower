const Twit = require('twit');
const config = require('./config');
const tweetTemplate = require('./views/template');

const T = new Twit({
  consumer_key: config.consumer_key,
  consumer_secret: config.consumer_secret,
  access_token: config.access_token,
  access_token_secret: config.access_token_secret,
  timeout_ms: 60 * 1000,
  strictSSL: true
});

// var stream = T.stream('statuses/filter', {track: ['#persona5', '#p5a']});
var stream = T.stream('statuses/sample');

stream.on('tweet', (tweet) => {
  let tweetData = {
    created_at: tweet.created_at,
    id: tweet.id,
    id_str: tweet.id_str,
    text: tweet.text,
    user: {
      id: tweet.user.id,
      name: tweet.user.name,
      profile_image_url_https: tweet.user.profile_image_url_https,
      screen_name: tweet.user.screen_name
    },
    entities: {
      media: tweet.entities.media
    }
  }

  console.log(JSON.stringify(tweetData) + "\n\n\n\n\n\n\n");
  // tweetTemplate
});