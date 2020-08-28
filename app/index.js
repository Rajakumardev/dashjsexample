import {MediaPlayer} from 'dashjs';

const initPlayer = (playerId,url,autoplay) => {
    const dashPlayer = MediaPlayer().create();
    dashPlayer.initialize(document.getElementById(playerId),url,autoplay);
}
export default initPlayer;