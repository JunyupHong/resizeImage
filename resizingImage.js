const sharp = require('sharp');
const fs = require('fs');

// sharp('./raw/2A7A6090.JPG').resize(100, 100).embed().toFile('test.JPG');



exports.resize = (width, height, from, to, size) => {

    const executeResize = () => {
        for (let i = 0; i < rawFiles.length; i++) {
            const fileName = rawFiles[i].split('.')[0];

            sharp(`./${from}/${rawFiles[i]}`)
                .rotate()
                .resize(width, height)
                .toFile(`./${to}/${fileName}_${size}.jpg`);
        }
    };


    const rawFiles = fs.readdirSync(`${from}`);
    fs.mkdir(`./${to}`, function (err) {
        if(err) ;
        executeResize();
    });



};




