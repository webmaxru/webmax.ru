import { ScullyConfig } from '@scullyio/scully';
const {DisableAngular} = require('scully-plugin-disable-angular');

const postRenderers = [DisableAngular];


export const config: ScullyConfig = {
  projectRoot: "./src",
  projectName: "webmaxru",
  outDir: './dist/static',
  defaultPostRenderers: postRenderers,
  routes: {
    '/blog/:slug': {
        type: 'contentFolder',
        slug: {
            folder: "./blog"
        }
    },
},
  puppeteerLaunchOptions: {
    args: ['--no-sandbox']
  }
};