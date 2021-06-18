<template>
  <img v-if="type === 'img'" :src="envSrc" />
  <video
    ref="videoRef"
    v-else-if="type === 'video'"
    muted
    :poster="poster"
  />
  <audio v-else :src="envSrc" />
</template>

<script lang="ts">
import {
  defineComponent, computed, ref, Ref, watch, onMounted,
} from 'vue';
import { url as filterUrl } from '@/libs/filters';
import { checkDevice } from '@/libs/utils';

export default defineComponent({
  name: 'StaticFile',
  props: {
    src: { type: String, default: '' },
    type: { type: String, default: 'img' },
    autoplay: { type: Boolean, default: true },
  },
  setup(props) {
    // 经过环境变量处理的 src
    const envSrc = computed(() => filterUrl(props.src));

    // 处理视频自动播放（解决 chrome 无法自动播放的问题）
    const poster = computed(() => (checkDevice.type === 'desktop' ? '' : filterUrl(props.src)));
    const videoRef: Ref<HTMLVideoElement | null> = ref(null);

    function videoAutoPlay() {
      if (props.type === 'video' && videoRef.value !== null) {
        videoRef.value.src = filterUrl(props.src);
      }
      if (props.autoplay && videoRef.value) {
        videoRef.value.oncanplay = () => {
          if (videoRef.value) videoRef.value.play();
        };
      }
    }

    onMounted(() => {
      videoAutoPlay();
    });

    // 监听视频 src，如果存在则自动播放
    watch(envSrc, () => { if (videoRef.value) videoRef.value.play(); });

    return { envSrc, poster, videoRef };
  },
});
</script>
