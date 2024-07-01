import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import UniPages from '@uni-helper/vite-plugin-uni-pages'
import UniLayouts from '@uni-helper/vite-plugin-uni-layouts'
import UniPlatform from '@uni-helper/vite-plugin-uni-platform'
import uni from '@dcloudio/vite-plugin-uni'
import UniMiddleware from '@uni-helper/vite-plugin-uni-middleware'
import UniPlatformModifier from '@uni-helper/vite-plugin-uni-platform-modifier'
import UniManifest from '@uni-helper/vite-plugin-uni-manifest'
import Components from '@uni-helper/vite-plugin-uni-components'
import { UniUIResolver } from '@uni-helper/vite-plugin-uni-components/resolvers'

export default defineConfig(async () => {
  const UnoCSS = (await import('unocss/vite')).default

  return {
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url))
      }
    },
    plugins: [
      // https://github.com/uni-helper/vite-plugin-uni-pages
    UniPages(),
      // https://github.com/uni-helper/vite-plugin-uni-layouts
    UniLayouts(),
      // https://github.com/uni-helper/vite-plugin-uni-platform
    UniPlatform(),
      uni(),
      UnoCSS(),
      // https://github.com/uni-helper/vite-plugin-uni-middleware
    UniMiddleware(),
      // https://github.com/uni-helper/vite-plugin-uni-platform-modifier
    UniPlatformModifier(),
      // https://github.com/uni-helper/vite-plugin-uni-manifest
    UniManifest(),
      Components({
      dts: true,
      resolvers: [UniUIResolver()]
    }),
    ],
    build: {
    target: 'es6',
    cssTarget: 'chrome61',
  },
  optimizeDeps: {
    exclude: [
      'vue-demi',
    ],
  },  }
})



