import { Sequelize } from 'sequelize-typescript';
const path = require("path");
export class InitDbConfig{
  db:any
  constructor(){
    this.db = new Sequelize({
      database: 'blog',   //表名字
      dialect: 'mysql', //数据库类型
      host:'101.132.116.101',  //主机  localhost 
      username: 'root',  //用户名
      port:3308,  //端口号
      password: '123456',  //密码
      pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
      },
      modelPaths: [
        path.resolve(__dirname,'../models')   //表模型注入
      ],
      define: {
        underscored: false,
        freezeTableName: false,
        timestamps: false
      }
    });
  }
}


const InitDb = new InitDbConfig();  //实例化

InitDb.db.sync();  //初始化数据库建表
