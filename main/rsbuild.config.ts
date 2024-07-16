import { defineConfig } from '@rsbuild/core'
import { pluginReact } from '@rsbuild/plugin-react'

export default defineConfig({
  plugins: [pluginReact()],
  server: {
    port: 3000,
  },
  dev: {
    // 禁用 hmr，此时热更新和 react-refresh 将被禁用，用于解决子应用在微前端环境下的 js 热更新问题
    hmr: false,
  },
})
