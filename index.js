let msg = document.getElementById('msg');
let done = document.getElementById('done');
let item = document.getElementById('item');





function order(){
    let selectAll = document.querySelector("#menu");
    let selected = selectAll.value;
  
    msg.innerHTML = `Your oder is ${selected} :`;
   
    done.innerHTML = "<h1>✅ ORDER DONE </h1> <button id='add' onclick='add()'> add + </button>"


}
 

let num = 1
function add() {
    num ++;
    document.getElementById("item").innerText = num;
}






  
