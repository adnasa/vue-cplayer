# vue-cplayer

A simple vue wrapper for [cPlayer](https://github.com/MoePlayer/cPlayer).

### Usage

__template__

```html
<c-player :playlist="playlist" />
```

__script__

```js
import CPlayer from 'vue-cplayer';
import playlist from './playlist';

export default {
  name: 'MyComponent',
  data() {
    return {
      playlist,
    },
  },
  components: {
    CPlayer,
  },
};
```

#### Options

key                | type           | required           | default    | description
---                | ---            | ---                | ---        | ---
autoplay           | `Boolean`      |                    |            |
dropDownMenuMode   | `String`       |                    | `bottom`   |
playlist           | `Array<Track>` | :white_check_mark: |            |
playMode           | `String`       |                    | `listloop` | Apply a mode on the play cycle. Options: `listloop`, 'listrandom', and `singlecycle`
showPlaylist       | `Boolean`      |                    |            |
showPlaylistButton | `Boolean`      |                    | `true`     |
size               | `String`       |                    |            | Apply a size on the player
volume             | `Number`       |                    | `1`        |
width              | `String`       |                    |            | Apply a width on the player
zoomOutKana        | `Boolean`      |                    |            | Apply optimization of Japanese kana characters

##### The Track model

key    | description
---    | ---
src    | URL to your music source
poster | URL to your image source
name   | name of track
artist | name of artist
