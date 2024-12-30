exports.handler = async function(event, context) {
  const TWITTER_CLIENT_ID = process.env.TWITTER_CLIENT_ID;
  const REDIRECT_URI = process.env.REDIRECT_URI;

  const authUrl = `https://twitter.com/i/oauth2/authorize?response_type=code&client_id=${TWITTER_CLIENT_ID}&redirect_uri=${REDIRECT_URI}&scope=tweet.read%20users.read%20offline.access&state=state`;

  return {
    statusCode: 302,
    headers: {
      Location: authUrl
    }
  };
};
