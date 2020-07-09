const { resolve } = require('path');

module.exports = {
  webpack: {
    alias: {
      '@': resolve(__dirname, 'src/'),
    },
  },
};
