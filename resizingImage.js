const sharp = require('sharp');
const fs = require('fs');


exports.resize = (width, height, from, to, form, size) => {

    const executeResize = () => {
        for (let i = 0; i < rawFiles.length; i++) {
            const fileName = rawFiles[i].split('.')[0];

            sharp(`./${from}/${rawFiles[i]}`)
                .rotate()
                .resize(width, height)
                .toFile(`./${to}/${fileName}_${size}.${form}`);
        }
    };


    const rawFiles = fs.readdirSync(`${from}`);


    fs.mkdir(`./${to}`, function (err) {
        if (err) ;
        executeResize();
    });


};


exports.resizeByPercent = (percent, imageWidth, imageHeight, fileName, from, to, form) => {
    fs.mkdir(`./${to}`, function (err) {
        if (err) ;
        sharp(`./${from}/${fileName}`)
            .rotate()
            .resize(imageWidth * percent, imageHeight * percent)
            .toFile(`./${to}/${fileName}_midium.${form}`);
    });
};




