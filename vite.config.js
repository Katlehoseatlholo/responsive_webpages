import handlebars from 'vite-plugin-handlebars';
import datafile from './public/data.json';
import { defineConfig } from 'vite';

export default defineConfig({
  base : '/responsive_webpages/',
  build: {
      rollupOptions: {
          input : {
              main: 'index.html',
              one: 'index-bootstrap.html',
             
          }
      },
  },
  plugins: [handlebars({
    context : {
      datafile
    }
})]
  
});