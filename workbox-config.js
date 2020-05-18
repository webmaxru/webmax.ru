module.exports = {
    "globDirectory": "dist/static",
    "globPatterns": [
      "blog/**/*.html",
      "assets/**/*.*",
      "manifest/**/*.*",
      "*.html",
      "*.{jpg,png,eot,svg,ttf,woff,woff2}"
    ],
    "swDest": "dist/static/sw.js",
    "swSrc": "src/sw.js"
  };