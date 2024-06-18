let x = document.getElementById("ele1");
x.addEventListener("mouseenter", function(){
    x.style.color = "yellow";
    x.style.backgroundColor = "red";
});

x.addEventListener("mouseleave", function(){
    x.style.color = "black";
    x.style.backgroundColor = "purple";
});

let y = document.getElementById("ele2");
x.addEventListener("click", function(){
    y.style.color = "green";
    y.style.backgroundColor = "pink";  // Should be y.style.backgroundColor
});

let z = document.getElementById("ele3");
y.addEventListener("click", function(){
    x.innerHTML = "RATNESH";  // Corrected assignment
    z.style.color = "yellow";  // Fixed missing quotation mark
    z.style.backgroundColor = "red";
});
