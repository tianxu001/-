// 引入路由文件之类的东西，node全局配置



const express=require('express');
const app=express();
const cors=require('cors')
const uuid=require('uuid');
const multer=require('multer');
const fs=require('fs');
const bodyParse=require('body-parser')

// 引入自定义路由组件
const shop=require('./router/shop.js');
const pool=require('./pool/pool.js');
app.use(express.static('./public'));
app.use(bodyParse.urlencoded({
    extended:false
}))


app.use(cors({
    origin:['http://127.0.0.1:8080','http://localhost:8080']
}))


app.listen(5050,()=>{
    console.log('server is running...')
});
// 2.制定自定义储存规则
let storage=multer.diskStorage({
    // 2.1设置上传目录的规则
    destination:function(req,file,cb){
        let d=new Date();
        let year=d.getFullYear();
        let month=d.getMonth()+1;
        let day=d.getDate();
        month=month<10?'0'+month:month;
        day=day<10?'0'+day:day;
        let path='public/img'+'/'+year+'-'+month+'-'+day;
        if(!fs.existsSync(path)){
            fs.mkdirSync(path,(error)=>{
                if(error) throw error;
            })
        }
        cb(null,path);
    },
    // 2.2设置上传文件名称的规则
    filename:function(req,file,cb){
        // 获取带有扩展名的被上传文件的原始名称
        // let filename=file.originalname;
        // 获取文件的扩展名
        // let extension=filename.substr(filename.lastIndexOf('.')).toLowerCase();
        // 利用uuid产生随机名，生成自定义文件名
        let mainname=uuid.v1()+'.png';
        // 让Multer按照程序的规定上传文件
        cb(null,mainname);
    }
});
// 1.根据自定义储存规则来创建Multer对象
const assets=multer({storage:storage})

// /login代表当请求axios的url执行的这个
app.post('/login',(req,res)=>{
    let tel=req.body.tel;
    let upwd=req.body.upwd;
    let sql="SELECT uid,uname,sex,avatar,autograph,tel,upwd,money FROM users WHERE tel=? AND upwd=?";
    pool.query(sql,[tel,upwd],(err,result)=>{
        if(err) throw err;
        if(result.length!==0){
            console.log(result[0]);
            res.send({code:1,msg:"登录成功",result})
        }else{
            res.send({code:0,msg:"手机号或者密码错误",result})
        }
    })
});
// assets.fields([{name:'avatar'},{name:"tel"}])
// 修改头像
app.post('/setAvatar/:tel', assets.single("avatar"),(req,res)=>{
    let tel=req.params.tel
    let imgPath=req.file;
    console.log(imgPath);
    // imgPath的信息
    //{
    //     fieldname: 'avatar',
    //     originalname: 'bac.jpg',
    //     encoding: '7bit',
    //     mimetype: 'image/jpeg',
    //     destination: 'public/img/2022-04-02',
    //     filename: '88e62b00-b256-11ec-a046-a9486c382c4f.png',
    //     path: 'public\\img\\2022-04-02\\88e62b00-b256-11ec-a046-a9486c382c4f.png',
    //     size: 178358
    //   }



    let sql="UPDATE users SET avatar=? WHERE tel=?";
    let path="..\\"+(imgPath.path).substr(imgPath.path.indexOf('\\')+1);
    console.log(path)
    path=path.replace(/\\/ig,'/').slice(3)
    console.log(path)

    // 更改登录用户的头像
    pool.query(sql,[path,tel],(err,result)=>{
        if(err) throw err;
        if(result.affectedRows!==0){
            let sql="SELECT uid,uname,sex,avatar,autograph,tel FROM users WHERE tel=?"

            // 查询更新后的数据
            pool.query(sql,[tel],(err,result)=>{
                if(err) throw err;
                if(result.length!==0){
                    res.send(result)
                }
            })
        }
    })
})
// 修改昵称
app.post('/setUname',(req,res)=>{
    let uname=req.body.uname;
    let tel=req.body.tel;
    let sql="UPDATE users SET uname=? WHERE tel=?";
    pool.query(sql,[uname,tel],(err,result)=>{
        if(err) throw err;
        if(result.affectedRows!==0){
            let sql="SELECT uid,uname,sex,avatar,autograph,tel FROM users WHERE tel=?"
            pool.query(sql,[tel],(err,result)=>{
                if(err) throw err;
                if(result.length!==0){
                    res.send(result)
                }
            })
        }
    })
})
// 修改性别
app.post('/setSex',(req,res)=>{
    let sex=req.body.sex;
    let tel=req.body.tel;
    let sql="UPDATE users SET sex=? WHERE tel=?";
    pool.query(sql,[sex,tel],(err,result)=>{
        if(err) throw err;
        if(result.affectedRows!==0){
            let sql="SELECT uid,uname,sex,avatar,autograph,tel FROM users WHERE tel=?"
            pool.query(sql,[tel],(err,result)=>{
                if(err) throw err;
                if(result.length!==0){
                    res.send(result)
                }
            })
        }
    })
})
// 修改签名
app.post('/setAutograph',(req,res)=>{
    let autograph=req.body.autograph;
    let tel=req.body.tel;
    let sql="UPDATE users SET autograph=? WHERE tel=?";
    pool.query(sql,[autograph,tel],(err,result)=>{
        if(err) throw err;
        if(result.affectedRows!==0){
            let sql="SELECT uid,uname,sex,avatar,autograph,tel FROM users WHERE tel=?"
            pool.query(sql,[tel],(err,result)=>{
                if(err) throw err;
                if(result.length!==0){
                    res.send(result)
                }
            })
        }
    })
})
// 注册
app.post('/reg',(req,res)=>{
    let phone = req.body.phone;
    let pwd = req.body.pwd;
    let sqlselect="SELECT tel FROM USERS WHERE tel=?"
    pool.query(sqlselect,[phone],(err,result1)=>{
        if(err) throw err;
        //该用户已存在
        // console.log(result1[0])
        if(result1[0]){
            // console.log(result1)
            res.send({code:0,msg:'改账户已存在,换个账户吧',result1})
        }
        // 该用户不存在时插入数据
        else{
            // console.log(result1)
            let money=10000;
            let sql = "INSERT INTO users (upwd,tel,money) VALUES (?,?,?)"
            pool.query(sql,[pwd,phone,money],(err,result)=>{
                if(err)throw err;
                if(result.affectedRows>0){
                    res.send({code:1,msg:"注册成功",result})
                }else{
                    res.send({code:0,msg:"注册失败",result})
                }
            })
        }
    })
})
app.get('/search/:search',(req,res)=>{
    let $search=req.params.search;
    let sql="SELECT did,d_price,dtitle,img FROM details_sort WHERE  dtitle like '%"+$search+"%' "
    pool.query(sql,[$search],(err,results)=>{
        if(err) throw err
        res.send(results)
    })
  })

// 付款
app.post('/paymoney',(req,res)=>{
    console.log(req.body);
    let paymeony=req.body.pay;
    let uid=req.body.uid;
    let order_time=req.body.order_time;

    // 查出余额
    let sql="SELECT money FROM users WHERE uid=?"
    pool.query(sql,[uid],(err,result)=>{
        if(err) throw err;
        if(result.affectedRows!==0){
            // 余额不足
            if(paymeony>result[0].money){
                res.send({code:0,msg:'余额不足'})
            }else{
                // 更新余额
                let sql="UPDATE users SET money=money-? WHERE uid=?";
                pool.query(sql,[paymeony,uid],(err,result)=>{
                    if(err) throw err;
                    if(result.affectedRows!==0){
                        let sql="UPDATE dewu_order SET status=0 where user_id=? AND order_time=?"
                        pool.query(sql,[uid,order_time],(err,result)=>{
                            if(err) throw err;
                            if(result.affectedRows!=0){
                                res.send({code:1,msg:'购买成功'})
                            }
                        })

                    }
                })
            }
        }
    })
})
  
// 根据路径分配页面
app.use('/shop',shop);