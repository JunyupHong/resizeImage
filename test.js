const resizingImage = require('./resizingImage');

// resizingImage.resize(100, 100, './rawFile', './midiumThumbnail', 'midium');
// resizingImage.resize(50, 50, './rawFile', './smallThumbnail', 'small');

// resizingImage.resizeByPercent(0.5, './rawFile', './test', 'png');

resizingImage.resizeByPercent(0.25, './rawFile', './test', 'jpg');

console.log();