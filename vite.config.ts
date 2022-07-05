import { resolve } from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Components from 'unplugin-vue-components/vite'
import AutoImport from 'unplugin-auto-import/vite'
import Unocss from 'unocss/vite'
import VueI18n from '@intlify/vite-plugin-vue-i18n'
import Pages from 'vite-plugin-pages'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: [{
      find: '~',
      replacement: resolve(__dirname, 'src'),
    }],
  },
  plugins: [
    vue(),

    // https://github.com/antfu/unplugin-vue-components
    Components({
      dts: 'src/components.d.ts',
    }),

    // https://github.com/antfu/unplugin-auto-import
    AutoImport({
      imports: [
        'vue',
        'vue-i18n',
      ],
      dts: 'src/auto-imports.d.ts',
    }),

    // https://github.com/antfu/unocss
    // see unocss.config.ts for config
    Unocss(),

    // https://github.com/intlify/bundle-tools/tree/main/packages/vite-plugin-vue-i18n
    VueI18n({
      runtimeOnly: true,
      compositionOnly: true,
      include: [resolve(__dirname, '../src/locales')],
    }),

    // https://github.com/hannoeru/vite-plugin-pages
    Pages({
      extensions: ['vue'],
      exclude: ['**/components/*.vue'],
    }),
  ],
})
