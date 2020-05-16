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
    executablePath: '/bin/staticsites/ss-oryx/app-int/node_modules/puppeteer/.local-chromium/linux-722234/chrome-linux/chrome --no-sandbox'
  }
};