import { defineConfig } from 'vite';
import handlebars from 'vite-plugin-handlebars';
import dns from 'dns';

dns.setDefaultResultOrder('verbatim');

export default defineConfig({
  //@ts-ignore
  plugins: [handlebars()],
   build: {
    outDir: 'dist'
   },
   server: {
    port: 3000,
  },
})
