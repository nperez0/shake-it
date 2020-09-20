const spotifyConfig = {
    clientId : process.env.spotifyClientID,
    clientSecret : process.env.spotifyClientSecret,
    redirectUri : 'https://raw.githubusercontent.com/nperez0/me/master/index.html',
    accessCode: process.env.spotifyAccessCode,
    accessToken: process.env.spotifyAccessToken,
    refreshToken: process.env.spotifyRefreshToken,
  };

  module.exports = {spotifyConfig: spotifyConfig}