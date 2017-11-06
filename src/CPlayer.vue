<template lang="html">
  <div class="c-player-app" />
</template>

<script>
import CPlayer from 'cplayer';
const playModes = ['listloop', 'listrandom', 'singlecycle'];
const dropDownMenuModes = ['bottom', 'top', 'none'];

export default {
  name: 'CPlayer',
  props: {
    playlist: {
      type: Array,
      required: true,
    },
    volume: {
      type: Number,
      default: 1,
    },
    playMode: {
      type: String,
      default: 'listloop',
      validator(value) {
        return playModes.includes(value);
      },
    },
    zoomOutKana: {
      type: Boolean,
    },
    showPlaylist: {
      type: Boolean,
    },
    autoplay: {
      type: Boolean,
    },
    width: {
      type: String,
    },
    size: {
      type: String,
    },
    playerStyle: {
      type: String,
      default: '',
    },
    showPlaylistButton: {
      type: Boolean,
      default: true,
    },
    dropDownMenuMode: {
      type: String,
      default: 'bottom',
      validator(value) {
        return dropDownMenuModes.includes(value);
      },
    },
  },
  data() {
    return {
      controller: null,
    };
  },
  mounted() {
    this.controller = new CPlayer({
      dropDownMenuMode: this.dropDownMenuMode,
      element: this.$el,
      playlist: this.playlist,
      playmode: this.playMode,
      showPlaylist: this.showPlaylist,
      showPlaylistButton: this.showPlaylistButton,
      size: this.size,
      style: this.playerStyle,
      volume: this.volume,
      width: this.width,
      zoomOutKana: this.zoomOutKana,
      autoplay: this.autoplay,
    });
  },
  beforeDestroy() {
    try {
      if (this.controller) this.controller.destroy();
    } catch (e) {}
  },
};
</script>
