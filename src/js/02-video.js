import throttle from 'lodash.throttle';
import Player from '@vimeo/player';

const player = new Player('vimeo-player');
const STORAGE_KEY = 'videoplayer-current-time';

player.on(
  'timeupdate',
  throttle(function (data) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data.seconds));
  }, 1000)
);

const storedTime = JSON.parse(localStorage.getItem(STORAGE_KEY));
if (storedTime) {
  player.setCurrentTime(storedTime).catch(error => {
    console.log('Error setting time:', error);
  });
}
