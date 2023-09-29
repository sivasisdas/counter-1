const counter = document.querySelector("h1");
const plus = document.getElementById("plus");
const minus = document.getElementById("minus");
const reSet = document.getElementById("reset");

let count = 0;

plus.addEventListener("click",()=>{
    if(count>=0){count++;
    counter.textContent=`${count}`}
    
});



minus.addEventListener("click",()=>{
    
    if(count>0){
        count--;
        counter.textContent=`${count}`}
    
});




reSet.addEventListener("click",()=>{
    count=0;
    counter.textContent=`${count}`
});



