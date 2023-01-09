'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  // VUE_BASE_URL: '"http://localhost:8080"',
  VUE_BASE_URL: '"http://g5.guodata.com:3389"',

})
