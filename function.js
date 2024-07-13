
// 用函数实现选定动物的叫声

function dongWu(n){

   switch(n){
    case "dog":
    return "汪汪汪";
    case "cat":
    return "喵喵";
    case "bird":
    return "叽叽喳喳";
   }
}

console.log(dongWu("bird"));


// 用函数实现加法计数器

function add(){
var sum = 0;
for(i = 0 ; i < arguments.length; i++)
{
sum += arguments[i];
}
console.log(sum);

}

add(1,1);


// 用函数递归实现n的阶乘

function nnn(n){
    if(n == 1 || n == 0){
       return 1; 
    }
    return n * nnn(n-1);
    
}
console.log(nnn(5));



// 用函数递归实现斐波那契数列


function fbnq(n){
   
 if(n == 1){
   return 0;
}
else if(n == 2){
   return 1;
}
   return fbnq(n-1) + fbnq(n-2);
}

console.log(fbnq(4));


// 定义一组函数，输入数字，使其反向输出并输出中文形式

function numb(){
var n = window.prompt('input');
var m = "" ;
for(var i = n.length - 1;i >= 0 ; i--){
  m += chinese(n[i]);

}
console.log(m);
}
numb();

function chinese(c){
switch(c){
    case "0":
    return "零";
    case "1":
    return "一";
    case "2":
    return "二";
    case "3":
    return "三";
    case "4":
    return "四";
    case "5":
    return "五";
    case "6":
    return "六";
    case "7":
    return "七";
    case "8":
    return "八";
    case "9":
    return "九";
}

}



// 函数中预编译过程:
// 1.创建AO(activation object)对象(全局执行上下文)
// 2.找形参和变量声明，将形参名和变量作为AO对象的属性名，值为undefined 
// 3.将实参值和形参统一
// 4.在函数体里找函数声明，将函数名作为AO对象的属性名，值为函数体

function fn(a){
   console.log(a);  // function a(){}
var a = 1;
console.log(a);  // 1
function a(){}  
console.log(a);  // 1
var b = function (){}
console.log(b);  // function (){}
function d(){}

}

fn(1)


// AO {
//    // 形参和变量声明
//    a: 1
//    b: function (){},
//    d: function d(){}
// }


// 全局预编译过程：
// 1.创建GO(global object)对象(全局执行上下文)
// 2.
// 3.