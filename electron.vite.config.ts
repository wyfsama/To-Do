import { resolve } from 'path'
import { defineConfig, externalizeDepsPlugin } from 'electron-vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ArcoResolver } from 'unplugin-vue-components/resolvers'
import postcssNested from 'postcss-nested'
import svgLoader from 'vite-svg-loader'

export default defineConfig({
  main: {
    plugins: [externalizeDepsPlugin()]
  },
  preload: {
    plugins: [externalizeDepsPlugin()]
  },
  renderer: {
    resolve: {
      alias: {
        '@renderer': resolve('src/renderer/src')
      }
    },
    css: {
      postcss: {
        plugins: [postcssNested()]
      }
    },
    plugins: [
      vue(),
      svgLoader(),
      AutoImport({
        imports: ['vue'],
        dirs: [
          resolve(__dirname, 'src/renderer/src/utils')
        ],
        dts: resolve(__dirname, 'src/renderer/auto-imports.d.ts'),
        include: [
          /\.[tj]sx?$/,
          /\.vue$/,
        ],
        eslintrc: {
          enabled: true,
        }
      }),
      Components({
        resolvers: [
          ArcoResolver({
            sideEffect: true
          })
        ]
      })
    ]
  }
})
