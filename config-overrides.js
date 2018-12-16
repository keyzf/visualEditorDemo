/*
 * @Author: zengjian 
 * @Date: 2018-12-10 20:20:18 
 * @Last Modified by: zengjian
 * @Last Modified time: 2018-12-10 20:23:35
 */
const {injectBabelPlugin} = require('react-app-rewired');

module.exports = function override(config,env) {
    config = injectBabelPlugin(
        ['import',{libraryName:'antd',libraryDirectory:'es',style:'css'}],
        config,
    );
    return config;
}