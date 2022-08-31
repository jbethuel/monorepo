import { defineConfig } from 'tsup';

export default defineConfig({
  outDir: 'build',
  format: ['esm', 'cjs'],
  dts: true,
  entry: ['./src/index.ts'],
});
