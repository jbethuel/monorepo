import { defineConfig } from 'tsup';

export default defineConfig({
  outDir: 'build',
  format: ['cjs'],
  entry: ['./src/index.ts'],
});
