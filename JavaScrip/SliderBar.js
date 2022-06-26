const itemslidebar = document.querySelectorAll(".category-left-li")
// khi mà click vào sẽ add class "block" vào
itemslidebar.forEach(function(menu,index){
    menu.addEventListener("click",function(){
        menu.classList.toggle("block")
    })
})