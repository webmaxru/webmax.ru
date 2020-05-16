import { ScullyConfig } from '@scullyio/scully';
export const config: ScullyConfig = {
  projectRoot: "./src",
  projectName: "webmaxru",
  outDir: './dist/static',
  routes: {
  },
  puppeteerLaunchOptions: {
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
    headless: false,
    ignoreDefaultArgs: true
  }
};