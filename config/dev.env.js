'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  VUE_BASE_URL: '"http://localhost:3000"',
  VUE_ALGORITHM_URL:'"http://172.17.0.5:5000"'
})
