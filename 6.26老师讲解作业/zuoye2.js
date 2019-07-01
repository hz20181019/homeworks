let fs = require('fs')
let fsPromise = fs.promises;
let path = require('path')
let filename = path.resolve(__dirname,'info.json')//绝对路径
fsPromise.readFile(filename,"utf-8").then(data=>{
    data = JSON.parse(data);//good数组
    console.log(data);
    let newarray = data.map(itwm=>{
        if(item.id===1){
           item.name="香蕉"
        }
            return item;
    })
    fsPromise.writeFile(filename,JSON.stringify(newarray),'utf-8')
})