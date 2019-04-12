
/**
 * 
 * JavaScript允许直接对变量赋值而无需事先声明

 *  声明变量名 允许添加下划线

    弱类型语言

    *** 关联数组 ****
 */

var age = 33;

age = "thirty three";

var sleeping = true;

var beatles = Array();

var beatles2 = Array(3);

beatles[0] = "John";

var lemon = ["John", 1930, false];

var lennon = Object();
lennon.name = "John";
lennon.year = 1940;
lennon.living = true;

// print(lennon);

// console.log(lennon);

var lennon2 = {name:"john", year:1940, living: true};

var beatlesLennon = [lennon2];

// beatlesLennon[0].name

// alert("Hello world")

//循环语句 

var count = 1;
while(count < 110){
    count++;
}

function shout(){
    var beat = ["john","palu","george"];
    for(var count = 0; count < beat.count; count++){
        console.log(beat[count])
    }
}



/* 
  变量的作用域
 
  全局变量  局部变量

*/



/*
  对象 
*/

// var jeremy = new Person;

/** 
 *  DOM   D: 文档 O: 对象 M:Model
 * 
 *  五个常用DOM方法： 
 * getElementByID
 * 
 * getElementsByTagName
 * 
 * getElementsByClassName
 * 
 * getAttribute
 * 
 * setAttribute
 * 
*/

/** 
 *   nodeValue  用来得到和设置一个节点的值
 *   
 *   firstChild 第一个子节点
*/

function showPic(whichPic){
    var source = whichPic.getAttribute("href");
    var placeholder = document.getElementById("placeholder");
    placeholder.setAttribute("src", source);

    var text = whichPic.getAttribute("title");
    var description = document.getElementById("description");
    description.firstChild.nodeValue = text;
    // alert(text)


}



/**
 *  childNodes  获取元素的所有子元素 包含元素本身
 * 
 * 
 * 
 */

 function countBodyChildren(){
     var body_element = document.getElementsByTagName("body")[0];
    //  alert(body_element.nodeType);

 }


 func popUp(winURL){
     window.open(winURL, "popup", "width=320,height=480")
 }

window.onload = countBodyChildren;

