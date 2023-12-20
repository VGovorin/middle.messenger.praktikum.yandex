import { defineConfig } from 'vite';
import handlebars from 'vite-plugin-handlebars';

export default defineConfig({
  //@ts-ignore
  plugins: [handlebars()],
   build: {
    outDir: 'dist'
   }
})