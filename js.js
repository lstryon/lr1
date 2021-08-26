var hero = document.getElementById("hero")
var block = document.getElementById("block")

function jump(){
    if(hero.classList != "animate"){
    hero.classList.add("animate");
    };
    setInterval(function(){
        hero.classList.remove("animate")
    },500);
}

var checkDead = setInterval(function(){
    var heroTop =
    parseInt(window.getComputedStyle(hero).getPropertyValue("top"));
    var blockLeft =
    parseInt(window.getComputedStyle(block).getPropertyValue("left"));
    if(blockLeft <20 && blockLeft>0 && heroTop>=130){
        block.style.animation ="none";
        hero.style.display ="none";
        alert("U lose");

    }
},10)