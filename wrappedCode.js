const SpotifyHelper = require('./spotifyHelper.js');
const config = require('./config');

let spotifyHelper = new SpotifyHelper(config.spotifyConfig);
spotifyHelper.generateAPIInstance();

const targetDevice = process.env.spotifyTargetDeviceName;
const targetPlaylist = process.env.spotifyTargetPlaylist;
const targetUsername = process.env.spotifyTargetUsername;

function playMusic() {
    return spotifyHelper.refreshAPIToken().then(() => {
        return spotifyHelper.getDeviceIDByName(targetDevice);
    }).then((targetDeviceID) =>{
        let targetUri = spotifyHelper.getContextUri(targetUsername, targetPlaylist);
        return spotifyHelper.play(targetDeviceID, targetUri);
    });
}

function init() {
    playMusic().catch(console.log);
}


module.exports = init;
