<template>
  <div class="left">
    <!-- 左边头部-个人信息/搜索框 -->
    <div class="left-header">
      <div class="userinfo-wrap">
        <div class="userinfo-wrap-left">
          <a-avatar :size="50">
            <img src="../assets/images/avatar.jpg" alt="avatar" />
          </a-avatar>
        </div>
        <div class="userinfo-wrap-right">
          <div class="userinfo-name">xxxx</div>
          <div class="userinfo-email">xxxx@163.com</div>
        </div>
      </div>
      <div class="search-wrap">
        <a-input :style="{ width: '100%', background: 'white' }" placeholder="搜索" allow-clear>
          <template #suffix>
            <icon-search />
          </template>
        </a-input>
      </div>
    </div>
    <!-- 菜单 -->
    <div class="left-body">
      <a-menu>
        <a-menu-item v-for="(menu, key) in basicMenu" :key>
          <div class="menu-item">
            <img :src="getImgUrl(`light/${menu.icon}.png`)" alt="menu" />
            <div class="menu-item-name">{{ menu.name }}</div>
          </div>
        </a-menu-item>
      </a-menu>
    </div>
  </div>
</template>

<script setup lang="ts">
import { getImgUrl } from '../utils'  
// 使用时需要指定正确的子目录路径
console.log(getImgUrl('light/MyDay.png')) // 对于 light 子目录下的图片
// 或者
console.log(getImgUrl('avatar.png')) // 对于根目录下的图片

const basicMenu = reactive<
  {
    name: string
    icon: string
  }[]
>([
  {
    name: '我的一天',
    icon: 'MyDay'
  },
  {
    name: '重要',
    icon: 'MyDay'
  },
  {
    name: '计划内',
    icon: 'MyDay'
  },
  {
    name: '已分配给我',
    icon: 'MyDay'
  },
  {
    name: '任务',
    icon: 'MyDay'
  }
])
</script>

<style scoped lang="postcss">
.left {
  padding: 12px;
  &-header {
    margin-bottom: 12px;
  }
}

.userinfo {
  &-wrap {
    display: flex;
    align-items: center;
    margin-bottom: 13px;
    &-left {
      margin-right: 10px;
    }
  }

  &-name {
    font-weight: 600;
  }

  &-email {
    font-size: 12px;
    font-weight: 200;
    color: #828282;
  }
}
.arco-menu-light,
.arco-menu-item {
  background-color: #f2f2f2;
}

.arco-menu-light .arco-menu-item.arco-menu-selected {
  background-color: #e9e9e9;
  color: black;
}

.arco-menu-light .arco-menu-item:hover,
.arco-menu-light .arco-menu-group-title:hover,
.arco-menu-light .arco-menu-pop-header:hover,
.arco-menu-light .arco-menu-inline-header:hover {
  background-color: #e9e9e9;
  color: black;
}
</style>
