<script setup lang="ts">
import Versions from './components/Versions.vue'
import layout from './layout/Index.vue'

const ipcHandle = (): void => window.electron.ipcRenderer.send('ping')
</script>

<template>
  <layout />
</template>
