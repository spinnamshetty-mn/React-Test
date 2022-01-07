const getConfig = require('@modeln/modn-ui/craco.config');
const config = getConfig({nodeModulesPath:'.'});
module.exports={ eslint: {
    enable: false
  },...config};