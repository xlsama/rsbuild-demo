import { defineConfig } from '@rsbuild/core'
import { pluginReact } from '@rsbuild/plugin-react'

// Garfish webpack 子应用配置：https://www.garfishjs.org/guide/demo/react#4-%E6%9B%B4%E6%94%B9-webpack-%E9%85%8D%E7%BD%AE
// Rsbuild 配置：https://rsbuild.dev/zh/config/dev/asset-prefix#boolean-%E7%B1%BB%E5%9E%8B

export default defineConfig({
  plugins: [pluginReact()],
  server: {
    port: 3001,
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
  },
  dev: {
    assetPrefix: true,
    client: {
      // host: '127.0.0.1',
      port: String(3001),
    },
  },
  tools: {
    rspack: {
      output: {
        // clean: process.env.NODE_ENV === 'development' ? false : true,
        // 需要配置成 umd 规范
        libraryTarget: 'umd',
        // 修改不规范的代码格式，避免逃逸沙箱
        globalObject: 'window',
      },
    },
  },
})
