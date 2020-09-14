import {MediaPlayer} from 'dashjs';

const initPlayer = (playerId,url,autoplay) => {
    const player = document.getElementById(playerId);
    const dashPlayer = MediaPlayer().create();
    setEventListeners(player,dashPlayer);
    dashPlayer.initialize(document.getElementById(playerId),url,autoplay);
}

const setEventListeners = (player,dashPlayer) => {
    console.log("setting event listeners ...");
    //dom events
    player.addEventListener('canplay',()=>{
        console.log('DOM EVENT : canplay');
    });
    player.addEventListener('play',()=>{
        console.log('DOM EVENT : play');
    });
    player.addEventListener('pause',()=>{
        console.log('DOM EVENT : pause');
    });
    player.addEventListener('abort',()=>{
        console.log('DOM EVENT : abort');
    });
    player.addEventListener('canplaythrough',()=>{
        console.log('DOM EVENT : canplaythrough');
    });
    player.addEventListener('durationchange',()=>{
        console.log('DOM EVENT : durationchange');
    });
    player.addEventListener('emptied',()=>{
        console.log('DOM EVENT : emptied');
    });
    player.addEventListener('ended',()=>{
        console.log('DOM EVENT : ended');
    });
    player.addEventListener('error',()=>{
        console.log('DOM EVENT : error');
    });
    player.addEventListener('loadeddata',()=>{
        console.log('DOM EVENT : loadeddata');
    });
    player.addEventListener('loadedmetadata',()=>{
        console.log('DOM EVENT : loadedmetadata');
    });
    player.addEventListener('loadstart',()=>{
        console.log('DOM EVENT : loadstart');
    });
    player.addEventListener('playing',()=>{
        console.log('DOM EVENT : playing');
    });
    player.addEventListener('progress',()=>{
        console.log('DOM EVENT : progress');
    });
    player.addEventListener('ratechange',()=>{
        console.log('DOM EVENT : ratechange');
    });
    player.addEventListener('seeked',()=>{
        console.log('DOM EVENT : seeked');
    });
    player.addEventListener('seeking',()=>{
        console.log('DOM EVENT : seeking');
    });
    player.addEventListener('stalled',()=>{
        console.log('DOM EVENT : stalled');
    });
    player.addEventListener('suspend',()=>{
        console.log('DOM EVENT : suspend');
    });
    player.addEventListener('timeupdate',()=>{
        console.log('DOM EVENT : timeupdate');
    });
    player.addEventListener('volumechange',()=>{
        console.log('DOM EVENT : volumechange');
    });
    player.addEventListener('waiting',()=>{
        console.log('DOM EVENT : waiting');
    });
    //dash events
    // dashPlayer.on(MediaPlayer.events['CAN_PLAY'],()=> {
    //     console.log('CAN_PLAY DASH');
    // });
    console.log(typeof MediaPlayer.events)
    for(const dashEvent in MediaPlayer.events){
        dashPlayer.on(MediaPlayer.events[dashEvent],()=> {
             console.log("DASH PLAYER EVENT : "+dashEvent);
        });
    }
}
export default initPlayer;