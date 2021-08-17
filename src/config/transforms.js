module.exports = {
    'type/px': {
        name: 'type/px',
        type: 'value',
        matcher: function(token) {
          return token.unit === 'pixel' && token.value !== 0
        },
        transformer: function(token) {
          return `${token.value}px`
        }
    },
    'type/rem': {
        name: 'type/rem',
        type: 'value',
        matcher: function(token) {
          return token.unit === 'rem' && token.value !== 0
        },
        transformer: function(token) {
          return `${token.value}rem`
        }
    }
}