import { ScullyConfig } from '@scullyio/scully';
export const config: ScullyConfig = {
  projectRoot: "./src",
  projectName: "webmaxru",
  outDir: './dist/static',
  routes: {
    '/blog/:slug': {
        type: 'contentFolder',
        slug: {
            folder: "./blog"
        }
    },
},
  puppeteerLaunchOptions: {
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
    ignoreDefaultArgs: true
  }
};