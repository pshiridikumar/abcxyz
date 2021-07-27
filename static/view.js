menu = document.querySelector(".icon");
menu = document.querySelector(".menu");
ul = document.querySelector(".liel")
navbar = document.querySelector(".navbar");
let card = document.getElementsByClassName("card");




menu.addEventListener("click", () => {
    ul.classList.toggle("v-class");
    menu.classList.toggle("h-class");

})
var i;
Array.from(card).forEach(function(element) {
    element.addEventListener('mouseout', ()=>{
        var k=element;
        k.style="background:rgb(31, 28, 28);transition:0.5s;transform: scale(1);";
        var el=k.getElementsByTagName("p");
        el[0].style="color:white;transition:0.5s;transform:scale(1)";
        var img=k.getElementsByTagName("img");
        img[0].style="transform:scale(1);transition:0.5s";
    

    })
    element.addEventListener("mouseover", () => {
        var k = element
        console.log(k);
        console.log(i);
        
        k.style = "background:#888;transition:0.5s;transform: scale(1.1);cursor:pointer";
        var el=k.getElementsByTagName("p");
        console.log(el);
        el[0].style="color:black;transition:0.5s;transform:scale(1);font-weight: bold";
        var img=k.getElementsByTagName("img");
        img[0].style="transform:scale(1.1);transition:0.5s";

    });
})


function clicked() {
    var el = document.getElementById("img");
    el.style = "transition:all 0.5s ease-in;-webkit-transform: rotate(0deg);-moz-transform: rotate(0deg);-ms-transform: rotate(0deg);-o-transform: rotate(0deg);transform: rotate(0deg);filter: blur(0px);-webkit-filter: blur(0px)";

}