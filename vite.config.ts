import { defineConfig } from 'vite';
import handlebars from 'vite-plugin-handlebars';
import dns from 'dns';
import { resolve } from 'path';

dns.setDefaultResultOrder('verbatim');

export default defineConfig({
  // @ts-expect-error
  // @typescript-eslint/ban-ts-comment
  // vite-plugin-handlebars 1.6.0
  plugins: [handlebars()],
  build: {
    outDir: 'dist',
  },
  server: {
    port: 3000,
  },
  resolve: {
    alias: [{ find: '@', replacement: resolve(__dirname, './src') }],
  },
});
