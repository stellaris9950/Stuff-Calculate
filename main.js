// Triangle Perimeter Assignment Start Code
// link button to function
document.getElementById("button").addEventListener("click", calculate);

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
