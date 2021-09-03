<script lang="ts" setup>
import { computed, ref, Ref, withDefaults, onMounted, watch } from 'vue';
import { baseStaticUrl } from '@/libs/utils';
import useDevice from '@/hooks/useDevice';

interface Props {
  src?: string;
  type?: string;
  autoplay?: boolean;
}
const props = withDefaults(defineProps<Props>(), {
  src: '',
  type: 'img',
  autoplay: true,
});

const envSrc = computed(() => baseStaticUrl(props.src));
// 处理视频自动播放（解决 chrome 无法自动播放的问题）
const { deviceType } = useDevice();
const poster = computed(() =>
  deviceType.value === 'desktop' ? '' : baseStaticUrl(props.src),
);
const videoRef: Ref<HTMLVideoElement | null> = ref(null);

// 解决移动端视频无法自动播放的问题
function videoAutoPlay() {
  if (props.type === 'video' && videoRef.value !== null) {
    videoRef.value.src = baseStaticUrl(props.src);
  }
  if (props.autoplay && videoRef.value) {
    videoRef.value.oncanplay = () => {
      if (videoRef.value) videoRef.value.play();
    };
  }
}

// 自动播放视频
onMounted(() => { videoAutoPlay();});
// 监听视频 src，如果存在则自动播放

watch(envSrc, () => { if (videoRef.value) videoRef.value.play(); });
</script>

<script lang="ts">
export default { name: 'StaticFile' };
</script>

<template>
  <img v-if="type === 'img'" :src="envSrc" />
  <video ref="videoRef" v-else-if="type === 'video'" muted :poster="poster" />
  <audio v-else :src="envSrc" />
</template>
