var tabone= document.getElementById("tabone");

tabone.addEventListener("click", function()
{
    const listtwo = document.getElementById("tabtwo").classList;
    listtwo.remove("activeTab");
    
    const listDetailstwo = document.getElementById("skills").classList;
    listDetailstwo.remove("active-Tab");
    
    const listone = document.getElementById("tabone").classList;
    listone.add("activeTab");
    const listDetailsOne = document.getElementById("education").classList;
    listDetailsOne.add("active-Tab");

     
});

var tabtwo= document.getElementById("tabtwo");

tabtwo.addEventListener("click", function()
{ 
    const listtwo = document.getElementById("tabtwo").classList;
    listtwo.add("activeTab");
    

    const listDetailstwo = document.getElementById("skills").classList;
    listDetailstwo.add("active-Tab");
    
    const listone = document.getElementById("tabone").classList;
    listone.remove("activeTab");
    const listDetailsOne = document.getElementById("education").classList;
    listDetailsOne.remove("active-Tab");
    

});
var b = document.getElementById("seeMore");
b.addEventListener("click", function () {
  alert ("Sorry,there are no more works");
});

var sideMenu = document.getElementById("sideMenu");
function openM(){
  sideMenu.style.right = "0";
}

function closeM(){
  sideMenu.style.right = "-200px";
}


