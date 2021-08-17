const express = require('express');
const router = express();
const path = require('path');

const styleConverted = require('../index.js');

const folderScss = path.resolve( __dirname, "..", "build", "scss");
const fileScssPath = `${folderScss}/_variables.scss`;
router.get('/design-token/scss', function (req, res) {
    styleConverted.buildPlatform('scss');
    res.sendFile(fileScssPath);
})

const folderLess = path.resolve( __dirname, "..", "build", "less");
const fileLessPath = `${folderLess}/_variables.less`;
router.get('/design-token/less', function (req, res) {
    styleConverted.buildPlatform('less');
    res.sendFile(fileLessPath);
})

module.exports = router;