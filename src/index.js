const config = require('./config/config.json');
const transforms = require('./config/transforms.js');
const transformGroups = require('./config/transformGroups.js');
const StyleDictionary = require('style-dictionary');

const styleConverted = StyleDictionary
  .extend(config)
  .registerTransform(transforms['type/px'])
  .registerTransform(transforms['type/rem'])
  .registerTransformGroup(transformGroups['custom/scss'])
  .registerTransformGroup(transformGroups['custom/less']);

module.exports = styleConverted;