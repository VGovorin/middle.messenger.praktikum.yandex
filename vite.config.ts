import { defineConfig } from 'vite';
import handlebars from 'vite-plugin-handlebars';
import dns from 'dns';
import { resolve } from 'path';

dns.setDefaultResultOrder('verbatim');

export default defineConfig({
  plugins: [
    // @ts-expect-error: vite-plugin-handlebars v. 1.6.0 not update
    handlebars(),
  ],
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
