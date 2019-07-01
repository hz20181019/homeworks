// // url查询字符串转对象
// //let urlstr = location.search
// let urlstr = '?name=1&age=3'
// function UrltoObj(str){
//     str = str.slice(1)//拿问号后面的参数
//     strary = str.split("&")
//     // strary  ['name=1','age=3']
//     let obj ={}
//     strary.forEach(item => {
//         item = item.split("=")
//         // [name:1] [age:3] 数组的第0项是key, 第一项是value
//         // item ['name','1'],['age','3']
//         obj[item[0]] = item[1] // obj {name:"1",age:"3"}
//     });
//     return obj
// }
// let res = UrltoObj(urlstr);
// console.log(res);

// for of方法
let urlstr = '?name=1&age=3'
function UrltoObj(str){
    str = str.slice(1)//拿问号后面的参数
    strary = str.split("&")
    // strary  ['name=1','age=3']
    let obj ={}
    for(item of strary){
       item = item.split("=")
       obj[item[0]] = item[1]
    }
    return obj;
}
let res = UrltoObj(urlstr);
console.log(res);