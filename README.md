# Todo Electron

一个使用 Electron + Vue 3 + TypeScript 开发的仿 Microsoft To Do 桌面应用。

## 功能特性

- 🎯 现代化界面设计，完美还原 Microsoft To Do 的用户体验
- 🌓 支持亮色/暗色主题切换
- 📝 任务管理功能
  - 我的一天
  - 重要
  - 计划内
  - 已分配任务
  - 任务列表
- 🔍 任务搜索功能
- 💾 本地数据持久化

## 技术栈

- Electron
- Vue 3
- TypeScript
- Vite
- Arco Design Vue

## 开发环境

- Node.js >= 16
- pnpm >= 8

## 快速开始

```bash
# 安装依赖
pnpm install

# 启动开发服务器
pnpm dev

# 打包应用
pnpm build

# 打包不同平台
pnpm build:win    # Windows
pnpm build:mac    # macOS
pnpm build:linux  # Linux
```

## 项目结构

```
├── src/
│   ├── main/           # Electron 主进程
│   ├── preload/        # 预加载脚本
│   └── renderer/       # Vue 3 渲染进程
│       ├── src/
│       │   ├── assets/     # 静态资源
│       │   ├── components/ # 组件
│       │   ├── layout/     # 布局组件
│       │   └── utils/      # 工具函数
```

## 开发团队

- [您的名字/团队名称]

## 许可证

[选择合适的许可证]

## Recommended IDE Setup

- [VSCode](https://code.visualstudio.com/) + [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) + [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar)

## Project Setup

### Install

```bash
$ pnpm install
```

### Development

```bash
$ pnpm dev
```

### Build

```bash
# For windows
$ pnpm build:win

# For macOS
$ pnpm build:mac

# For Linux
$ pnpm build:linux
```
