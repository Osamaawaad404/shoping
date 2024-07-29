

var heartIcon=document.querySelectorAll(".heart");
heartIcon.forEach((ele)=>{
    ele.addEventListener("click",function(){
        ele.classList.toggle("heart-color");
    });
})
