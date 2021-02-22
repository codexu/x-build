<template>
  <img v-if="type === 'img'" :src="src | url" />
  <video
    ref="video"
    v-else-if="type === 'video'"
    muted
    :poster="poster"
  />
  <audio v-else :src="src | url" />
</template>

<script>
import url from '@/libs/filters/url';

export default {
  name: 'm-static',
  filters: { url },
  data() {
    return {
      url,
    };
  },
  props: {
    src: {
      type: String,
      default: '',
    },
    type: {
      type: String,
      default: 'img',
    },
    autoplay: {
      type: Boolean,
      default: true,
    },
  },
  mounted() {
    this.autoPlay();
  },
  methods: {
    autoPlay() {
      if (this.type === 'video') {
        const { video } = this.$refs;
        video.src = url(this.src);
        if (this.autoplay) {
          video.oncanplay = () => {
            video.play();
          };
        }
      }
    },
  },
  computed: {
    deviceType() {
      return this.$store.state.system.device.type;
    },
    poster() {
      return this.deviceType === 'desktop' ? '' : url(this.url);
    },
  },
  watch: {
    src() {
      this.autoPlay();
    },
  },
};
</script>
