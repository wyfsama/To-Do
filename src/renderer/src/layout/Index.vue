<template>
  <div class="layout">
    <Left />
    <Right />
  </div>
</template>

<script setup lang="ts">
import Left from './Left.vue'
import Right from './Right.vue'
</script>

<style scoped lang="postcss">
.layout {
  height: 100%;
  display: flex;
  .left {
    width: 280px;
    background-color: #f3f3f3;
  }
  .right {
  }
}
</style>
