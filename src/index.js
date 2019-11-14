import debounce from 'debounce';
import {
  name as libName,
  displayName as libDisplayName
} from '../package.json';


export default class UIPlay {
  constructor(file, {
    volume = 1,
    debounceMillis = 300,
    ignoreErrors = true
  }) {
    this.file = file;
    this.volume = volume;
    this.debounceMillis = debounceMillis;
    this.ignoreErrors = ignoreErrors;
    this.play = debounce(this.playImmediate, debounceMillis, true);

    const audioElement = document.createElement('audio');
    const fileParts = file && file.match(/^(([A-Z]:)?[\.]?[\\{1,2}/]?.*[\\{1,2}/])*(.+)\.(.+)/);
    const [,,, filename, ext] = fileParts || [];

    if(!filename) {
      throw new Error(`${libDisplayName}: No imput file to load`);
    }

    audioElement.id = `${libName}-audio-${filename}${ext}-${(new Date).getTime()}`;
    audioElement.src = file;
    audioElement.preload = 'auto';

    document.body.appendChild(audioElement);
  }

  playImmediate(volume = null) {
    const audio = new Audio(this.file);

    audio.addEventListener('loadeddata', () => {
      audio.volume = volume !== null ? volume : this.volume;
      audio.play().catch(error => {
        if(!this.ignoreErrors) {
          throw error;
        }
      });
    });

    audio.addEventListener('error', () => {
      if(!this.ignoreErrors) {
        throw new Error(`${libDisplayName}: HTMLMediaElement error`);
      }
    });

    audio.load();

    return this;
  }

  setVolume(volume) {
    this.volume = volume;
    return this;
  }
}
