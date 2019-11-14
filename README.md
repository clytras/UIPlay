<p align="center">
  <img height="120" src="uiplay-logo.png">
</p>

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
Download latest release from [releases](https://github.com/clytras/UIPlay/releases). CDN soon.
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

### Options

| Option | Accepts      | Description |
| --- | ------------- | --- |
| `volume` | Float fraction between 0-1<br><sup>Default: 1</sup> | Controls the volume level for each audio object |
| `debounceMillis` | Integer of milliseconds<br><sup>Default: 300</sup> | Debounce time for the next play |
| `ignoreErrors` | Boolean<br><sup>Default: true</sup> | Ignore or throw errors. Errors must be catched if throwning |

## License

[MIT License](LICENSE)
