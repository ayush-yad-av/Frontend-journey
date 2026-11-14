let bait = document.createElement("div");
bait.classList.add("bait");

let game = document.querySelector(".game");
let play =document.querySelector(".play");
let reset =document.querySelector(".reset");
let container= document.querySelector(".container");
let x= 0;
let count=10;
 game.appendChild(bait);
 let mode = document.querySelector(".mode");


 //score
let p=document.querySelector("#score");

//count
let p1=document.querySelector("#time");
p1.textContent=`${count}`;
 

 //play
play.addEventListener("click",function(){
 bait.style.display= "block";
 //restart
 x=0;
p.textContent="0";
count=10;
p1.textContent=`${count}`;
 //interval
 let time= setInterval(function() {
    if(count>0){
        count--;
        p1.textContent=`${count}`;
       reset.addEventListener("click",function(){
        clearInterval(time);
       });
    }else{
        alert("Game over !");
       reset.click();
        clearInterval(time);
        
    }
}, 1000);

});

//Reset
reset.addEventListener("click",function(){
 bait.style.display= "none";
let randX= Math.floor(Math.random()*contwidth);
let randY= Math.floor(Math.random()*contHeight);
bait.style.left=randX + 'px';
bait.style.top=randY + 'px';
x=0;
p.textContent="0";
count=10;
p1.textContent=`${count}`;
});

let contwidth= game.clientWidth;
let contHeight= game.clientHeight;
//Bait

bait.addEventListener("click", function(){
let randX= Math.floor(Math.random()*contwidth-1);
let randY= Math.floor(Math.random()*contHeight-1);
bait.style.left=randX + 'px';
bait.style.top=randY + 'px';
x= x+10;
p.textContent=`${x}`;

});

//
if (localStorage.getItem("Theme")=="Dark") {
    document.body.classList.add("Dark")
}else if (localStorage.getItem("Theme")=="light"){
        document.body.classList.add("light")
        document.body.classList.remove("Dark")

} else{
    setTheme();
}

// theme
function setTheme(){
    if(window.matchMedia("(prefers-color-scheme: Dark)").matches){
        document.body.classList.remove("light");
        document.body.classList.add("Dark");
    }else{
        document.body.classList.remove("Dark");
        document.body.classList.add("light");
    }
}
window.matchMedia("(prefers-color-scheme: Dark)").addEventListener("change",function(){
    if (localStorage.getItem("Theme")=="") {
          setTheme();
    }
});

mode.addEventListener("click",function(){
    if (document.body.classList.contains("Dark")) {
        document.body.classList.remove("Dark");
        document.body.classList.add("light");

        localStorage.setItem("Theme","light");
    }else{
        document.body.classList.add("Dark");
        document.body.classList.remove("light");

        localStorage.setItem("Theme","Dark");
    }
});





