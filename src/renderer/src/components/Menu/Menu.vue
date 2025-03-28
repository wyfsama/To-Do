<template>
  <div class="menu-wrap">
    <div class="menu-wrap">
      <a-menu>
        <a-menu-item v-for="(menu, key) in basicMenu" :key>
          <div class="menu-item">
            <div class="menu-item-left">
              <img
                class="menu-item-icon"
                v-if="key < 5"
                :src="getImgUrl(`light/${menu.icon}.png`)"
                alt="menu"
              />
              <MenuIcon v-else class="menu-icon menu-item-icon" />
              <div class="menu-item-name">{{ menu.name }}</div>
            </div>
            <div class="menu-item-right">
              <div class="task-num">
                <a-avatar class="num-icon">123</a-avatar>
              </div>
            </div>
          </div>
        </a-menu-item>
      </a-menu>
    </div>
    <!-- <div class="menu-wrap-sup">
      <a-menu>
        <a-menu-item v-for="(menu, key) in activeMenu" :key>
          <div class="menu-item">
            <MenuIcon class="menu-icon menu-item-icon" />
            <div class="menu-item-name">{{ menu.name }}</div>
          </div>
        </a-menu-item>
      </a-menu>
    </div> -->
  </div>
</template>

<script setup lang="ts">
import { getImgUrl } from '@renderer/utils'
import MenuIcon from '@renderer/assets/menu.svg'

interface Menu {
  name: string
  icon: string
}

const basicMenu = reactive<Menu[]>([
  {
    name: '我的一天',
    icon: 'MyDay'
  },
  {
    name: '重要',
    icon: 'Imp'
  },
  {
    name: '计划内',
    icon: 'Planned'
  },
  {
    name: '已分配给我',
    icon: 'Assign'
  },
  {
    name: '任务',
    icon: 'Tasks'
  },
  {
    name: '任务111',
    icon: 'Tasks'
  }
])

const activeMenu = reactive<Menu[]>([])
</script>

<style scoped lang="postcss">
.menu-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  &-left {
    display: flex;
    align-items: center;
  }
  &-icon {
    width: 22px;
    margin-right: 15px;
  }
  &-right {
    .task-num {
      .num-icon {
        background-color: #DDDDDD;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 20px;
        height: 20px;
        font-size: 16px;
        color: black;
      }
    }
  }
}

.arco-menu-inner {
  padding: 0;
}

.arco-menu-light,
.arco-menu-item {
  background-color: #f3f3f3;
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

.menu-icon {
  color: #697bc2;
}
</style>
