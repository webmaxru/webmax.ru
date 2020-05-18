"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var DisableAngular = require('scully-plugin-disable-angular').DisableAngular;
var postRenderers = [DisableAngular];
exports.config = {
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
