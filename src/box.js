const outputField1 = document.getElementById("numberOne");

const output = document.querySelector("div");

let value1=0;


outputField1.addEventListener("change",(diwakar)=>{
   value1 = diwakar.target.value;
   output.innerText= (9/5)*Number(value1)+32 ;
})

