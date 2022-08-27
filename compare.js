var obj1 = {Name : "Anand",age : 30};
var obj2 = {Name : "Balaji",age : 32};
var obj3 = {Name : "Anand",age : 30};
//var object = [ obj1,obj2];
for(var key in obj1,obj2,obj3){
    obj1[key]===obj2[key]?console.log("true"):console.log("false");
    obj1[key]===obj3[key]?console.log("true"):console.log("false");
}