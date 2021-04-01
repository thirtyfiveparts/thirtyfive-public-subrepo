require('regenerator-runtime')
require('@babel/register')({extensions: ['.ts', '.js']})
require('./src/index').default().then()

