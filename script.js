document.getElementById("features").addEventListener("click",open1);
function open1(){
    document.getElementById("down1").classList.toggle("ac1");
    document.getElementById("flist").classList.toggle("ac3");
    document.getElementById("features").classList.toggle("cool");
}
document.getElementById("company").addEventListener("click",open2);
function open2(){
    document.getElementById("down2").classList.toggle("ac2");
    document.getElementById("clist").classList.toggle("ac4");
    document.getElementById("company").classList.toggle("cool2");
}
document.getElementById("ham").addEventListener("click",slide);
function slide(){
    document.getElementById("links1").classList.toggle("left1");
    document.getElementById("links2").classList.toggle("left2");
    document.getElementById("ham").classList.toggle("change");
}
document.getElementById("features","company").addEventListener("click",change);
function  change(){
    document.getElementById("clist").classList.toggle("cool5");
  
}