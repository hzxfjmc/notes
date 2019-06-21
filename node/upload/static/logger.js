const winston = require('winston');

const logger = winston.createLogger({
  //输出日志等级小于该设定值时输出,"info,erro,verbose“等
  level:'info',
  //日志等级定义，默认为自带等级设定
  levels: winston.config.npm.levels,
  //对输出信息进行格式化
  // @ts-ignore
  format: winston.format.json,
  //日志信息输出到哪里，例如某个文件或者命令行,默认[]
  transports:[
      new winston.transports.Console(),
      new winston.transports.File({ filename: 'combined.log' })
  ],
  //exceptions 是否会出导致 process.exit, 设为false不会
  exitOnError:true,
  //为true时所有日志不输出
  silent:false
})