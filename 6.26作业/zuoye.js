// 需求：id为1的这一项 name 修改成"香蕉"  读 写
//先读取json 要先转对象 
let path = require("path");
let fs = require("fs");
let fsPromise = fs.promises;
let filename = path.join(__dirname,"info.json");//路径
fsPromise.readFile(filename,"utf-8").then(data=>{
    //console.log(data);//读取出来的是json 转成能操作的对象
    data = JSON.parse(data);//是数组
    for(key in data){
        if(data[key].id === 1){
            data[key].name = "香蕉"
        }
    }
    //写入数据的时候要把对象转成json
    fsPromise.writeFile(filename,JSON.stringify(data),'utf-8')
})