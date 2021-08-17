const StyleDictionary = require('style-dictionary');

module.exports = {
    'custom/scss': {
        name: 'custom/scss',
        transforms: StyleDictionary.transformGroup['scss'].concat([
          'type/px',
          'type/rem',
        ]),
    },
    'custom/less': {
        name: 'custom/less',
        transforms: StyleDictionary.transformGroup['less'].concat([
          'type/px',
          'type/rem',
        ]),
    }
}