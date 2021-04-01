var students=[];

function submit(){
for(var i=1; i <=6; i++){
var name_of_students= document.getElementById("Student_"+i).value;
students.push(name_of_students);
}

console.log(students);

var items=[];

for(var j=0; j<students.length; j++){
    items.push( students[j] );

}




console.log(items);



var without_comma= items.join(". ");
document.getElementById("with_comma").innerHTML=without_comma;




}


var students2=[];

function submit2(){
for(var i=7; i <=12; i++){
var name_of_students2= document.getElementById("Student_"+i).value;
students2.push(name_of_students2);
}

console.log(students2);

var items2=[];

for(var j=0; j<students2.length; j++){
    items2.push( students2[j] );

}




console.log(items2);



var without_comma2= items2.join(". ");
document.getElementById("with_comma2").innerHTML=without_comma2;




}

