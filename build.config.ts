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
})
