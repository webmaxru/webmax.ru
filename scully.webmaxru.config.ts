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
    executablePath: '../node_modules/puppeteer/.local-chromium/linux-650583/chrome-linux/chrome'
  }
};