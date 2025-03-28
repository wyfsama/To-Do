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
      <Menu />
    </div>
    <!-- 底部 -->
    <div class="left-footer">
      <div class="left-footer-left">
        <icon-plus class="left-footer-left-icon" />
        <span class="left-footer-left-text">新建列表</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="postcss">
.left {
  padding: 12px;
  display: flex;
  flex-direction: column;
  &-header {
    margin-bottom: 12px;
  }
  &-body {
    flex: 1;
  }
  &-footer {
    height: 28px;
    display: flex;
    align-items: center;

    &-left {
      display: flex;
      align-items: center;
      padding-left: 12px;
      color: rgb(78, 89, 105);
      &-icon {
        font-size: 18px;
        margin-right: 12px;
      }
      &-text {
      }
    }
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
</style>
