// Triangle Perimeter Assignment Start Code
// link button to function






document.getElementById("button").addEventListener("click", calculate);

//getting the coordinates
  //Vertex A
let Xa = document.getElementById("Xa").innerHTML
let Ya = document.getElementById("Ya").innerHTML
  //Vertex B
let Xb = document.getElementById("Xb").innerHTML
let Yb = document.getElementById("Yb").innerHTML
  //Vertex C
let Xc = document.getElementById("Xc").innerHTML
let Yc = document.getElementById("Yc").innerHTML


//let html equals to result returned from the function calculated with variables
  //Line AB
document.getElementById("ab_legnth").innerHTML = dist(Xa, Ya, Xb, Yb)
  //Line BC
document.getElementById("bc_legnth").innerHTML = dist(Xb, Yb, Xc, Yc)
  //Line AC
document.getElementById("ac_legnth").innerHTML = dist(Xa, Ya, Xc, Yc)







function dist(x1, y1, x2, y2) {
  let y = y2-y1;
  let x = x2-x1
  let legnth =  Math. sqrt(y**2 + x**2);
  return(legnth)
}


function calcuate(x,y){
  let text =  Math. sqrt(y**2 + x**2);
  return (text)
}

/*
// function of calculating
function calculate(){
  // getting number
  let AC = +document.getElementById("AC").value;
  let BC = +document.getElementById("BC").value;
  let AB = +document.getElementById("AB").value;
  // process
  let output = AC + BC + AB ; 
  // output
  document.getElementById("output").innerHTML = output;
}
*/


