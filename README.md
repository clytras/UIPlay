<p align="center">
  <img height="120" src="uiplay-logo.png">
</p>

[![](https://data.jsdelivr.com/v1/package/npm/uiplay/badge)](https://www.jsdelivr.com/package/npm/uiplay)

# UIPlay

This is a small utility that preloads audio files and lets developers to play them at any point they need to. This utility properly cacthes all corecponding errors that may occur during loading and playback. It forces browser to preload files by appending HTML elements for each object that is initialized.

## Demo

You can find an online demo here: https://lytrax.io/pub/dev/uiplay

## Installation

NPM:<br>
`npm install uiplay --save`<br><br>
Yarn:<br>
`yarn add uiplay`<br><br>
Browser:<br>
Download latest release from [releases](https://github.com/clytras/UIPlay/releases), or browse [JSDeliver](https://www.jsdelivr.com/package/npm/uiplay) CDN to pick the latest version.
```
<script src='uiplay.js'></script>
```

## Usage

```
import UIPlay from 'uiplay';

const NofifyAudio = new UIPlay(
  'orders_notify.mp3',
  {
    volume: 1
  }
);

document.getElementById('play-audio').addEventListener('click', () => {
  NofifyAudio.play();
});
```

### Methods

`UIPlay(file: string, options: object)` (`contructor`)<br>
The initialization of a new HTMLMediaElement object.

`play(volume: number)`<br>
Plays the audio using a throtte timer. The `volume` parameter can be omitted to use `options` volume.

`playImmediate(volume: number)`<br>
Plays the audio immediately without throtte. The `volume` parameter can be omitted to use `options` volume.

`setVolume(volume: number)`<br>
Sets the volume level using decimal fraction (0-1).

NOTE: All methods return the actual object.


### Options

| Option | Accepts      | Description |
| --- | ------------- | --- |
| `volume` | Float fraction between 0-1<br><sup>Default: 1</sup> | Controls the volume level for each audio object |
| `throttleMillis` | Integer of milliseconds<br><sup>Default: 300</sup> | Throttle time for the next play |
| `ignoreErrors` | Boolean<br><sup>Default: true</sup> | Ignore or throw errors. Errors must be catched if throwning |

## License

[MIT License](LICENSE)
