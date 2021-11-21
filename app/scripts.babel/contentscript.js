'use strict';
import {Logger} from "./utilsjs/logjs.js"
var logger = new Logger("main", true);
console.log("/-----------------------/");
console.log("Start test with out tag and timestamp");
logger.message('test');
logger.info('test');
logger.data('test');
logger.success('test');
logger.warning('test');
logger.failur('test');
logger.fatal('fatal');
logger.error('test');
console.log("/-----------------------/");
console.log('hello4')