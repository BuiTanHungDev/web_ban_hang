const chitiet = document.querySelector(".chitiet")
const baoquan = document.querySelector(".baoquan")

if(baoquan){
    baoquan.addEventListener("click",function(){
        document.querySelector(".product-content-right-bottom-content-chitiet").style.display="none"
        document.querySelector(".product-content-right-bottom-content-baoquan").style.display="block"
        
    })
    

}
if(chitiet){
    chitiet.addEventListener("click",function(){
        document.querySelector(".product-content-right-bottom-content-chitiet").style.display="block"
        document.querySelector(".product-content-right-bottom-content-baoquan").style.display="none"

    })
}
else{
    
    document.querySelector(".product-content-right-bottom-content-chitiet").style.display="block"
        document.querySelector(".product-content-right-bottom-content-baoquan").style.display="none"

}
