const util = require('node:util')

global.TextEncoder = window.TextEncoder = util.TextEncoder;
