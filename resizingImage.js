const sharp = require('sharp');
const fs = require('fs');
const sizeOf = require('image-size');


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


exports.resizeByPercent = (percent, from, to, form) => {
    let widthList = [];

    const array = () => {

        for (let i = 0; i < rawFiles.length; i++) {
            const imageSize = sizeOf(`./${from}/${rawFiles[i]}`);
            widthList.push({
                width: imageSize.width,
                height: imageSize.height
            });
        }

    };


    const executeResize = () => {

        for (let i = 0; i < rawFiles.length; i++) {
            const fileName = rawFiles[i].split('.')[0];
            console.log(fileName);
            sharp(`./${from}/${rawFiles[i]}`)
                .rotate()
                .resize(widthList[i].width * percent, widthList[i].height * percent)
                .toFile(`./${to}/${fileName}_medium.${form}`)
                .then(function () {
                    console.log(i);
                });

        }

    };

    const rawFiles = fs.readdirSync(`${from}`);


    fs.mkdir(`./${to}`, function (err) {
        if (err) ;
        array();
        executeResize();
    });
};