// 导入mysql模块
const mysql=require('mysql');
// 创建连接池
const pool=mysql.createPool({
    host:'127.0.0.1',
    user:'root',
    port:'3306',
    password:'root',
    database:'dewu',
    connectionLimit:15
})
module.exports=pool;