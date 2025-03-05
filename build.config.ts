import fs from 'node:fs'
import path from 'node:path'
import { defineBuildConfig } from 'unbuild'

export default defineBuildConfig({
  entries: ['src/index.js'],
  declaration: true,
  clean: true,
  rollup: {
    esbuild: {
      loaders: {
        '.js': 'jsx',
      },
      jsx: 'automatic',
      jsxImportSource: 'react',
    },
  },
  externals: ['react', 'react-dom'],
  hooks: {
    'build:done': (ctx) => {
      const indexPath = path.join(ctx.options.outDir, 'index.mjs')

      if (fs.existsSync(indexPath)) {
        const content = fs.readFileSync(indexPath, 'utf8')
        fs.writeFileSync(indexPath, `'use client'\n${content}`)
        console.log('Successfully prepended "use client" to index.mjs')
      }
    },
  },
})
