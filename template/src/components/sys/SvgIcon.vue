<script setup lang="ts">
import { computed, withDefaults } from 'vue';

interface Props {
  prefix?: string;
  name?: string;
  color?: string;
}

const props = withDefaults(defineProps<Props>(), {
  prefix: 'icon',
  name: '',
  color: '#000',
});

const symbolId = computed(() => `#${props.prefix}-${props.name}`);
</script>

<template>
  <svg aria-hidden="true">
    <use :xlink:href="symbolId" :fill="color" />
  </svg>
</template>
