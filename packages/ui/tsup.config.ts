import { defineConfig } from 'tsup';

export default defineConfig({
  outDir: 'build',
  format: ['esm', 'cjs'],
  dts: true,
  external: ['react'],
  entry: ['./src/index.tsx'],
});
