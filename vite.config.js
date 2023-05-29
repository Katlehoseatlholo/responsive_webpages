import handlebars from 'vite-plugin-handlebars';
import datafile from './public/data.json';
import { defineConfig } from 'vite';

export default defineConfig({
  base : '/responsive_webpages/',
  build: {
      rollupOptions: {
          input : {
              main: 'index.html',
              bootstrap: 'index-bootstrap.html',
              materialize: 'index-materialize.html',
          }
      },
  },
  plugins: [handlebars({
    context : {
      datafile
    }
})]
  
});