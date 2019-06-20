const koa = require('koa');
const koaBody = require('koa-body');
const router = require('koa-router')();
const fs = require('fs');
const static = require('koa-static');
const path = require('path');
const app = new koa();

app.use(koaBody({
  multipart:true,
  formidable:{
    maxFieldsSize:2 * 1024 * 1024, //最大支持2M
    // @ts-ignore
    multipart: true // 是否支持 multipart-formdate 的表单
  }
}))
app.use(static(path.join(__dirname)));

router.get('/',(ctx) =>{
  ctx.type = 'html';
  const pathUrl = path.join(__dirname,'/static/upload.html');
  ctx.body = fs.createReadStream(pathUrl);
})

router.post('/upload',(ctx)=>{
  const file = ctx.request.files[''];
  //读取文件流
  const fileReader = fs.createReadStream(file.path);
  const filepath = path.join(__dirname,'static/upload/');

  //组装成绝对路径
  const fileResoure = filepath + `/${file.name}`;

  /*
  * 使用createWriteStream写入数据，然后使用管道pipe拼接
  */
 const writeStream = fs.createWriteStream(fileResoure);

 //判断/static/upload文件夹是否存在，如果不在的话就创建一个
 if(!fs.existsSync(filepath)){
   fs.mkdir(filepath,(err)=>{
     if(err){
       throw new Error(err);
     }else{
       fileReader.pipe(writeStream);
       ctx.body = {
         url:`http://localhost:3001/static/upload/${file.name}`,
         code:200,
         message:'上传成功'
       }
     }
   })
 }else{
   fileReader.pipe(writeStream);
   ctx.body = {
    url:`http://localhost:3001/static/upload/${file.name}`,
    code:200,
    message:'上传成功'
  }
 }
});
app.use(router.routes());
app.use(router.allowedMethods());
app.listen(3001, () => {
  console.log('server is listen in 3001');
});