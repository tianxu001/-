// 定义的路由文件，根据匹配的路径进行相应的操作


const express=require('express');
const pool=require('../pool/pool.js');
// 创建shop路由
const shop=express.Router();


//请求详情页的数据
shop.get("/detail",(req,res)=>{
    let did=req.query.did
    let sql="SELECT * FROM details_sort WHERE did=?"
    pool.query(sql,[did],(err,result)=>{
        if(err) throw err
        let sql="SELECT *FROM details WHERE spid=?"
        pool.query(sql,[did],(err,results)=>{
            if(err) throw err
            let sql="select * FROM img_details WHERE lid=?"
            pool.query(sql,[did],(err,img)=>{
                if(err) throw err
                res.send({
                    sort:result,
                    results:results,
                    img:img
                })
            })
        })
    })
})
// 
shop.get('/sort_id',(req,res)=>{
    let fid=req.query.fid
    let sql='SELECT * FROM details_sort WHERE fid=?'
    pool.query(sql,[fid],(err,sort)=>{
        if(err) throw err
        res.send(sort)
    })
})

// 编辑地址
shop.post('/address',(req,res)=>{
    let user_id=req.body.user_id
    let receiver=req.body.receiver
    let province=req.body.province
    let address=req.body.address
    let cellphone=req.body.cellphone 
    let is_default=req.body.is_default
	// console.log(req.body)
    let sql='INSERT INTO dewu_address (user_id,receiver,province,address,cellphone,is_default) VALUES (?,?,?,?,?,?)'
    pool.query(sql,[user_id,receiver,province,address,cellphone,is_default],(err,result)=>{
        if(err) throw err
        if(result.affectedRows>0){
            res.send('1')
        }else{
            res.send('0')
        } 
    })
})
shop.post('/upadd',(req,res)=>{
    // let user_id=req.body.user_id
    let receiver=req.body.receiver
    let province=req.body.province
    let address=req.body.address
    let cellphone=req.body.cellphone 
    let is_default=req.body.is_default
    let aid=req.body.aid
    let sql='UPDATE dewu_address SET receiver=?,province=?,address=?,cellphone=?,is_default=? WHERE aid=?'
    pool.query(sql,[receiver,province,address,cellphone,is_default,aid],(err,result)=>{
        if(err) throw err
        if(result.affectedRows>0){
            res.send('1')
        }else{
            res.send('0')
        } 
    })
})
shop.get('/adr',(req,res)=>{
    let user_id=req.query.user_id
    let sql='SELECT * FROM dewu_address WHERE user_id=?'
    pool.query(sql,[user_id],(err,ress)=>{
        if(err ) throw err
        res.send(ress)
    })
})
shop.get('/class',(req,res)=>{
    let sql='SELECT adid,asort_id,all_img,all_brand,all_id FROM all_details WHERE asort_id=?'
    let id=req.query.asort_id;
    pool.query(sql,[id],(err,results)=>{
        if(err) throw err;
        res.send({message:'查询成功',code:1,results:results}

        );
    });
})
shop.get('/shopping_shoesort',(req,res)=>{
    let sql='SELECT sid,smessage,simg FROM shoes_sort '
    pool.query(sql,(err,results)=>{
        if(err) throw err;
        res.send({message:'查询成功',code:1,results:results}
        );
    });
  })
  shop.get('/shopping_watchsort',(req,res)=>{
    let sql='SELECT wid,wmessage,wimg FROM watch_sort '
    let id=req.query.wid;
    pool.query(sql,(err,results)=>{
        if(err) throw err;
        res.send({message:'查询成功',code:1,results:results}
        );
    });
  })


// 查出购买页面的推荐页的数据
  shop.get('/sort',(req,res)=>{
    let sql='SELECT * FROM details_sort'
	console.log(sql)
    pool.query(sql,(err,sort)=>{
        if(err) throw err
        res.send(sort)
    })
  })



  shop.get('/del',(req,res)=>{
      let aid=req.query.aid
    //   console.log(req.query.aid)
     let sql='DELETE FROM dewu_address WHERE aid=?'
      pool.query(sql,[aid],(err,result)=>{
        //   console.log(1)
          if(err) throw err
          if(result.affectedRows>0){
            res.send('1')
          }else{
              res.send('0')
          }
      })
  })
  shop.get('/pay_detail',(req,res)=>{
      let spid=req.query.did
      let specs=req.query.size
    let sql='SELECT * FROM details WHERE spid=? AND specs=?'
    pool.query(sql,[spid,specs],(err,result)=>{
        if(err) throw err
        res.send(result)
        // console.log(1)
    })
})
  shop.post('/pay',(req,res)=>{
      let user_id=req.body.user_id
      let address_id=req.body.address_id
      let status=req.body.status
    //   console.log(status)
      let order_time=req.body.der_time
      let product_id=req.body.product_id
      let sql='INSERT INTO dewu_order (user_id,address_id,status,order_time,product_id) VALUES (?,?,?,?,?)'
      pool.query(sql,[user_id,address_id,status,order_time,product_id],(err,result)=>{
          if(err) throw err
        //   res.send(result)
        let sql='SELECT order_time FROM dewu_order WHERE user_id=?'
        pool.query(sql,[user_id],(err,result)=>{
            if(err) throw err
            res.send (result)
        })
      })
  })
  shop.get('/order_detail',(req,res)=>{
    let sdid=req.query.sdid
    let sql='SELECT * FROM details WHERE sdid=?'
    pool.query(sql,[sdid],(err,result)=>{
        if(err) throw err
        res.send (result)
    })
  })

  //待付款
  shop.get('/order_sort',(req,res)=>{
    let did=req.query.did
    let sql='SELECT * FROM details_sort WHERE did=?'
    pool.query(sql,[did],(err,result)=>{
        if(err) throw err
        res.send (result)
    })
  })
  shop.post('/cancel',(req,res)=>{
    let user_id=req.body.user_id
    let status=req.body.status 
    let sql='SELECT aid FROM dewu_order WHERE user_id=? AND status=? '
    pool.query(sql,[user_id,status],(err,result)=>{
        if(err) throw err
    let sql='UPDATE dewu_order SET status=0 WHERE user_id=? AND status=?'
     pool.query(sql,[user_id,status],(err,results)=>{
         if(err) throw err
         res.send(result)
     })
    })
  })
  shop.get('/status',(req,res)=>{
    let user_id=req.query.user_id
    let status=req.query.status 
    let sql='SELECT * FROM dewu_order WHERE user_id=? AND status=? '
    pool.query(sql,[user_id,status],(err,result)=>{
        if(err) throw err
         res.send(result)
    })
  })
  shop.get('/det-order',(req,res)=>{
    let aid=req.query.aid
    let sql='DELETE FROM dewu_order WHERE aid=?'
    pool.query(sql,[aid],(err,result)=>{
        if(err) throw err
        if(result.affectedRows>0){
            res.send('1')
          }else{
              res.send('0')
          }
    })
  })
  shop.post('/order_details',(req,res)=>{
    let order_id=req.body.order_id
    let product_id=req.body.product_id
    let count=req.body.count
    let sql='INSERT INTO dewu_order_detail (order_id,product_id,count) VALUES (?,?,?)'
    pool.query(sql,[order_id,product_id,count],(err,result)=>{
        if(err) throw err
        res.send(result)
    })
})

// 收藏商品
shop.post('/collect',(req,res)=>{
    let user_id=req.body.user_id
    let product_id=req.body.product_id
    let sql='INSERT INTO user_collect (user_id,product_id) VALUES (?,?)'
    pool.query(sql,[user_id,product_id],(err,result)=>{
        if(err) throw err
        res.send(result)
    })
})

// 取消收藏
shop.get('/del_collect',(req,res)=>{
    let user_id=req.query.user_id
    let product_id=req.query.product_id
    let sql='DELETE FROM user_collect WHERE user_id=? AND product_id=? '
    pool.query(sql,[user_id,product_id],(err,result)=>{
        if(err) throw err
        res.send(result)
    })
})
// 得到收藏
shop.get('/get_collect',(req,res)=>{
    let user_id=req.query.user_id
    let product_id=req.query.product_id
    let sql='SELECT * FROM user_collect WHERE user_id=? AND product_id=? '
    pool.query(sql,[user_id,product_id],(err,result)=>{
        if(err) throw err
        res.send(result)
    })
})

// 得到所有的收藏商品
shop.get('/getAll_collect',(req,res)=>{
    let user_id=req.query.user_id
    let sql='SELECT * FROM user_collect WHERE user_id=?'
    pool.query(sql,[user_id],(err,result)=>{
        if(err) throw err
        res.send(result)
    })
})
// 全部订单
shop.get('/my_order',(req,res)=>{
    let user_id=req.query.user_id
    let sql='SELECT * FROM dewu_order WHERE user_id=?'
    pool.query(sql,[user_id],(err,result)=>{
        if(err) throw err
        res.send(result)
    })
})
shop.get('/get_aid',(req,res)=>{
    let aid=req.query.aid
    let sql='SELECT * FROM dewu_order WHERE aid=? '
    pool.query(sql,[aid],(err,result)=>{
        if(err) throw err
         res.send(result)
    })
  })
  // 获取关注人的名单
shop.get('/attentioner',(req,res)=>{
    // let sql="SELECT id,avatarImg,nickname,autograph,count FROM users_msg";
    // pool.query(sql,(err,result)=>{
    //     if(err) throw err;
    //     res.send(result);
    // })
	console.log('获取关注人名单')
});
shop.delete('/del/:id',(req,res)=>{
    let id=req.params.id;
    let sql="DELETE FROM users_msg WHERE id=?";
    pool.query(sql,[id],(err,result)=>{
        if(err) throw err;
        res.send(result);
    })
})
shop.get('/dele',(req,res)=>{
    let id=req.query.id;
    let sql="DELETE FROM users_msg WHERE id=?";
    pool.query(sql,[id],(err,result)=>{
        if(err) throw err;
        res.send(result);
    })
})
module.exports=shop;