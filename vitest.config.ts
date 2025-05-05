import { mergeConfig, defineConfig, configDefaults } from 'vitest/config'
import viteConfig from './vite.config'

export default mergeConfig(
  viteConfig,
  defineConfig({
    test: {
      fileParallelism: false,
      isolate: false,
      poolOptions: {
        forks: {
          isolate: false,
        },
      },
     // environment: 'jsdom',
      exclude: [...configDefaults.exclude],
    },
  }),
)